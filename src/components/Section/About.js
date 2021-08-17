import React from 'react'
import "./About.css"
import { Link } from "react-router-dom"

function About() {
    return (
        <div >
            <div className="pic">
                <h1>HAQQIMIZDA</h1>
            </div>
            
            <div className="cont">
                <div className="img1">
                    <img src="https://img.freepik.com/free-photo/young-caucasian-woman-wearing-ski-clothes-isolated-smiling-confident-with-crossed-arms_1187-43978.jpg?size=626text=jpg" alt=""/>
                </div>
                <div className="img2">
                    <p>Böyük ürəkləri və hədəfləri olan qadınlar üçün</p>
                </div>
                <div className="p-yazi"><p>Qızların həyatında seçim və dəyişikliklər etməsinə kömək edən bir məzmun yaradırıq. Gələcəklərini təyin edə biləcək bir zamanda fərqli davranacaqlarına inamlarını alovlandırmağa çalışırıq. Beləliklə, hər qız həyatına, sağlamlığına, öyrənməsinə və dolanışığına nəzarət etməyi seçə bilər.</p></div>
            </div>
            <div className="hedef" id="hedef">
          <h1 id="h-1">HƏDƏFİMİZ</h1>
          <p id="p"> Bir qız həyatını dəyişdirəcək fərqli seçimlər etmək gücünü tapdıqda, başqalarına da bunu etmək üçün ilham verir.Biz qızların həyatında müsbət seçimlər və dəyişikliklər etməsinə kömək edən məzmun yaratmağa çalışırıq. </p>
          <Link  to="/login" class="order">Qeydiyyatdan keç</Link>
        </div>
        </div>
    )
}

export default About
