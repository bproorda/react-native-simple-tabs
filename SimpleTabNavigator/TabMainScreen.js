import React from 'react';
import { StyleSheet, View } from 'react-native';

const TabMainScreen = ({ children, tabNavigation }) => {

    return (
        <View style={styles.mainScreen}>
            {React.Children.map(children, (child) => {
                return (
                    React.cloneElement(child, { tabNavigation })
                )
            })}
        </View>)
};

const styles = StyleSheet.create({
    mainScreen: {
        height: '80%',
        width: '100%',
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TabMainScreen;