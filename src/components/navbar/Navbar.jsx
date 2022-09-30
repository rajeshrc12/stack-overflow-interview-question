import React from 'react'
import "./navbar.css";

import { BsSearch } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

import Popup from 'reactjs-popup';

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg" alt="" />
            </div>
            <div className="mobile_menu">
                <HiMenu size={20}/>
            </div>
            <div className="mobile_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt="" />
            </div>
            <div className="search_bar">
                <input type="text" placeholder='Search'/>
                <div className="search_icon">
                    <BsSearch />
                </div>
            </div>
            <div className="icon">
                <BiHelpCircle size={20} /><div>Help</div>
            </div>
            <div className="icon">
                <CgScreen size={20} /><div>Tour</div>
            </div>
            <Popup trigger={<button className='person'><img className='person_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8SpKYYlvf8m-fbYPhzeB3jbIMkBW-4QH2g&usqp=CAU" alt="" /></button>}
                position="bottom right">
                <div>HI I am Rajesh</div>
            </Popup>
        </div>
    )
}

export default Navbar