import React,{useEffect,useState,useRef} from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from 'typed.js'
function Home() {
  const typedTarget = useRef(null)
  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: ['Bizim hədəfimiz bu fərqindəliyi yaratmaqdır', ''],
      typeSpeed: 40,
      loop: true
    })
    Aos.init({duration:2000});
},[])
  const [modal, setModal] = useState(false);
  
  return (
        <div>
            <div className="Image" >
                <img src="" alt=""/>
                <h1 className="bir" >Bütün qadınlar öz güclərinin fərqində olsaydı nələr ola biləcəyini təsəvvür edə bilirsinizmi?</h1>
                <h1 className="iki" ref={typedTarget}></h1>
            </div>
            <div className="tutum">
            <div className="dekabr">
                
                <div className="left" >
                    <img src="https://i2.milimaj.com/i/milliyet/75/0x410/5de8b9dd5542872030849cff.jpg" alt=""/>
                </div>
                    <div className="right" data-aos="fade-right">
                        <h1>5 Dekabr - Dünya Qadın Haqları Günü</h1>
                        <p>5 dekabr - Dünya Qadın Haqları Günüdür Türkiyədə 1934-cü il dekabrın 5-də Mustafa Kamal Atatürk tərəfindən qadınlara seçmə və seçilmə haqqı verilib. 
                        O tarixdən bəri bu özəl gün Türkiyə və dünyada Dünya Qadın Haqları günü kimi qeyd edilir.
                        Bu xüsusi gün qadınların daha insani şərtlərdə yaşama haqlarının dilə gətirildiyi mübarizə və birlik günü hesab edilir.   
                         
           </p>
            </div>
                </div>
                <div className="tutum-2">
                    <div className="left-2"  data-aos="fade-right">
                        <p>1918-ci ildə yaradılmış Azərbaycan Xalq Cümhuriyyəti dövründə ölkə ərazisində yaşayan bütün xalqların və hər iki cinsin bərabər seçki hüququ qanunla təsbit edilib. Bununla Azərbaycan şərqdə qadınlara seçki hüququ verən ilk ölkə olub. 
Bu gün Azərbaycanda Milli Məclisdə təmsil olunan qadın deputatların sayı 20-dir.</p>
                    </div>
                    <div className="right-2" data-aos="fade-up">
                        <img src="https://azlogos.eu/wp-content/uploads/2020/01/image019.png" alt=""/>
                    </div>
                </div>
            </div>
            
            <div className="next">
              
                <div className="kvadrat" data-aos="fade-right"> 
                    <p > Sağlamlıqdan təhsildən sahibkarlığa qədər qızlar üçün xidmətlərə milyardlarla dollar sərmayə qoyulmuşdur. Bunlar ehtiyac duyulan xidmətlərdir. Yenə də milyonlarla qız haqları olsa belə onlardan istifadə etmir.
                    Niyə? Çünki qızlar xidmətləri ‘onlara uyğun’ olaraq görmürlər. Bəzən cəmiyyətdən aldığı mesajlar onlara mane olur. * Hər kəsin qızların nə etməsi lazım olduğuna dair bir fikri var. 
                         </p>
                    
            </div>  


        
            </div>


            <div class="cakes">
    
      <h2>Yanlış Stereotiplər</h2>
      <div class="photos" data-aos="zoom-in-down">
        <div class="first">
          <div class="photo">
            <img src="https://img.freepik.com/free-photo/inspired-caucasian-female-model-with-short-haircut-looking-away-with-shy-smile-purple-wall-photo-lovable-brown-haired-woman-sweater-relaxing-photoshoot_197531-7990.jpg?size=626text=jpg" alt="" />
          </div>
          <h4>Yaxşı qız elə geyinməz</h4>
{/*           
              <a href="#" class="order">Ətraflı</a> */}
              <Link  to="/blog" class="order">Ətraflı</Link>
        </div>

        <div class="first"> 
          <div class="photo">
            <img src="https://image.freepik.com/free-photo/indoor-shot-of-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-at-university_273609-1270.jpg" alt="" />
          </div>
          <h4>Qadınsan,yerini bil</h4>
          
              {/* <a href="#" class="order">Ətraflı</a> */}
              <Link  to="/blog" class="order">Ətraflı</Link>
        </div>

        <div class="first ph">
          <div class="photo" >
            <img src="https://img.freepik.com/free-photo/indoor-shot-of-young-cheerful-dark-haired-woman-keeping-raised-hand-on-her-chest-and-laughing-happily-with-closed-eyes-isolated-over-blue-wall_295783-11258.jpg?size=626text=jpgga=GA1.2.862581661.1615248000" alt="" />
          </div>
          <h4>Qızsan sən,az gül</h4>
         
              {/* <a href="#" class="order">Ətraflı</a> */}
              <Link  to="/blog" class="order">Ətraflı</Link>
        </div>
      </div>
    </div>
            
    
            
      <div className="girl">
       
        <div className="girl-photo">
    
          <img src="https://c0.wallpaperflare.com/preview/780/969/134/women-business-office-meetings.jpg"/>
        </div>
        
        <div className="girl-p">
          <h1>Özünüzə Güvənin</h1>
  <p>Qızların özlərinə güvənən zaman istədikləri hərşeyə nail ola bilərlər.Qızları danışıqlar aparmaq bacarığı ilə silahlandırmağın vaxtı gəldi.Biz qızların həyatında seçim və dəyişikliklər etməsinə kömək edən bir məzmun yaradırıq.Beləliklə, hər qız öz həyatına, sağlamlığına, təhsilinə və dolanışığına nəzarət etməyi seçə bilər.</p>
                </div>
        </div>

      
        <div class="video">
      <div id='clickVideo' class="v-icon">
               <i onClick={()=>setModal(true)} class="fas fa-play" id="i1"></i>
               <i onClick={()=>setModal(false)} class="fas fa-times" id="i2"></i>
      </div >
        {modal && <iframe width="50%" height="400" src="https://www.youtube.com/embed/m_UjYOfmkn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    </div> 


      
<div className="illus">
        <div className="illustration">
          <div className="i-left" data-aos="fade-right">
            <p>Qızlara dəstək olmağın vaxtı gəldi.Çünki bir qız həyatını dəyişdirən fərqli seçimlər etmək gücünü tapdıqda, başqalarına da bunu etməyə ilham verir.Ailəsini, cəmiyyətini və ölkəsini təsir edən dalğalanma effektinə başlayır.Qadına Dəstək platforması qızların həyatında müsbət seçimlər və dəyişikliklər etməsinə kömək edən məzmun yaradır. Bu universal bir həqiqətdir: hər qıza və qadına öz yerlərini bilməsi söylənmişdir. Qız günündə dünyadakı qızların yerlərinin istədikləri yerdə olduqlarını bilmələrini istəyirik. </p>
          </div>
          <div className="i-right">
            <img src="http://st.depositphotos.com/1049680/2265/i/450/depositphotos_22652109-Young-Woman-Using-Laptop.jpg"/>
          </div>
          </div>
          </div>


          <div class="container-3">
      <span>Məqsədimiz</span>
      <h2>Qadınlara Dəstək Bizim Hədəfimizdir</h2>
      <div class="pet">
        <div class="a-1">
          <div class="icon">
            <img src="https://image.flaticon.com/icons/png/512/190/190613.png" alt="" />
          </div>
          <a href="#">Qadınlar Güclüdür</a>
          <p>
          Çünki bir qız həyatını dəyişəcək fərqli seçimlər etmək gücünü tapanda başqalarını da buna təşviq edir.
          </p>
        </div>

        <div class="a-1">
          <div class="icon">
            <img src="https://image.flaticon.com/icons/png/512/146/146005.png" alt="" />
          </div>
          <a href="#">Qadınlar Güclüdür</a>
          <p>
         Onlar öz gücünü kəşf etdikdə ailəsinə, cəmiyyətinə, ölkəsinə təsir edən bir dalğalanma təsiri başlayır.
          </p>
        </div>

        <div class="a-1">
          <div class="icon">
            <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="" />
          </div>
          <a href="#">Qadınlar Güclüdür</a>
          <p>
          Beləliklə hər bir qız öz təhslinə, sağlamlığına,qərarlarına və ən əsası həyat tərzinə nəzarət etməyi seçə bilər. 
          </p>
        </div>
      </div>
    </div>



      
        

        <div className="hedef" id="hedef" data-aos="zoom-in-right">
          <h1 id="h-1">HƏDƏFİMİZ</h1>
          <p id="p"> Bir qız həyatını dəyişdirəcək fərqli seçimlər etmək gücünü tapdıqda, başqalarına da bunu etmək üçün ilham verir.Biz qızların həyatında müsbət seçimlər və dəyişikliklər etməsinə kömək edən məzmun yaratmağa çalışırıq. </p>
          <Link  to="/login" class="order">Qeydiyyatdan Keç</Link>
        </div>

            </div>
    )
} 

export default Home
