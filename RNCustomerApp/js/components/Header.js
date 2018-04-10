import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StatusBar
} from 'react-native';

// const deviceWindow = Dimensions.get('window');
// const width = deviceWindow.width;
// const hieght = deviceWindow.height;
const { width, height } = Dimensions.get('window');
const isIPhoneX = Math.max(width, height) >= 812;

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.statusbar}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
      </View>
      <View style={styles.appbar}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: '#aaa',
    borderColor: '#000',
    borderWidth: 1
  },
  statusbar: {
    backgroundColor: 'blue',
    height: Platform.OS === 'ios' ? (isIPhoneX ? 44: 20) : 0,
  },
  appbar: {
    backgroundColor: 'pink',
    height: Platform.OS === 'ios' ? 44 : 56,
  },
  title: {
    fontSize: 30,
    color: '#000'
  }
};

// .container {
//   background-color: '#999';
//   font-size: 16px;
//   border: 1px solid '#000';
//   border-color: '#000';
//   border-width: 1px;
// }

export default Header;
