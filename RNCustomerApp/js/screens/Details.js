import React from 'react';
import { View, Text } from 'react-native';

const Details = (props) => {
  const customer = props.navigation.state.params.customer;
  console.log('customer:', customer);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
