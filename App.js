import React from 'react';
import { Text } from 'react-native';

import Container from './Container';
import TabScreen from './TabScreen';
import TabHeader from './TabHeader';
import BottomTabBar from './BottomTabBar';
import MainScreen from './MainScreen';

export default function App() {

  const tabsList = ['Profile', 'About', 'Settings']

  return (
    <Container tabsList={tabsList}>
      <TabHeader />
      <MainScreen>
        <TabScreen tabTitle='Profile'>
          <Text>Profile</Text>
        </TabScreen>
        <TabScreen tabTitle='About'>
          <Text>About</Text>
        </TabScreen>
        <TabScreen tabTitle='Settings'>
          <Text>Settings</Text>
        </TabScreen>
      </MainScreen>
      <BottomTabBar />
    </Container>
  );
}

