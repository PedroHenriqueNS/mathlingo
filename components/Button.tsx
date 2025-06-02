import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
  bordered?: boolean;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, bordered = false, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${bordered && 'bg-transparent border-2 border-indigo-500'} ${touchableProps.className}`}>
      <Text className={`${styles.buttonText} ${bordered && '!text-indigo-500'}`}>{title}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4 px-6',
  buttonText: 'text-white text-lg font-semibold text-center tracking-wider',
};
