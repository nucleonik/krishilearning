import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
} from 'react-native';
import React, { useState } from 'react';

interface FormTabs {
  title?: string;
  value?: string;
  handleChangeText: (e: string) => void;
  otherStyle?: object;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
}

const FormField: React.FC<FormTabs> = ({
  title,
  value,
  otherStyle,
  keyboardType,
  placeholder,
  handleChangeText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[{}, otherStyle]}>
      <Text>{title}</Text>
      <View
        style={{
          borderRadius: 4,
          width: 240,
          height: 40,
          borderWidth: 1,
          borderColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            textAlign: 'justify',
            marginLeft: 10,
          }}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={
                !showPassword
                  ? require('../assets/images/hide.png')
                  : require('../assets/images/show.png')
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
