import React from 'react';
import { TabBar, Tab } from '@rmwc/tabs';
import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab/dist/mdc.tab.css';


const TabBarMenu = ({ activeTab, setActiveTab}) => {

  return (
    <div>
      <TabBar
        activeTabIndex={activeTab}
        onActivate={evt => setActiveTab(evt.detail.index)}
      >
        <Tab>All</Tab>
        <Tab>Movies</Tab>
        <Tab>Tv Shows</Tab>
      </TabBar>
    </div>
  );

};

export default TabBarMenu;