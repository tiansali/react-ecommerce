import './NavBar.scss'
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../services/firebase/firestore'
import UserContext from '../../UserContext/UserContext'
import NotificationContext from '../../NotificationContext/NotificationContext'

const NavBar = () => {
    const setClass = isActive => isActive ? 'NavBar__menu__item NavBar--accent' : 'NavBar__menu__item'
    const [ categories, setCategories ] = useState([])
    const { checkForUser } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
        getCategories()
            .then(categoriesList => {
                setCategories(categoriesList)
            }).catch(error => {
                console.log(error)
                setNotification('Problema con la base de datos, no se pudieron cargar las categorias del menu de navegacion', 'red')
            })
    }, [])

    return (
        <nav className='NavBar'>
            <Link to='/'>
                <img src={'../images/mamushcka-logo.svg'} alt='Mamushcka' className='NavBar__logo'/>
            </Link>
            <ul className='NavBar__menu'>
                <NavLink to='/' className={({isActive}) => setClass(isActive)}>Inicio</NavLink>
                {categories.map(category => {
                    return( <NavLink 
                            to={`/category/${category.id}`}
                            className={({isActive}) => setClass(isActive)}
                            key={category.id}>
                                {category.description}
                            </NavLink>)
                })}
            </ul>
            <Link to={'/user'} className='NavBar__login'>{checkForUser() ? checkForUser() : 'Login'}</Link>
        </nav>
    )
}

export default NavBar