import React from "react";
import "./PersonalInterest.sass";
export default ({interest:{name,img,content}}) => {
  const style={
      backgroundImage: 'url(img/' + img + '.jpg)',
  }
  return (
    <div className="personal-interest">
        <h2>{name}</h2>
        <div className="content" style={style}>
            {content.map((line,i)=><p key={i}>{line}</p>)}
        </div>
    </div>)
}