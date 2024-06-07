import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Text> Hello, World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;