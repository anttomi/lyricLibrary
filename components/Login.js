import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput} from 'react-native';

export default function Login() {

    const [user, setUser] = React.useState({name: "", password: ""})

    return(
        <View style={styles.container}>
        <TextInput  style={styles.textInputContainer} underlineColorAndroid='black' label="Artist" placeholder="Username" value={user.name} onChangeText={input => setUser({...user, name: input})}/>
        <TextInput  style={styles.textInputContainer} secureTextEntry={true}  underlineColorAndroid='black' label="Artist" placeholder="Password" value={user.password} onChangeText={input => setUser({...user, password: input})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
    textInputContainer: {
      width: 200, 
      padding: 4, 
      margin: 3, 
      borderColor: "black", 
      borderRadius: 6,
      fontSize: 18
    }
  });