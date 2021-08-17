import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="bg">
                <h1>Bizimlə Əlaqə</h1>
            </div>
            <div className="connect">
            <div className="contact">
                <div className="solll">
                <input type="text" placeholder="Ad/Soyad"/>   <input type="email" placeholder="E-mail"/><br/>
                <input type="text" id="inptc" placeholder="Mövzu"/><br/>
                <textarea name="" id="" cols="57" rows="20" placeholder="Mesajınız"></textarea><br/>
                    <button className="submit">Göndər</button>
                </div>
                <div className="saggg">
                
                <i class="fas fa-home"><span>Adres-Bakı</span></i><br/>
                <i class="fab fa-whatsapp-square"><span>(012) 422 02 64</span></i>
                <i class="fas fa-envelope-square"><span>destek@gmail.com</span></i> 
                </div>
           
                </div>

                <div className="ic">
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-whatsapp-square"></i>
                <i class="fab fa-invision"></i>
                </div>
              
                </div>
        </div>
    )
}

export default Contact
