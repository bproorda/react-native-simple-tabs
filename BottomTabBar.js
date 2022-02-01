import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tab from './Tab';

const BottomTabBar = ({ tabNavigation }) => {
    const {  currentTab, updateCurrentTab, tabsList } = tabNavigation;

    return (
        <View style={styles.tabBar}>
            {tabsList.map(tab => (
                (
                    <Tab onPress={() => updateCurrentTab(tab)} key={tab} title={tab} currentTab={currentTab == tab} />
                )
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    tabBar: {
        height: '10%',
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
});

export default BottomTabBar;