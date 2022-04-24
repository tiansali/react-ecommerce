import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = id => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (item) => {
        let newCart = [...cart]
        if (isInCart(item.id)) {
            const index = cart.findIndex(prod => prod.id === item.id)
            newCart[index] = item
        } else {
            newCart = [...cart, item]
        }
        setCart(newCart)
    }

    const getTotalPrice = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price*prod.quantity
        })

        return total
    }

    const getTotalQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    const getItemQuantity = id => {
        const prod = cart.find(prod => prod.id === id)
        if (prod) {
            return prod.quantity
        } else {
            return 0
        }
    }

    const removeItem = id => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {setCart([])}

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getTotalPrice,
            getTotalQuantity,
            getItemQuantity,
            clearCart,
            removeItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext