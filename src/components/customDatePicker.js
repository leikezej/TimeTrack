import React, {useState} from 'react';
import {Item, Input, Label} from 'native-base';
import { Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function CustomDatePicker({
  title,
  mode,
  value,
  onChangeValue,
  Styles,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    onChangeValue(currentDate);
    hideDatePicker();
  };
  const textValue =
    mode === DATEPICKER_MODE.DATE
      ? formatDateToString(value)
      : formatAMPM(value);

  return (
    <Item style={Styles.item} stackedLabel>
      <Label style={Styles.label}>{title}</Label>
      <TouchableOpacity
        style={Styles.touchableDatePicker}
        // eslint-disable-next-line no-undef
        onPress={() => showDatePicker()}>
        <Input
          disabled
          value={textValue}
          onPressIn={() => showDatePicker()}
          style={Styles.input}
        />

        {isDatePickerVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={value || null}
            mode={mode || DATEPICKER_MODE.DATE}
            is24Hour={true}
            display="default"
            onChange={handleConfirm}
          />
        )}
      </TouchableOpacity>
    </Item>
  );
}
