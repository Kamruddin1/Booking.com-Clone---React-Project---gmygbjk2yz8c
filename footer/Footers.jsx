import React from "react";
import "./footerstyle.css";

const Footers = () => {
  return (
    <>
      <div className="footer-conatiner">
        <div className="outer-footer">
          <div className="inner-footer">
            <div className="title-footer">
              <h1>
                <span>
                  <img
                    src="https://th.bing.com/th/id/R.cd64b78f2becba534b5735355b906737?rik=uS8upc2T%2fF0QsQ&riu=http%3a%2f%2fimg.talkandroid.com%2fuploads%2f2015%2f12%2fbooking-dot-com-logo.png&ehk=%2fxIuEyYWDAcdnK0bCK251ZKDVAOG7sD7tE6B2oPCSNg%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </span>
                BOOKIN.COM
              </h1>
            </div>
            <div className="social-media">
              <div className="linkdin">
                <div className="icons">
                  <p><img src="https://th.bing.com/th?id=OIP.6-Etwy2306AInODxxbDK6gHaHY&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""/></p>
                  <p><img src="data:image/jpeg;base64,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" alt=""/></p>
                 <p><img src="data:image/jpeg;base64,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" alt=""/></p>
                 </div>
           </div>
             
              <div className="about">
                <h1>About Us</h1>
                <div className="abouts">
                  <p className="about-us">Company Us</p>
                  <p className="about-us">About Us</p>
                  <p className="about-us">Review</p>
                </div>
              </div>
              <div className="contact">
                <h1>Contact Us</h1>
                <div className="contacts">
                  <p className="about-us">Email: booking@gmail.com</p>
                  <p className="about-us">Phone: 384-387-280</p>
                  <parent className="about-us">Adrress: ah-hy-p -32uu Lucknow</parent>
                </div>
              </div>
              <div className="support">
                <h1>Support</h1>
                <div className="supports">
                  <p className="about-us">FAQ</p>
                  <p className="about-us">Help Desk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2023 by booking.com</p>
        </div>
      </div>
    </>
  );
};

export default Footers;
