import React from "react";
import "./mainfiles/styles/header.scss";
import "./mainfiles/styles/skeleton.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./mainfiles/styles/projectviewer.scss";
import "./mainfiles/styles/global-params.scss";
import "./mainfiles/styles/phone.scss";
import "./mainfiles/styles/layouts.scss";

import proj1 from "./mainfiles/background/proj1.png";
import pomodoro from "./mainfiles/background/pomodoro.png";
import silly from "./mainfiles/background/sillygamesthumb.png";
import balonyky from "./mainfiles/background/balonyky.png";

import Navbar from "./mainfiles/header.js";
import Skeleton from "./mainfiles/skeleton.js";

import sass from "./mainfiles/background/sass.png";
import css from "./mainfiles/background/css.png";
import npm from "./mainfiles/background/npm.png";
import git from "./mainfiles/background/git.png";
import html from "./mainfiles/background/html.png";
import redux from "./mainfiles/background/redux.png";
import react from "./mainfiles/background/react.png";
import bootstrap from "./mainfiles/background/bootstrap.png";
import favicon from "./mainfiles/background/favicon.ico";

import Favicon from "react-favicon";

function App() {
  return (
    <div className="App">
      <Favicon url={favicon} />
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height"
      />
      <meta
        charSet="utf-8"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Navbar navbuttons={navbuttons} navicons={navicons} />
      <Skeleton
        adjectives={adjectives}
        skills={skills}
        about={about}
        viewer={viewer}
        logos={logos}
        navicons={navicons}
      />
    </div>
  );
}

const adjectives = [
  ["JS developer"],
  ["React developer"],
  ["Web developer"],
  ["CSS developer"],
];

const navbuttons = [
  ["Home"],
  ["About"],
  ["Skills"],
  ["Portfolio"],
  ["Contact"],
];
//   0          1            2
// ICON //COPY/link // href link/text to copy//
const navicons = [
  ["fas fa-phone-square", "copy", "511 518 517"],
  [
    "fas fa-at",
    "link",
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mazurjakubb@gmail.com",
  ],
  [
    "fab fa-linkedin",
    "link",
    "https://www.linkedin.com/in/jakub-mazur-99a312195/",
  ],
];

const about = [
  [
    "Main Skills",
    [
      "- Quick learner.",
      "- Creative.",
      "- Hard worker.",
      "- Continuously improving.",
    ],
  ],
  [
    "Certificates",
    [
      "- mainfiles Algorithms and Data Structures",
      "- Responsive Web Design",
      "- Front End Libraries",
    ],
  ],
  ["Education", ["- AGH-environmental engineering-engineering diploma"]],
  ["Soft-Skills", ["- English - C1", "- Drivers Licence - B1"]],
];

const skills = [
  ["React", 98, "fab fa-react"],
  ["HTML", 84, "fab fa-html5"],
  ["JS", 84, "fab fa-node-js"],
  ["Bootstrap", 42, "fab fa-bootstrap"],
  ["JQuery", 42],
  ["SASS", 84, "fab fa-sass"],
  ["Redux", 42],
  ["CSS", 98],
  ["CSS-3D", 70],
  ["Canvas", 56],
];

const logos = [
  [sass],
  [bootstrap],
  [css],
  [git],
  [html],
  [redux],
  [react],
  [npm],
];

const viewer = [
  //Z / X cords      name      picture     href on click
  [-200, 400, "First portfolio", proj1, "https://mazurjakubcv.netlify.app/"],
  [900, -350, "Pomodoro Clock", pomodoro, "https://pomclock.netlify.app/"],
  [2000, 400, "Silly games", silly, "https://sillygamebeta.netlify.com/"],
  [900, 1150, "Exploding Baloons", balonyky, "https://balonyky.netlify.app/"],
];

export default App;
