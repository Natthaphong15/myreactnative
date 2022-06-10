import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-web";

export default function Tour(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20}}>Tour</Text>
            <Text style={{ color : "gray", marginVertical: 10 }}>Let find out what most interesting things</Text>
            <ScrollView style={{ flexDirection : "row"}}>
            <View style={{ marginRight: 10 }}>...</View>
            <View style={{ marginRight: 10 }}>...</View>
            <View style={{ marginRight: 10 }}>...</View>

            </ScrollView>
        </View>
    );
}


