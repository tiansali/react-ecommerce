import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <img src={'./images/mamushcka-logo.svg'} alt='Mamushcka' className='NavBar_logo'/>
            <div className='NavBar_menu'>
                <span className='NavBar_menu_item NavBar_accent'>Inicio</span>
                <span className='NavBar_menu_item'>Alfajores</span>
                <span className='NavBar_menu_item'>Tabletas</span>
                <span className='NavBar_menu_item'>Bombones</span>
            </div>
            <span className='NavBar_login NavBar_accent'>Login</span>
        </nav>
    )
}

export default NavBar