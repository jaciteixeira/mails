import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "react-native-axios";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Icon } from "react-native-paper";

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://c2367643c1af4b37b25fea7b0b974818.api.mockbin.io/");
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuario:", error);
      }
    };

    fetchData();
  }, []);

  const data = [
    {
      attachments: true,
      avatar: "https://i.pravatar.cc/700",
      id: 1,
      preview: "What's the progress on that task?",
      sender: "Ralph Edwards",
      subject: "The results to our user testing",
      time: "02:02 am",
    },
    {
      attachments: false,
      avatar: "https://i.pravatar.cc/100",
      id: 2,
      preview: "Yeah! You're right.",
      sender: "Eleanor Pena",
      subject: "Some notes",
      time: "05:51 am",
    },
    {
      attachments: false,
      avatar: "https://i.pravatar.cc/589",
      id: 3,
      preview: "What's the progress on that task?",
      sender: "Leslie Alexander",
      subject: "Your account with us",
      time: "11:27 pm",
    },
    {
      attachments: true,
      avatar: "https://i.pravatar.cc/270",
      id: 4,
      preview: "So, what's your plan this weekend?",
      sender: "Esther Howard",
      subject: "Welcome to our mailing list",
      time: "11:27 pm",
    },
    {
      attachments: true,
      avatar: "https://i.pravatar.cc/290",
      id: 5,
      preview: "I hope it goes well.",
      sender: "Jenny Wilson",
      subject: "The results to our user testing",
      time: "04:02 am",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appTitle}>
        {/* <Image source={require('../../assets/paper-plane.png')} style={styles.appLogo} /> */}
        <Text style={styles.appTitleText}>e-mail</Text>
      </View>

      <View style={styles.containerInput}>
        <SimpleLineIcons
          name="menu"
          size={24}
          color="black"
          style={styles.menuIcon}
        />
        <TextInput
          placeholder="Search in the e-mail"
          style={styles.inputTitle}
        />
        <Image
          source={{ uri: "https://i.pravatar.cc/770" }}
          style={styles.loggedUserAvatar}
        />
      </View>
      {/* <Text style={styles.titleRecieved}>RECIEVED</Text> */}
      {/* <Text style={styles.titleRecieved}>{dados.avatar}</Text> */}

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerEmail}>
            <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
            <View style={styles.emailContent}>
              <Text style={styles.emailSender}>{item.sender}</Text>
              <Text style={styles.emailSubject}>{item.subject}</Text>
              <Text style={styles.emailBody}>{item.preview}</Text>
              {item.attachments ? (
                <View style={styles.emailAttachment}>
                  <Entypo name="attachment" size={24} color="black" />
                  <Text style={styles.emailAttachmentText}>Anexo</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.emailTime}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
    backgroundColor: "#fff",
  },
  appLogo: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginVertical: 20,
  },
  appTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
  },
  appTitleText: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 8,
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 8,
    marginBottom: 20,
    borderColor: "#ADB0CD",
    margin: 20,
  },
  menuIcon: {
    marginTop: 7,
    marginStart: 10,
    marginEnd: 10,
  },
  inputTitle: {
    flex: 1,
    fontSize: 16,
  },
  loggedUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  titleRecieved: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  containerEmail: {
    flexDirection: "row",
    padding: 10,
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  emailContent: {
    padding: 10,
    flex: 1,
  },
  emailSender: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emailSubject: {
    fontSize: 16,
  },
  emailBody: {
    fontSize: 14,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginStart: 5,
  },
  emailTime: {
    fontSize: 14,
  },
});
