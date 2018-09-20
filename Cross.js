import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class Cross extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.line, {
                    transform: [
                        {rotate: '45deg'},
                    ],
                }]}/>
                <View style={[styles.line, {
                    transform: [
                        {rotate: '-45deg'},
                    ],
                }]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },

    line: {
        position: 'absolute',
        width: 8,
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
    },
});