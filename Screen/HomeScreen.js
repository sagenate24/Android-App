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

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Solid Surfaces',
        headerTitleStyle: {
            alignSelf: 'center',
        },
    };

    render() {
        var { navigate } = this.props.navigation;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../Images/main.jpg')}
                        style={styles.pic} />
                    <View style={styles.btncont} >
                        <Button color="#272727" onPress={() => navigate("SurfaceTypes", {})} title="Surface Materials" />
                    </View>
                    <View style={styles.btncont}>
                        <Button color="#272727" onPress={() => navigate("EdgeTypes", {})} title="Edge Types" />
                    </View>
                    <View style={styles.btncont}>
                        <Button color="#272727" onPress={() => navigate("ShowerTubs", {})} title="Showers And Tubs" />
                    </View>
                    <View style={styles.bottomcon}>
                        <Text style={styles.texts}>Click the buttons above to view stone options!</Text>
                        <Image source={require('../Images/robosaw.jpg')}
                            style={styles.roboimg} />
                        <Text style={styles.robotxt}>Introducing the ROBO-SAW</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    pic: {
        width: '100%',
        height: 300,
    },
    btncont: {
        borderWidth: 2,
        borderColor: '#fff',
        width: '100%',
    },
    texts: {
        fontSize: 24,
        textAlign: 'center',
        padding: 5,
        marginTop: 2,
        color: '#e6563d',
    },
    bottomcon: {
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roboimg: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent:'center',
    },
    robotxt: {
        fontSize: 24,
        textAlign: 'center',
        padding: 5,
        marginTop: 2,
        color: '#000',
    },
});
