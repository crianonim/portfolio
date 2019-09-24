import React from "react";
import "./DecorationUser.sass";
export default ({user}) => {
  return (
    <div className="decoration-user">
        <img src={user.img} alt={user.name}/>
        <span className="decoration-user-name"><a rel="noopener noreferrer" target="_blank" href={user.url}>{user.name}</a></span>
    </div>
  )
}