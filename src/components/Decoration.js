import React, { useEffect, useState } from "react";
import "./Decoration.sass";
import DecorationRepo from "./DecorationRepo";

export default () => {
  const [repos, setRepos] = useState([]);
  console.log("RENDER", { repos });
  useEffect(() => {
    let interval = 0;
    fetch("https://api.github.com/users/crianonim/repos")
      .then(res => res.json())
      .then(json =>
        setRepos(
          json
            .sort(() => Math.random() - 0.5)
            .map(repo => ({ name: repo.name, url: repo.html_url }))
        )
      )
      .then(() => {
        interval = setInterval(() => {
          setRepos(repos => repos.sort(() => Math.random() - 0.5).slice());
        }, 5000);
      });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="decoration">
      {repos.map(repo => (
        <DecorationRepo key={repo.name} repo={repo} />
      ))}
    </div>
  );
};
