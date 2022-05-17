import Notification from '../components/Notification/Notification'
import { useState, createContext } from 'react'

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState()
    const [color, setColor] = useState()
    const notificationTime = 3000

    const setNotification = (inputMessage, inputColor) => {
        setMessage(inputMessage)
        setColor(inputColor)
        setTimeout(() => {
            setMessage('')
        }, notificationTime)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} color={color}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext