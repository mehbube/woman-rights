import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="container">
            <div className="form">
                <div className="sol">
                <h1>Daxil ol</h1>
                <input type="text" placeholder="E-mail" id="inpt1" /><br />
                    <input type="text" placeholder="Şifrə" id="inpt2" /><br />
                    <span className="s-1">Şifrəmi unuttum</span><br />
                    <button className="btn"><a href="#">GİRİŞ</a></button>

                </div>

                <div className="sag">
                    <h1>Xoş gəlmisiniz!</h1>
                    <p>Qatılmaq üçün qeydiyyatdan keçin</p>
                    <input type="text" placeholder="Ad/Soyad" id="inpt1" /><br />
                    <input type="text" placeholder="Şifrə" id="inpt2"/><br />
                    <input type="email" placeholder="E-mail" id="inpt1" className="inpta" /><br />
                    <input type="number" placeholder="Nömrə" id="inpt2" className="inptb" /><br />
                    <button className="btn-2"><a href="#">QEYDIYYAT</a></button>
                </div>
         </div>
        </div>
    )
}

export default Login
