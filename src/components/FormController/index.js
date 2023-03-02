import React, {useState} from 'react';
import {FormControl, Input} from 'native-base';

export default function FormController({
  name,
  value,
  onChangeText,
  label,
  helperText,
  placeholder,
}) {
  return (
    <FormControl isRequired>
      <FormControl.Label
        _text={{
          bold: true,
        }}>
        {label}
      </FormControl.Label>
      <Input
        autoCapitalize="none"
        name={name}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <FormControl.HelperText
        _text={{
          fontSize: 'xs',
        }}>
        {helperText}
      </FormControl.HelperText>
      <FormControl.ErrorMessage
        _text={{
          fontSize: 'xs',
        }}>
        Error Name
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
