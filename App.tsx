import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button, PaperProvider} from "react-native-paper";

export default function App() {
  return (
      <PaperProvider>
        <View style={styles.container}>
          <Text>Olá, mundo!</Text>
            <Button mode='outlined' icon='camera' buttonColor='red' textColor='white'>Clique aqui</Button>
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
