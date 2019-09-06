import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faVuejs, faHtml5, faJs, faNodeJs, faReact, faSass} from '@fortawesome/free-brands-svg-icons';

import ExpressIcon from '../assets/expressjs.svg'
import VuetifyIcon from '../assets/vuetify.svg'
import ReduxIcon from '../assets/redux.svg'
import MaterialIcon from '../assets/material.svg'
import SVGIcon from '../assets/svg.svg'
import './StackIcons.sass';

const stackIcons=[
  {name:"vue",type:"fa",data:faVuejs},
  {name:"express",type:"svg",data:ExpressIcon},
  {name:"html",type:"fa",data:faHtml5},
  {name:"node",type:"fa",data:faNodeJs},
  {name:"js",type:"fa",data:faJs},
  {name:"vuetify",type:"svg",data:VuetifyIcon},
  {name:"react",type:"fa",data:faReact},
  {name:"redux",type:"svg",data:ReduxIcon},
  {name:"material",type:"svg",data:MaterialIcon},
  {name:"svg",type:"svg",data:SVGIcon},
  {name:"sass",type:"fa",data:faSass}
]

export default ({stack})=>{
    return (
        <div className="stack_icons">
                {stack.map(name=>stackIcons.find(el=>el.name===name))
                  .filter(Boolean)
                  .map( (stack,i)=>stack.type==='fa'?
                   <FontAwesomeIcon key={i} size="2x" icon={stack.data}/>:
                   <img src={stack.data} key={i}  alt="stack.name"/>
                   )}
        </div>

    )
}