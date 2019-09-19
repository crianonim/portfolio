import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./TabbedContent.sass";
import Projects from './Projects';
import PersonalInterest from "./PersonalInterest";
import {interests} from "../data/interests";
export default () => {
  return ( 
    <Tabs>
      <TabList>
        <Tab>Projects</Tab>
        <Tab>Personal interests</Tab>
      </TabList>

    <TabPanel key="projects">
      <Projects />
    </TabPanel>
    <TabPanel key="interests">
      {interests.map(interest=><PersonalInterest key={interest.name} interest={interest}/>)}
    </TabPanel>
  </Tabs>
  )
}