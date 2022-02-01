import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabScreen = (props) => {
  const { children, tabTitle, currentTab } = props;

  if (tabTitle === currentTab) {
    return (
      <View style={styles.tabScreen}>
        {children}
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