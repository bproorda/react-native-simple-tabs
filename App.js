import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tab from './Tab';
import TabScreen from './TabScreen';
import TabHeader from './TabHeader';
import BottomTabBar from './BottomTabBar';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Profile');

  const updateCurrentTab = (title) => {
    setCurrentTab(title)
  }

  const tabsList = ['Profile', 'About', 'Settings']

  return (
    <View style={styles.container}>
      <TabHeader currentTab={currentTab} />
      <View style={styles.mainScreen}>
        <TabScreen tabTitle='Profile' currentTab={currentTab}>
          <Text>Profile</Text>
        </TabScreen>
        <TabScreen tabTitle='About' currentTab={currentTab}>
          <Text>About</Text>
        </TabScreen>
        <TabScreen tabTitle='Settings' currentTab={currentTab}>
          <Text>Settings</Text>
        </TabScreen>
      </View>
      <BottomTabBar tabsList={tabsList} currentTab={currentTab} updateCurrentTab={updateCurrentTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainScreen: {
    height: '80%',
    width: '100%',
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
