import {Link, NavLink} from 'react-router-dom'
import AuthContext from '../store/authContext'
import logo from '../assets/dm-logo-white.svg'
import { useContext, useState } from 'react'

const Header = () => {
const authCtx = useContext(AuthContext)


    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }

    return (
        <header className='header flex-row'>
            <div className='flex-row'>
                <img src={logo} alt='dm-logo' className='logo'/>
                <h2>Social Mountain</h2>
            </div>
            <nav>
                {
                    authCtx.token ? (
                
                <ul className='main-nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='profile'>Profile</Link>
                    </li>
                    <li>
                       <Link to='form'>Add Post</Link>
                    </li>
                    <li>
                        <button className='logout-btn' onClick={() => authCtx.login()}>Login</button>
                    </li>
                </ul>
                    ) : (
                        <ul className='main-nav'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/auth'>Login or Sign Up</Link>
                            </li>

                        </ul>
                    )
                }
            </nav>
        </header>
    )
}

export default Header