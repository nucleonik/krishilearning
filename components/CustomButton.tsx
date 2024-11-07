import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface CustomButtonProps extends TouchableOpacityProps {
  cbx?: StyleProp<TextStyle>;
  tbx?: StyleProp<TextStyle>;
  handlePress?: () => void;
  isLoading?: boolean;
  title?: any;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  handlePress,
  isLoading,
  cbx,
  tbx,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
      style={[
        {
          backgroundColor: 'green',
          opacity: isLoading ? 0.5 : 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tbx,
      ]}
    >
      <Text style={[{ textAlign: 'center', fontSize: 20 }, cbx]} {...props}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
