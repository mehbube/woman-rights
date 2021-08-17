import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <h1>Bizimlə əlaqə</h1>
            <div className="ftr">
            <div className="f-text">
                    <p>Haqqımızda bütün məlumatlardan anında xəbərdar olun</p>
                </div>
                <div className="email">
            <input type="email" />
                    <button className="sign" ><Link style={{color:'white'}} >Qeydiyyatdan keç</Link></button>
                </div>
               
            </div>
            
            <div className="icons">
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-whatsapp-square"></i>
                <i class="fab fa-invision"></i>

            </div>
            
        </div>
    )
}

export default Footer
