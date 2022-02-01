import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ tabsList, children }) => {
    const [currentTab, setCurrentTab] = useState('Profile');

    const updateCurrentTab = (title) => {
        setCurrentTab(title)
    }

    return (
        <View style={styles.container}>
            {React.Children.map(children, (child) => {
                return (
                    React.cloneElement(child, { tabNavigation: { currentTab, updateCurrentTab, tabsList } })
                )
            })}
        </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Container;