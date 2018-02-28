import React from 'react';
import {
    ScrollView,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Stone extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text style={styles.stone}>Granite</Text>
                <Image source={{uri: 'http://t2conline.com/wp-content/uploads/2017/10/5b6e9755be9d4ef6c9f1fdd61d599068-granite-countertops-kitchen-parker-house.jpg'}}
                    style={{width: 300, height: 300}} />
                <Text style={styles.stone}>Qaurtz</Text>
                <Image source={{uri: 'https://cdn.homedit.com/wp-content/uploads/2017/03/Kitchen-quartz-countertop-resembles-marble.jpg'}}
                    style={{width: 300, height: 300}} />
                <Text style={styles.stone}>Soap Stone</Text>
                <Image source={{uri: 'http://www.soapstonewerks.com/wp-content/uploads/2016/08/Soapstone-Countertop-18-500x375.jpg'}}
                    style={{width: 300, height: 300}} /> 
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    stone: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 15
    }
});
