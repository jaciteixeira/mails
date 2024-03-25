import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios';
import { Icon } from 'react-native-paper';

export default function App() {

  const [email, setEmail] = useState()

  const dados = async () => {
    try {
      axios.get('https://run.mocky.io/v3/7ce6329c-3d7f-461e-8197-5228d0713b5a')
      const data = response.data;
      console.log(data);
      console.log(data.avatar);
    } catch (error) {
      console.error('Erro ao buscar usuario:', error);
    }
  }; 

  const emails = [
    {
      "id": 1,
      "sender": "Ralph Edwards",
      "subject": "The results to our user testing",
      "preview": "What's the progress on that task?",
      "avatar": "http://placekitten.com/200/200",
      "time": "02:02 am",
      "attachments": true
    },
    {
      "id": 2,
      "sender": "Eleanor Pena",
      "subject": "Some notes",
      "preview": "Yeah! You're right.",
      "avatar": "http://placekitten.com/200/201",
      "time": "05:51 am",
      "attachments": false
    },
  ]
  
  return (
    <View style={styles.container}>
      <Text>Mail</Text>
      <View style={styles.input}>
        <TextInput 
          placeholder="Pesquisar ..." 
          style={styles.textInput}
        />
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.emailItems}>
            <Image source={{url: item.avatar}}></Image>
            <View>
              
            </View>
          </View>
        )}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    // marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput:{
    // marginLeft: 10
  },
});
