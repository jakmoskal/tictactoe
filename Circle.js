import React, {Component} from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native'

export default class Cross extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.line]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },

    line: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderWidth: 10,
        borderColor: '#fff',
        width: '90%',
        height: '90%',
    },
})