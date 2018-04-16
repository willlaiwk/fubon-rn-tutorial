import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';


const Details = (props) => {
  const customer = props.navigation.state.params.customer;
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{ uri: customer.avatar }}
        />
      </View>
      <Text>{customer.first_name} {customer.last_name}</Text>
      <Text>{customer.company}</Text>
      <Text>{customer.email}</Text>
      <Text>{customer.phone}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1
  },
  imageView: {
    alignItems: 'center'
  },
  image: { 
    width: 50,
     height: 50 
    }
};

export default Details;
