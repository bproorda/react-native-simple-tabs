import React from 'react';
import { Text } from 'react-native';

import {
  TabNavigatorContainer,
  TabMainScreen,
  TabHeader,
  TabScreen,
  BottomTabBar
} from './SimpleTabNavigator';

export default function App() {

  const tabsList = ['Profile', 'About', 'Settings']

  return (
    <TabNavigatorContainer tabsList={tabsList}>
      <TabHeader />
      <TabMainScreen>
        <TabScreen tabTitle='Profile'>
          <Text>Profile</Text>
        </TabScreen>
        <TabScreen tabTitle='About'>
          <Text>About</Text>
        </TabScreen>
        <TabScreen tabTitle='Settings'>
          <Text>Settings</Text>
        </TabScreen>
      </TabMainScreen>
      <BottomTabBar />
    </TabNavigatorContainer>
  );
}

