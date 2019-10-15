import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faVuejs, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

import ExpressIcon from '../assets/expressjs.svg'
import VuetifyIcon from '../assets/vuetify.svg'
import ReduxIcon from '../assets/redux.svg'
import MaterialIcon from '../assets/material.svg'
import SVGIcon from '../assets/svg.svg'
import HandlebarsIcon from '../assets/handlebars.svg';
import PgIcon from '../assets/pg.svg';
import BulmaIcon from '../assets/bulma.svg';
import JestIcon from '../assets/jest.svg';
import PWAIcon from "../assets/pwa.svg";

import './StackIcons.sass';

const stackIcons=[
  {name:"vue",type:"fa",data:faVuejs, title:"Vue.js"},
  {name:"express",type:"svg",data:ExpressIcon, title:"Express.js"},
  {name:"html",type:"fa",data:faHtml5, title:"HTML5"},
  {name:"node",type:"fa",data:faNodeJs, title:"Node.js"},
  {name:"js",type:"fa",data:faJs,title:"Vanilla JavaScript"},
  {name:"vuetify",type:"svg",data:VuetifyIcon,title:"Vuetify Material Component Library"},
  {name:"react",type:"fa",data:faReact,title:"React"},
  {name:"redux",type:"svg",data:ReduxIcon,title:"Redux"},
  {name:"material",type:"svg",data:MaterialIcon,title:"Material UI Material Component Library for React"},
  {name:"svg",type:"svg",data:SVGIcon,title:"Scalable Vector Graphic"},
  {name:"sass",type:"fa",data:faSass,title:"Sass"},
  {name:"handlebars",type:"svg",data:HandlebarsIcon,title:"Handlebars templating language"},
  {name:"pg",type:"svg",data:PgIcon,title:"PostgreSQL"},
  {name:"bulma",type:"svg",data:BulmaIcon,title:"Bulma Css library"},
  {name:"jest",type:"svg",data:JestIcon,title:"Jest testing library"},
  {name:"pwa",type:"svg",data:PWAIcon,title:"Progressive Web App"},



]

export default ({stack})=>{
    return (
        <div className="stack_icons">
                {stack.map(name=>stackIcons.find(el=>el.name===name))
                  .filter(Boolean)
                  .map( (stack,i)=>stack.type==='fa'?
                   <FontAwesomeIcon title={stack.title} key={i} size="2x" icon={stack.data}/>:
                   <img src={stack.data} key={i}  title={stack.title} alt="stack.name"/>
                   )}
        </div>

    )
}