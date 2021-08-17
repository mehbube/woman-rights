import React,{useEffect} from 'react';
import './Blog.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Blog() {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
      
    return (
        <div>
            <div className="str">
                <h1 >İNAN.ÇALIŞ.DƏYİŞ</h1>
                <p>Seçimlərimizi dəyişək,həyatımız dəyişsin.</p>
            </div>
            <div className="text"  >
                <h1 ><span>Qız öz yerini bilməlidir</span> və o yer onun olmaq istədiyi yerdir.</h1>
                <p  >Bu universal bir həqiqətdir: hər qıza və qadına öz yerlərini bilməsi söylənmişdir. Biz bütün dünyada qızların yerlərinin istədikləri yerdə olduqlarını bilmələrini istəyirik. </p>
            </div>

            <div className="sekiller"  >


                
                
                <div className="sekil-1">
                    <img src="https://www.usnews.com/dims4/USNEWS/1a344a1/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fe7%2F39%2F200d98cf4e538f62a25682c75b07%2F171219-teacher-stock.jpg"/>
                <p>Müəllim</p>
                </div>
                <div className="sekil-1">
                    <img src="https://www.cwcdivision66.com/sbtemplates/sbcommon/images/Meet_the-Doctor-Woman.jpg" alt="" />
               <p>Həkim</p>
               
                </div>
                <div className="sekil-1">
                    <img src="https://www.amtekcompany.com/wp-content/uploads/2015/01/iStock_000021283585_600px.jpg" alt=""/>
               <p>Mühəndis</p>
                </div>
                <div className="sekil-1">
                    <img src="https://www.agora-gallery.com/advice/wp-content/uploads/Artist-in-quarantine-1280x720.jpg" alt="" />
                <p>Rəssam</p>
                </div>
                {/* <div className="sekil-1">
                    <img src="https://i.ytimg.com/vi/FtIE7juUBdo/maxresdefault.jpg" alt=""/>
                </div> */}
            </div>

            

            
            

            <div className="faktlar">
                <h1>Maraqlı Faktlar</h1>
                </div>
            <div className="maraqli">
            {/* <div className="m-picture">
                    <div className="d-1"><div className="firsts">1</div></div>
                    <div className="d-1"><div className="firsts">2</div></div>
                    <div className="d-1"><div className="firsts">3</div></div>
                    <div className="d-1"><div className="firsts">4</div></div>
                    <div className="d-1"><div className="firsts">5</div></div>
                  
                </div> */}



                <div className="dizayn" data-aos="fade-right" >
                    <div className="d-2">
                      <p>Ən yüksək IQ göstəricisi olan qadının IQ-sü 196-dır. </p>
                    </div>
                        
                    <div className="d-2a"><div className="seconds">1</div></div>
                    <div className="d-2">
                      <p>Statistikaya görə, qadınlar kişilərdən 5 il çox yaşayır.</p>
                    </div>
                        
                        <div className="d-2a"><div className="seconds">2</div></div>
                    
                        <div className="d-2">
                      <p>  Qadınlar orta hesabla gün ərzində 20 min söz ifadə edirlər. </p>
                    </div>
                        
                        <div className="d-2a"><div className="seconds">3</div></div>
                    
                        <div className="d-2">
                      <p>Bir qadın beyni dəqiqədə 100 mln. məlumat ala bilir.</p>
                    </div>
                        
                        <div className="d-2a"><div className="seconds">4</div></div>
                    
                        <div className="d-2">
                      <p>Qadınların ən güclü əzələsi dilidir.</p>
                    </div>
                        
                        <div className="d-2a"><div className="seconds">5</div></div>
                    
                
                   
                </div>
                <div className="resim">
                    <img src="http://ikisahil.az/photo/975x540_2/upload/2019/02/20/1550646083_6778750.jpg" alt=""/>
              </div>
            </div>
            
            <div className="etrafli">
                <div className="e-container">
                <div className="soll">
                    <img src="https://bottlesonic.com.au/wp-content/uploads/2017/12/girl-purple2.png" alt=""/>
                </div>
                <div className="sagg"  data-aos="fade-left">
                    <p>Cəmiyyətdə bəzi insanlar qızlara qarşı çox önyarğılı davranırlar."Yaxşı qız elə geyinməz","Qız çox gülməz","Qadınsan,yerini bil"və s. kimi fikirlər səsləndirirlər.Bu düşüncələr bəzən qadınların azadlığının əlindən alıb,cəmiyyətdə öz istədiyi yeri tutmağına mane olur.Qadınların sərbəst seçimlər etmək,istədikləri kimi davranmaq,istədkiləri qədər gülmək haqqları var.Həyata bir dəfə gəlirik və bu həyatı istədiyimiz kimi yaşamalıyıq.Bir qadının təhsil almağı,uğurlu olmağı bir ailənin uğuru deməkdir.Hər qadın öz hüquqlarını bilərsə,onlardan düzgün şəkildə istifadə edərsə həyat daha gözəl olar.</p>
                    </div>  
                </div>
                </div>
        </div>
    )
}

export default Blog
