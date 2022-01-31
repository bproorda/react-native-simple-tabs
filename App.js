import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Tab from './Tab';

export default function App() {
  const [ currentTab, setCurrentTab ] = useState('Profile');

  const updateCurrentTab = (title) => {
    setCurrentTab(title)
  }

  const tabsList = ['Profile', 'About', 'Settings']

  return (
    <View style={styles.container}>
      <View style={styles.mainScreen }>
        <Text>Main Screen</Text>
        <Text>{`CurrentTab: ${currentTab}`}</Text>
      </View>
      <View style={styles.tabContainer}>
        {tabsList.map(tab => (
           (
             <Tab onPress={() => updateCurrentTab(tab)} key={tab} title={tab} currentTab={currentTab == tab}/>
          )
        ))}
      </View>
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
  tabContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
