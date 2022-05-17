import { firestoreDb } from "./index"
import {
    getDocs,
    getDoc,
    addDoc,
    doc,
    collection,
    query,
    where,
    writeBatch,
    documentId } from 'firebase/firestore'
import { adaptProductFromFirestore } from "../../adapters/productsAdapter"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('categories', 'array-contains', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsList = response.docs.map(firestoreDoc => {
                    return adaptProductFromFirestore(firestoreDoc)
                })
                resolve(productsList)
            })
            .catch(error => {
                reject(error)
            })
        })
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(firestoreDb, 'categories'))
            .then(response => {
                const categoriesList = response.docs.map(firestoreDoc => {
                    return { id: firestoreDoc.id, ...firestoreDoc.data() }
                })
                resolve(categoriesList)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(firestoreDb, 'products', itemId))
            .then(response => {
                const item = { id: response.id, ...response.data()}
                resolve(item)
            }).catch(error => {
                reject(error)
            })
    })
}

export const createOrderInFirestore = (order) => {
    return new Promise((resolve, reject) => {
        const cart = order.items
        
        const ids = cart.map(item => item.id)
        
        const batch = writeBatch(firestoreDb)
    
        const productsCollectionRef = collection(firestoreDb, 'products')
    
        const outOfStock = []
        
        getDocs(query(productsCollectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const docData = doc.data()
                    const quantityInCart = cart.find(prod => prod.id === doc.id).quantity
    
                    if(docData.stock >= quantityInCart) {
                        batch.update(doc.ref, { stock: docData.stock - quantityInCart})
                    } else {
                        outOfStock.push({id: doc.id, ...docData})
                    }
                })
            }).then(() => {
            if(outOfStock.length === 0) {
                const ordersCollectionRef = collection(firestoreDb, 'orders')
                return addDoc(ordersCollectionRef, order)
            } else {
                return Promise.reject({name: 'outOfStockError', products: outOfStock})
            }
        }).then((order) => {
            batch.commit()
            resolve(order.id)
        }).catch(error => {
            reject(error)
        })

    })
}

export const getOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(firestoreDb, 'orders', orderId))
            .then(response => {
                const order = { id: response.id, ...response.data()}
                resolve(order)
            }).catch(error => {
                reject(error)
            })
    })
}