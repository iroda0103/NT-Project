import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu,MdClose,MdHome, MdAreaChart, MdCategory, MdCalendarToday, MdOutlineDateRange } from 'react-icons/md'


const Header = () => {
    const[active,setActive]=useState(false)
    const activateNav = () => {
        setActive(!active)
        
    }
    return (
        <div className={active ? 'header':'header-mobile'}>
            <div className='menu-icon' onClick={activateNav}>
                {!active? <MdMenu className='menu'/> : <MdClose className='close-icon'/>}
                
            </div>
            <nav>
                <ul className={active ? 'ul-item':'ul-item oicon'}>
                    <li>
                        <MdHome className="nav-icon" />
                        <Link to=''>Asosiy</Link>
                    </li>
                    <li>
                        <MdAreaChart className="nav-icon" />
                        <Link to=''>Hudud</Link>
                    </li>
                    <li>
                        <MdCategory className="nav-icon" />
                        <Link to=''>Kategoriya</Link>
                    </li>
                    <li>
                        <MdCalendarToday className="nav-icon" />
                        <Link to=''>Vaqtdan</Link>
                    </li>
                    <li>
                        <MdOutlineDateRange className="nav-icon" />
                        <Link to=''>Vaqtgacha</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header






