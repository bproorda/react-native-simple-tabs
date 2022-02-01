import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TabHeader = (props) => {
    const { currentTab } = props;

    return (
        <View style={[styles.header, { height: '10%', flex: 0 }]}>
            <Text style={styles.headerText}>{`CurrentTab: ${currentTab}`}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: '10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    },
    headerText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    }
});

export default TabHeader;