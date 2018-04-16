import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const Edit = (props) => {
  console.log('Edit:', props.navigation.state.params.customer);
  const customer = props.navigation.state.params.customer;
  return (
    <View>
      <Text>Edit Screen</Text>
      <TextInput value={customer.first_name} />
      <TextInput value={customer.last_name} />
      <TextInput value={customer.company} />
      <TextInput value={customer.email} />
      <TextInput value={customer.phone} />
    </View>
  );
}

export default Edit;
