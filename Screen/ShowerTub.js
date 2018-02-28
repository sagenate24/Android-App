import React from 'react'
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
const util = require('util');

export default class ShowerTub extends React.Component {
    static navigationOptions = {
        title: 'Shower & Tub',
        headerTitleStyle: {
            textAlign: 'center',
        },
    };
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.stone}>Dark grey stone shower walls</Text>
                    <Image source={require('../Images/shower1.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>Full slab custom granite shower</Text>
                    <Image source={require('../Images/shower2.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>Cygnus granite tub surrounding</Text>
                    <Image source={require('../Images/tub1.jpg')}
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