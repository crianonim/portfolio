import React from "react";
import "./Header.sass";
export default () => {
  return (<header>
      <img className="my-photo" alt="Jan Skowronski" src="img/jan.jpeg" />
      <div className="header-text">
          <h1>Jan Skowronski</h1> 
          <h2>software developer</h2>
      </div>
  </header>
  )
}