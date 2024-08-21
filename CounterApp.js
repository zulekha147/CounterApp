import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [animation] = useState(new Animated.Value(1));

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const increment = () => {
    animateButton();
    setCount(count + 1);
  };

  const decrement = () => {
    animateButton();
    setCount(count > 0 ? count - 1 : 0);
  };

  const reset = () => {
    animateButton();
    setCount(0);
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Animated.Text style={[styles.buttonText, animatedStyle]}>Increment</Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Animated.Text style={[styles.buttonText, animatedStyle]}>Decrement</Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Animated.Text style={[styles.buttonText, animatedStyle]}>Reset</Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  counterText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#00796B',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginHorizontal: 3,  
  },
  buttonText: {
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default CounterApp;
