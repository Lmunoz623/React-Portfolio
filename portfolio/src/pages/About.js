import React from "react";
 import image from "../../images/Profile_pic.jpg"

 function About() {
   return (
     <div>
       <div className="hero-section">
         <div className="hero-section-text">
           <h1 className="aboutMe-title">ABOUT ME</h1>
           <h5 className="aboutMe-subtitle">Full Stack Web Developer</h5>
         </div>
       </div>
       <div className="card-user-profile">
         <img className="card-user-profile-img" src={image} alt="profile-pic" />
         <div className="card-user-profile-content card-section">
           <p className="card-user-profile-name">Lisa Muñoz</p>
           <p className="card-user-profile-status">Web Designer</p>
           <p className="card-user-profile-info">I currently live in San Antonio with my wife and two dogs. I enjoy traveling and will jump on a plane any chance I get! I also like to dabble in photography and when I'm not doing that, you can find me exploring my city and enjoying the outdoors.</p>
         </div>
     </div>
     </div>
   );
 }

 export default About; 