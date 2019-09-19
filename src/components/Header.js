import React from "react";
import "./Header.sass";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone, faAdjust} from '@fortawesome/free-solid-svg-icons';

const toggleTheme = ()=>{
    document.querySelector('body').classList.toggle('dark')
}
export default () => {
  return (<header>
      <img className="my-photo" alt="Jan Skowronski" src="img/jan.jpeg" />
      <div className="header-text">
          <div className="top">
            <h1>Jan Skowronski</h1> 
            <h2>software developer</h2>
            <h3>
            <FontAwesomeIcon title="Change theme" className="adjust-button" icon={faAdjust} onClick={toggleTheme}/>
            </h3>
          </div>
          <h2 className="contact">
          <a href="https://github.com/crianonim" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="https://www.linkedin.com/in/jan-skowronski/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin}/>
          </a>

          <a href="mailto:crianonim@gmail.com" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faEnvelope}/>
          </a>
              <FontAwesomeIcon icon={faPhone} />
          <span className="phone-number">07946850877</span>
              
          </h2>
      </div>

  </header>
  )
}