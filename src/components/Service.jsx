import React from 'react'
import code from "../assets/code.png"
import android from "../assets/android.png"
import back from "../assets/back.png"
import datos from "../assets/datos.png"
import seo from "../assets/seo.png"

import design from "../assets/design.png"
import { ImLinkedin ,ImEmbed2} from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Service(){
  return (
    <section  data-aos="fade-right"
  
 
   
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" class="services" id="services">
    <div class="heading">
        <h2>Services</h2>
        <span>My Services</span>
    </div>
    <div class="services-content">

        <div class="services-box">
            <img className='services-img' src={code} alt="" />
            <h3>Web Development</h3>
            
        </div>

        <div class="services-box">
        <img className='services-img' src={back} alt="" />
            <h3>Backend Development</h3>
            
        </div>
        <div class="services-box">
        <img className='services-img' src={design} alt="" />
            <h3>UI/UX Design</h3>
            
        </div>

      
        
    </div>
    <div class="services-content">

    <div class="services-box">
    <img className='services-img' src={android} alt="" />
            <h3>App Development</h3>
            
        </div>
        <div class="services-box">
        <img className='services-img' src={seo} alt="" />
            <h3>
SEO positioning</h3>
            
        </div>
        <div class="services-box">
        <img className='services-img' src={datos} alt="" />
            <h3>Database</h3>
            
        </div>
    </div>
</section>
  )
}
export default Service