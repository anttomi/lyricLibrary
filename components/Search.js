import React from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView} from "react-native";
import getLyrics from "./LyricAPI";
import Results from "./Results";

export default function Search() {
    const [song, setSong] = React.useState({artist: "", title: ""})
    const [lyrics, setLyrics] = React.useState()

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.textInputContainer} underlineColorAndroid='black' label="Artist" placeholder="Artist" value={song.artist} onChangeText={input => setSong({...song, artist: input})}/>

            <TextInput style={styles.textInputContainer} underlineColorAndroid='black' label="Title" placeholder="Title" value={song.title} onChangeText={input => setSong({...song, title: input})}/>
            <Button  onPress={async () => setLyrics(await getLyrics(song.artist, song.title) + "\n")} title="Search"/>
            </View>
            {lyrics && 
            <Results lyrics={lyrics}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  inputContainer: {
    padding: 20,
    alignItems: "center",
    marginTop: 30,
    borderRadius: 15
  },
  textContainer: {
    margin: 10,
    padding: 2,
    backgroundColor: '#fffaf5',
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