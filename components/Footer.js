import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
const Footer = () => {
    return (
        <View style={styles.footerView}>
            <IconEntypo name="home" size={20} color="#AAB8C2" />
            <Icon name="search" size={20} color="#AAB8C2" />
            <View style={styles.wrapperDiv}>
                <Icon name="bell-o" size={20} color="#AAB8C2" >

                </Icon>
                <View style={styles.roundedView}>
                    <Text style={styles.roundedText}> 3 </Text>
                </View>

            </View>
            <IconFeather name="mail" size={20} color="#AAB8C2" />
        </View>
    )
}

const styles = StyleSheet.create({

    footerView: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#141d26',
        justifyContent: "space-around",
        alignItems: "center"
    },

    roundedView: {
        borderRadius: 100 / 2,
        height: 20,
        width: 20,
        bottom: 10,
        left: 10,
        position: "absolute",
        backgroundColor: "#1DA1F2",
    },
    roundedText: {
        color: "white",
        alignSelf: "center"
    }


})

export default Footer;
