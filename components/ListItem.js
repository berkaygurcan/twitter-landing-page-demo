import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';



const ListItem = ({ item }) => {


    return (
        <View style={styles.listItem}>
            <View style={styles.listItemView}>
                {/* Resim ve Content yanyana */}
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: item.profileImg,
                    }}
                />
                {/* Content */}
                <View style={styles.contentView}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.baseText, styles.nameText]}> {item.name} <Text style={styles.usernameText}>@{item.username} * 1dk</Text> </Text>

                        <IconEntypo name="dots-three-horizontal" size={20} color="#AAB8C2" />
                    </View>
                    <Text style={[styles.descTex, styles.baseText]}> {item.description} </Text>
                    <Image
                        style={styles.postImg}
                        source={{
                            uri: item.postImg,
                        }}
                    />
                    {/* İconlar için flex view */}
                    <View style={styles.iconView}>
                        <Icon name="comment-o" size={20} color="#AAB8C2" />
                        <Icon name="retweet" size={20} color="#AAB8C2" />
                        <Icon name="heart-o" size={20} color="#AAB8C2"> <Text style = {styles.IconLikeCountText} >2</Text> </Icon>
                        <IconIonic name="share-outline" size={20} color="#AAB8C2" style={{ marginRight: 30 }} />

                    </View>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    contentView: {
        width: 300,
       
    },
    listItemView: {
        flexDirection: 'row',
        
    },
    listItem: {
        padding: 15,
        backgroundColor: '#243447',
        borderBottomWidth: 1,
        borderColor: '#727272',

    },
    iconView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius: 100 / 2,
    },

    baseText: {
        color: "white",
       
    },
    nameText: {
        fontWeight: "bold"
    },
    descTex: {
        
    },
    usernameText: {
        fontWeight: "200",
        color: "#AAB8C2"
    },
    IconLikeCountText : {
        fontSize:15,
        alignSelf:"center"
    },
    postImg: {
        
        marginVertical: 5,
        borderRadius: 10,
        height: 150,
    }

})

export default ListItem;

