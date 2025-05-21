import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const PurpleButton = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className}`}>
      <Text className={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

PurpleButton.displayName = 'Button';

const styles = {
  button: 'bg-primary-500 border-primary-400 border-[3px] border-b-[5px] rounded-[13px] shadow-md p-4 px-10',
  buttonText: 'text-white text-lg font-jakarta-extrabold',
};
