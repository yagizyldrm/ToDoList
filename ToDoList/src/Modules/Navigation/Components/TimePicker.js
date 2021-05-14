import React, { useState } from "react";
import { Text,Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const TimePicker = props => {

  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [time, setTime] =useState(moment());

  const showTimePicker = () => {
    setIsTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setIsTimePickerVisible(false);
  };

  const handleConfirm = (time) => {
    console.warn("A time has been picked: ", time);
    setTime(time);
    hideTimePicker();
  };
  
  return (
    <View>
      <Button title="Show Time Picker" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        textColor="white"
        onCancel={hideTimePicker}
        
      />
      <Text>{moment(time).format("LT")}</Text>
    </View>
  );
};

export default TimePicker;