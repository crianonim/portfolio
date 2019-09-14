import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./TabbedContent.sass";
import Projects from './Projects';
export default () => {
  return ( 
    <Tabs>
      <TabList>
        <Tab>Projects</Tab>
        <Tab>Personal interests</Tab>
      </TabList>

    <TabPanel>
      <Projects />
    </TabPanel>
    <TabPanel>
      <h2>Personal intersts go here...</h2>
    </TabPanel>
  </Tabs>
  )
}