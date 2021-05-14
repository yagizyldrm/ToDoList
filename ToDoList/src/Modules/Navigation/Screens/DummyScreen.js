import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TouchableHighlight } from "react-native";
import DatePicker from "../Components/DatePicker";
import TimePicker from "../Components/TimePicker";


const DummyScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "baseline", flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity>
                <Text style={{
                    borderColor: "lightblue",
                    backgroundColor:"lightblue",
                    borderRadius:5,
                    borderWidth: 1, textAlign: "center",
                    justifyContent: "center"
                }}>GetDate</Text>
                <DatePicker />
                <TimePicker />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DummyScreen;