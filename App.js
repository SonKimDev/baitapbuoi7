import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles/AppStyle';

const API = 'https://jsonplaceholder.typicode.com/photos';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error)=>{
      console.log('error: ', error);
    })
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContanier}>
          <View style={styles.imageContainer}>
          <Image
              source={{ uri: item.thumbnailUrl }}
              style={styles.image}
          />
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.id}>id: {item.id}</Text>
              <Text style={styles.titleItem} numberOfLines={3}>title: {item.title}</Text>
          </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Quản lý Album</Text>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default App