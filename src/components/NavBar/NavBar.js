import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const setClass = x => x ? 'NavBar_menu_item NavBar_accent' : 'NavBar_menu_item'
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setCategories(categories)
        })
    }, [categories])

    return (
        <nav className='NavBar'>
            <Link to='/'>
                <img src={'../images/mamushcka-logo.svg'} alt='Mamushcka' className='NavBar_logo'/>
            </Link>
            <div className='NavBar_menu'>
                <NavLink to='/' className={({isActive}) => setClass(isActive)}>Inicio</NavLink>
                {categories.map(category => {
                    return( <NavLink 
                            to={`/category/${category.id}`}
                            className={({isActive}) => setClass(isActive)}
                            key={category.id}>
                                {category.description}
                            </NavLink>)
                })}
            </div>
            <CartWidget/>
            <span className='NavBar_login'>Login</span>
        </nav>
    )
}

export default NavBar