/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { TextField } from 'react-native-material-textfield-new';

const App = () => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const onChangeText = (name) => (text) => {
    setData(st => ({
      ...st,
      [name]: text,
    }));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <TextField
            value={data.firstname}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={onChangeText('firstname')}
            label={'First Name'}
            error={'Error message'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
