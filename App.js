import { StyleSheet, View, StatusBar } from 'react-native';
import Navigator from './src/navigation/index';

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
  },
})
