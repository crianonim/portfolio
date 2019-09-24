import React from "react";
import "./DecorationRepo.sass";
export default ({repo}) => {
  return (
    <div className="decoration-repo">
        <span className="decoration-repo-name"><a rel="noopener noreferrer" target="_blank" href={repo.url}>{repo.name}</a></span>
    </div>
  )
}