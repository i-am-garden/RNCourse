import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button style={{flex: 1}} title ='Add Goal'/>
      </View>
      <View>
        <Text> List of goals... </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop : 50,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inputContainer: {
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: "70%",
    marginRight: 8,
    padding: 8,
  }
});
