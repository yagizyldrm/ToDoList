import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { getStyles } from "../Screens/Styles/OptionsMenuStyles";

const DatePicker = props => {

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date, setDate] = useState(moment());

  const showDatePicker = () => {
      setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
      setIsDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
      console.warn("Tarih Seçildi -->> ", moment(date).format("DD-MM-YYYY"));
      setDate(date);
      hideDatePicker();
  };
  
  return (
      <View style={{borderColor:"pink",
        borderRadius:10,     
        flex:0.5,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:10,}}>
          <TouchableOpacity  
          style={{alignItems:"center",justifyContent:"center"}}
          onPress={showDatePicker}>
              <Text numberOfLines={1}
              style={{color:"white"}}>{"bir şey"}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              textColor="white"
              onCancel={hideDatePicker}
          />
      </View>
  );   
};

export default DatePicker;