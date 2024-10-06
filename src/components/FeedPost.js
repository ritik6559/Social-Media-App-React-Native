import { StyleSheet, Text, View, Image } from 'react-native';
import  LikeImage  from '../../assets/images/like.png';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";


const FeedPost = ({post} ) => {
  return (
      <View style={styles.post}>  
        {/* Header */}
        <View style={styles.header}> 
          <Image source={{ uri: post.User.image }} style={styles.profileImage} />
          <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.User.name}</Text>
          <Text style={styles.createdAt}>{post.createdAt}</Text>
          </View>
          <Entypo name="dots-three-vertical" size={18} color="grey" style={styles.icon} />
          
        </View>
        {/* Body */}
        { post.description && <Text style={styles.description}>{post.description}</Text>}
        {post.image && <Image source={{ uri: post.image }} style={styles.image} />}
        {/*Footer */}

        <View style={styles.footer}>  
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>Elon Muska  and {post.numberOfLikes} others</Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>
          <View style={styles.buttonsRow}>
            <View style={styles.iconButton}>
              <AntDesign name="like2" size={18} color="grey" />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>
            <View style={styles.iconButton}>
              <FontAwesome5 name="comment-alt" size={18} color="grey" />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons name="share-outline" size={18} color="grey" />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 15,
    backgroundColor: "white",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    alignContent: "flex-start",
  },
  profileImage:{
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "grey",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    
    aspectRatio: 1,
  },
  description: {
    paddingHprizontal: 10,
    lineHeight: 18,
    letterSpacing: 0.3,
  },
  footer:{
    padding: 10,
  },
  statsRow:{
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  likedBy:{
  },


  likeIcon:{
    width: 20,
    height: 20,
    marginRight: 5,
  },
  shares:{
    color: "grey",
    marginLeft: "auto",
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    color: "gray",
    marginLeft: 5,
    fontWeight: "500",
  },
  
});

export default FeedPost;
