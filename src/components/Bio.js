import React from "react";
import ReactTooltip from "react-tooltip";
import "./Bio.sass";
export default () => {
  return (
    <div className="bio">
      <p>
        I am a <span className="tip" data-tip="Wheter it's a new language (natural or programming), new cooking recipe, <br> or a new way to do something I already know <br> I try to make sure everthing I do has a learning component to it."> curious learner </span>
         and want to turn my <span className="tip" data-tip="I wrote my first lines in 1991 in BASIC after getting a 'powerful' Commodore 64 computer<br>I was hooked for life, coding became my pleasure and joy.">lifelong passion for coding </span> 
        into a career as a software engineer with the help of Founders and
        Coders' wonderful and transformational programme.
      </p>

      <p>
        I'm a full-stack web developer and I have honed my skills at FAC over
        the past four months. My primary coding language is 
        <span className="tip" data-tip="I love how versatile this quirky language is, from browser to server to mobile to database!"> Javascript </span>but I'm a
        <span className="tip" data-tip="I played with many more languages (BASIC, Pascal, Assembler, C, C++),<br> usually just enough to understand how differently does it solve a common problem."> superficial polyglot </span>
        with some experience using  Java, Python, Go, Haskell and
        PHP. A functional programming convert, I know a lot about Linux sysadmin
        and am familiar with docker containerisation technology.
      </p>

      <p>
        My prior career in the hospitality and service industry has taught me to
        work well in a team and I'm hoping to bring the <span className="tip" data-tip="When preparing coffee or serving food, the only thing that matters is the quality of experience and satisfaction of your customer. <br> Success of your role or your company will depend on that, tha way you work should reflect that. "> customer focus, </span>
        attention to detail and importance of building lasting relationships to
        my work as a developer.
      </p>

      <p>
        I am a keen mentor and excited to see others learn, solve problems and
        create. I've enjoyed helping colleagues on the FAC course and coaching
        new people at places like Codebar.io, where I have been volunteering
        since August.
      </p>
    <ReactTooltip  multiline={true}/>
    </div>
  );
};
