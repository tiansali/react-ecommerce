import './User.scss'
import { useContext, useState } from 'react'
import UserContext from '../../UserContext/UserContext'
import NotificationContext from '../../NotificationContext/NotificationContext'

const User = () => {
    const { user, setUser } = useContext(UserContext)
    const [ formData, setFormData] = useState(user)
    const { setNotification } = useContext(NotificationContext)

    const emptyUser = {firstName: '', lastName: '', email: '', adress: ''}
    
    const handleInputOnChange = e => {
        const formField = e.target.name
        const formFieldValue = e.target.value
        setFormData({
            ...formData,
            [formField] : formFieldValue
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        
        const userObject = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            adress: e.target.adress.value
        }

        setUser(userObject)
        setNotification('Información de usuario guardada', 'green')
    }

    const handleLogOut = () => {
        setUser({emptyUser})
        setFormData(emptyUser)
        setNotification('Información de usuario eliminada', 'red')
    }

    return(
        <form className='Form' onSubmit={handleFormSubmit}>
            <h1 className='Form__title'>
                Datos del usuario
            </h1>
            <label className='Form__label'>
                Nombre
                <input 
                 type='text'
                 className='Form__input' 
                 name='firstName'
                 onChange={handleInputOnChange}
                 value={formData.firstName}
                 />
            </label>
            <label className='Form__label'>
                Apellido
                <input 
                 type='text'
                 className='Form__input' 
                 name='lastName'
                 onChange={handleInputOnChange}
                 value={formData.lastName}
                 />
            </label>
            <label className='Form__label'>
                E-mail
                <input 
                 type='text'
                 className='Form__input' 
                 name='email'
                 onChange={handleInputOnChange}
                 value={formData.email}
                 />
            </label>
            <label className='Form__label'>
                Dirección
                <input 
                 type='text'
                 className='Form__input' 
                 name='adress'
                 onChange={handleInputOnChange}
                 value={formData.adress}
                 />
            </label>
            <input 
             type='submit'
             value='Confirmar'
             className='Form__input Form__input--submit'
            />
            <input
             type='button'
             value='Log out'
             onClick={handleLogOut}
             className='Form__input Form__input--logOut'
            />
        </form>
    )
}

export default User