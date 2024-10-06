import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const onPost = () => {
    console.warn("Post", caption);
    setCaption("");
    setImage(null);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
    
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo name="images" 
        size={24} 
        color="black" 
        style={styles.imageIcon}
        onPress={pickImage}
        />
      </View>
      <TextInput
        value={caption}
        placeholder="What's on your mind?"
        onChangeText={(text) => setCaption(text)}
        style={styles.input}
        multiline
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.buttonContainer}>
      <Button title="Post" onPress={onPost} />
      </View>
      
    </View>
  )
}

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 'auto',
    margin: 10,
  },
  imageIcon: {
    marginLeft: 'auto',
  },
  image: {
    width: '50%',
    alignSelf: 'center',
    aspectRatio: 4/3,
    marginVertical: 10,
  }
})
