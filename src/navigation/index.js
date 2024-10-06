import  FeedScreen  from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;