import React from "react";
import ReactTooltip from "react-tooltip";
import "./Bio.sass";
export default () => {
  return (
    <div>
      <p>
        I am a <span className="tt" data-tip="Whatever I write here is a lot I wonder how long can it be Or no">curious learner</span> and want to turn my lifelong passion for coding
        into a career as a software engineer with the help of Founders and
        Coders' wonderful and transformational programme.
      </p>

      <p>
        I'm a full-stack web developer and I have honed my skills at FAC over
        the past four months. My primary coding language is Javascript but I'm a
        superficial polyglot with some experience using Go, Java, Python and
        PHP. A functional programming convert, I know a lot about Linux sysadmin
        and am familiar with docker containerisation technology.
      </p>

      <p>
        My prior career in the hospitality and service industry has taught me to
        work well in a team and I'm hoping to bring the customer focus,
        attention to detail and importance of building lasting relationships to
        my work as a developer.
      </p>

      <p>
        I am a keen mentor and excited to see others learn, solve problems and
        create. I've enjoyed helping colleagues on the FAC course and coaching
        new people at places like Codebar.io, where I have been volunteering
        since August.
      </p>
    <ReactTooltip/>
    </div>
  );
};
