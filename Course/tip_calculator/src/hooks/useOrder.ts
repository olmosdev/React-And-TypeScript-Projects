import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Using Generics
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItem = {...item, quantity: 1} // Casting
            setOrder([...order, newItem])
        }
    }

    // https://medium.com/@atshn.gunduz/usestate-callback-29278203e498
    const removeItem = (id: MenuItem["id"]) => { // Using Lookup
        setOrder(prev => prev.filter( item => item.id !==id ))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}