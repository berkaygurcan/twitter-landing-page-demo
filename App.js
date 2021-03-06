
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Footer from './components/Footer';
import ListItem from './components/ListItem';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      profileImg: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'İster mimar ol ister mvp yakalarsan, caydanlıgı yaparsın',
      name: 'Bora Kaşmer',
      username: 'CoderBora',
      likeCount: 2,
      postImg: 'https://images.unsplash.com/photo-1654859583998-0856157255c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 2,
      profileImg: 'https://images.unsplash.com/photo-1654765435039-a409d7638368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      description: 'Biraz d vitamini alalım',
      name: 'Hakan Kaya',
      username: 'hakankaya35',
      likeCount: 3,
      postImg: 'https://images.unsplash.com/photo-1654896887944-691330f7dac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    },
    {
      id: 3,
      profileImg: 'https://images.unsplash.com/photo-1612810806546-ebbf22b53496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      description: 'Was just up in the booster propulsion section. Damage appears to be minor, but we need to inspect all the engines. Best to do this in the high bay.',
      name: 'Elon musk',
      username: 'elonmusk',
      likeCount: 4,
      postImg: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>

      <FlatList data={dummyData} renderItem={({ item }) => (
        <ListItem item={item} />
      )} />
      <Footer />

      <IconIonicons name="ios-add-circle" style={styles.icon} size={60} color="#1DA1F2" >
       
      </IconIonicons>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    position: "relative",
    backgroundColor: '#141d26',
  },
  icon: {
    position: "absolute",
    bottom:90,
    right:10,
    borderRadius: 100 / 2,
  }
});

export default App;
