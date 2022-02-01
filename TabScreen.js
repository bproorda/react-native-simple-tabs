import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabScreen = ({ children, tabNavigation, tabTitle }) => {
  const { currentTab } = tabNavigation;

  if (tabTitle === currentTab) {
    return (
      <View style={styles.tabScreen}>
        {React.Children.map(children, (child) => {
          return (
            React.cloneElement(child, { tabNavigation })
          )
        })}
      </View>
    )
  }
  return null;
};

const styles = StyleSheet.create({
  tabScreen: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabScreen;