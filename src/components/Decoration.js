import React, { useEffect, useState } from "react";
import "./Decoration.sass";
import DecorationRepo from "./DecorationRepo";
import DecorationUser from "./DecorationUser";

export default () => {
  const [repos, setRepos] = useState([]);
  const [users, setUsers] = useState([]);
  console.log("RENDER", { repos });
  useEffect(() => {
    let intervalRepos,
      intervalUsers = 0;
    fetch("https://api.github.com/users/crianonim/repos")
      .catch(err=>({json:()=>([{name:"test1",url:"#"},{name:"test2",url:"#"}])}))
      .then(res => res.json())
      .then(json =>
        setRepos(
          json
            .sort(() => Math.random() - 0.5)
            .map(repo => ({ name: repo.name, url: repo.html_url }))
        )
      )
      .then(() => {
        intervalRepos = setInterval(() => {
          setRepos(repos => repos.sort(() => Math.random() - 0.5).slice());
        }, 5000);
      });
    fetch("https://api.github.com/users/crianonim/following")
    .catch(err=>({json:()=>([{name:"user1",url:"#"},{name:"user2",url:"#"},{name:"user3",url:"#"},{name:"user4",url:"#"}])}))
      .then(res => res.json())
      .then(json =>
        setUsers(
          json
            .sort(() => Math.random() - 0.5)
            .map(user => ({ name: user.name, url: user.html_url, img:user.avatar_url }))
        )
      )
      .then(() => {
        intervalUsers = setInterval(() => {
          setUsers(users => users.sort(() => Math.random() - 0.5).slice());
        }, 5000);
      });
    return () => {
      clearInterval(intervalRepos);
      clearInterval(intervalUsers);
    };
  }, []);

  return (
    <>
      <div className="decoration-left decoration">
        {repos.map(repo => (
          <DecorationRepo key={repo.name} repo={repo} />
        ))}
      </div>
      <div className="decoration-right decoration">
        {users.map(user => (
          <DecorationUser user={user} key={user.name} />
        ))}
      </div>
    </>
  );
};
