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

export default class SurfaceMat extends React.Component {
    static navigationOptions = {
        title: 'Surface Materials',
        headerTitleStyle: {
            textAlign: 'center',
        },
    };
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.stone}>Granite</Text>
                    <Image source={require('../Images/img2.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>Qaurtz</Text>
                    <Image source={require('../Images/img3.jpg')}
                        style={{ width: 300, height: 300 }} />
                    <Text style={styles.stone}>Soap Stone</Text>
                    <Image source={require('../Images/img4.jpg')}
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