import FeedScreen from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={FeedScreen} options={({ navigation }) => ({
                    headerRight: () => (
                        <FontAwesome
                            onPress={() => navigation.navigate("Profile")}
                            name="user"
                            size={24}
                            color="gray"
                        />
                    ),
                })} />
                <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;