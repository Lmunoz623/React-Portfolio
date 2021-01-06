import React from "react";
import linkedinImage from "../../images/linkedin.png";
import instagramImage from "../../images/instagram.png";
import githubImage from "../../images/githubPhoto.jpg";

function Contact() {
   return (
    <div>
        <main action="" className="container contact-contain">
            <h2>Contact</h2>
            <ul className="contact">
                 <li className="cont">Email: lisa_munoz817@yahoo.com</li>
                 <li className="cont">Phone: 210.326.9111</li>
                 <li className="cont">
                     <a href="../../images/LisaMunozResume.pdf">Resume</a>
                 </li>
             </ul>
         </main>
         <aside>
             <h3>Find Me @</h3>
             <div className="row">
                 <div className="col-4-md logo">
                     <img src={linkedinImage} alt="Linkedin Logo"/> 
                 </div>
                 <div className="col-4-md logo">
                     <img src={instagramImage} alt="Instagram Logo"/> 
                 </div>
                 <div className="col-4-md logo">
                     <img src={githubImage} alt="github Logo"/> 
                 </div>
             </div>
         </aside> 
    </div>
  );
}
export default Contact;