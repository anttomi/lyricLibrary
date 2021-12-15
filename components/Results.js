import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Results(props) {
    return(
        <ScrollView style={styles.scrollContainer}>
            <Text style={styles.textContainer}>{props.lyrics}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {

        margin: 10,
        padding: 2,
        borderRadius: 10,
        fontSize: 14
    },
    textContainer: {
        fontSize: 20,
        color: "black",
        textShadowColor : "#000", 
        textShadowRadius : 1,
        textShadowOffset: {width: 1, height: 1}
    }
  });