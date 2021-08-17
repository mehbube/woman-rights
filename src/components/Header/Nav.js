import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';



function Nav() {
    const [menu,setMenu] = useState(false)
    return (
        <>
            <ul className={"menu-test "+ (menu&&"activemenu")}
            >
          <li ><NavLink exact to="/">Ana Səhifə</NavLink ></li>
          <li><NavLink  to="/blog">Məlumat</NavLink ></li>
          
          <li><NavLink  to="/about">Haqqımızda</NavLink ></li>
                <li><NavLink to="/login">Qeydiyyat</NavLink ></li>
                <li><NavLink to="/contact">Əlaqə </NavLink ></li>
                <button className="call">(012) 422 02 64</button>
                <li style={{zIndex:999}} onClick={()=>setMenu(false)} className="close">X</li>
        </ul>
        <div onClick={()=>setMenu(true)} className="menu" ><i class="fas fa-bars"></i></div>
        </>
    )
}

export default Nav
