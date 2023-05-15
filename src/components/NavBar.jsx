import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <div className="navBar">
            <div className="container">
                <div className="logo">
                    <div className="logoContent">
                    <p >Gurleen Blog</p>
                    <p className="blogType">ART & TECHNOLOGY</p>
                    </div>
                    <div className="Top-light-circle"></div>
                    <div className="circle"></div>
                    <div className="light-circle"></div>
                </div>
                <div className="links">
                    <Link className="link" to='/?cat=art'>
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to='/?cat=science'>
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to='/?cat=technology'>
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className="link" to='/?cat=cinema'>
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="link" to='/?cat=design'>
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to='/?cat=food'>
                        <h6>FOOD</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span>
                        <Link className="link" to='/write'>Write</Link>
                    </span>

                </div>

            </div>
            
        </div>
    )
}

export default NavBar