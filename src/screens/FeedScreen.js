import { FlatList } from "react-native";
import FeedPost from "../components/FeedPost";
import posts from "../../assets/data/posts.json";
const FeedScreen = () => {
    return (
        <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ rowGap: 10 }}
      />
    )
}

export default FeedScreen;