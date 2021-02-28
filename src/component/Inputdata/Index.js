import React from 'react'
import { Text, TextInput } from 'react-native'
import styles from './style'

const InputData = ({ 
    label,
    placeholder,
    keyboardType,
    isTextArea,
    onInputChangetext,
    onChangeText,
    namaState,
    value
}) => {
    if (isTextArea){
        return (
          <>
            <Text style={styles.label}>{label} :</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={placeholder}
              style={styles.textInputArea}
              keyboardType={keyboardType}
              value={value}
              onChangeText={(value) => onChangeText(namaState, value)}
            />
          </>
        );
    }
      return (
        <>
          <Text style={styles.label}>{label} :</Text>
          <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            keyboardType={keyboardType}
            value={value}
            onChangeText={(value) => onChangeText(namaState, value)}
          />
        </>
      );
};

export default InputData

