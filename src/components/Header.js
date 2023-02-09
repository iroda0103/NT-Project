import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAreaChart, MdCategory } from "react-icons/md";
import { IoTimerOutline,  } from "react-icons/io5";
import { AiOutlineFieldTime,AiOutlineHome,AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Header = () => {
    const [active, setActive] = useState(false);
    const activateNav = () => {
        setActive(!active);
    }
    return (
        <div className={active ? 'header' : 'header-mobile'}>
            <div className="menu-icon" onClick={activateNav}>


                {!active ? <AiOutlineMenu className="menu" /> : <AiOutlineClose className="close-icon"/>}
            </div>
            <nav>
                <ul className={active ? 'ul=item' : 'ul-item oicon'}>
                    <li>
                        <AiOutlineHome className="nav-icon"/>
                        <Link to=''>Asosiy</Link>
                    </li>
                    <li>
                        <MdAreaChart className="nav-icon"/>
                        <Link to=''>Hudud</Link>
                    </li>
                    <li>
                        <MdCategory className="nav-icon"/>
                        <Link to=''>Kategoriya</Link>
                    </li>
                    <li>
                        <IoTimerOutline className="nav-icon"/>
                        <Link to=''>Vaqtdan</Link>
                    </li>
                    <li>
                        <AiOutlineFieldTime className="nav-icon"/>
                        <Link to=''>Vaqtgacha</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;