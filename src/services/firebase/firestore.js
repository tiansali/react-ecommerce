import { firestoreDb } from "./index"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { adaptProductFromFirestore } from "../../adapters/productsAdapter"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('categories', 'array-contains', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef)
            .then(response => {
                const products = response.docs.map(firestoreDoc => {
                    return adaptProductFromFirestore(firestoreDoc)
                })
                resolve(products)
            })
            .catch(error => {
                reject(error)
            })
        })
}