import { StyleSheet, View, StatusBar } from 'react-native';
import CreatePostScreen from './src/screens/CreatePostScreen';
import Navigator from './src/navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
})
