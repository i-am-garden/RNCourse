import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button style={{flex: 1}} title ='Add Goal'/>
      </View>
<<<<<<< HEAD
      <View style={styles.goalsContainer}>
        <Text> HeyHey!!!List of goals!!! </Text>
=======
      <View>
        <Text> !!!List of goals!!! </Text>
>>>>>>> origin/master
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop : 50,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inputContainer: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  }
});
