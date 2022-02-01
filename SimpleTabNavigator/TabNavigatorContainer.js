import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const TabNavigatorContainer = ({ tabsList, children }) => {
    const [currentTab, setCurrentTab] = useState('Profile');
    const [swipeStart, setSwipeStart] = useState(null);

    const updateCurrentTab = (title) => {
        setCurrentTab(title)
    }

    const swipeHandler = (swipeEnd) => {
        const currentIndex = tabsList.findIndex(tab => tab === currentTab);
        const lastIndex = tabsList.length - 1;

        if (swipeEnd - swipeStart < 0) {
            if (currentIndex === lastIndex) {
                setCurrentTab(tabsList[0]);
            } else {
                setCurrentTab(tabsList[currentIndex + 1]);
            }

        } else {
            if (currentIndex === 0) {
                setCurrentTab(tabsList[lastIndex]);
            } else {
                setCurrentTab(tabsList[currentIndex - 1]);
            }

        }
    };

    return (
        <View
            style={styles.container}
            onTouchStart={(e) => setSwipeStart(e.nativeEvent.pageX)}
            onTouchEnd={(e) => swipeHandler(e.nativeEvent.pageX)}
        >
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

export default TabNavigatorContainer;