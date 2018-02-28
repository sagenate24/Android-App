import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
const util = require('util');

export default class EdgeType extends React.Component {
    static navigationOptions = {
        title: 'Edge Types',
    };
    render() {
        return (

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.stone}>Eased</Text>
                    <Image source={require('../Images/Eased1.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>1/4 Radius</Text>
                    <Image source={require('../Images/4rad.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>Demi-Bullnose</Text>
                    <Image source={require('../Images/demibull.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>Ogee</Text>
                    <Image source={require('../Images/ogee1.jpg')}
                        style={{ width: 300, height: 300 }} />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    stone: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    }
});