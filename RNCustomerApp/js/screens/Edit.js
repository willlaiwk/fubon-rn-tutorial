import React from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Button
} from 'react-native';
import axios from 'axios';
import { Map } from 'immutable';
// const Edit = (props) => {
//   console.log('Edit:', props.navigation.state.params.customer);
//   const customer = props.navigation.state.params.customer;
//   return (
//     <View>
//       <Text>Edit Screen</Text>
//       <TextInput value={customer.first_name} />
//       <TextInput value={customer.last_name} />
//       <TextInput value={customer.company} />
//       <TextInput value={customer.email} />
//       <TextInput value={customer.phone} />
//     </View>
//   );
// }


class Edit extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit',
    headerRight: (
      <Button
        onPress={() => {
          navigation.state.params.handleUpdate();
        }}
        title="Update"
        color="#e67e22"
      />
    )
  })

  constructor(props) {
    super(props);
    const customer = Object.assign({}, props.navigation.state.params.customer);
    this.state = { customer };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleUpdate: this._onSubmit });
  }

  _onSubmit = () => {
    const customer = this.state.customer;
    axios.put(`http://172.20.10.2:7654/api/customers/${customer.id}`, customer)
      .then((resp) => {
        alert('Update Successful!');
        this.props.navigation.pop();
      });
  }

  _onChangeText = (key, text) => {
    this.setState((prevState, props) => {
      const newCustomer = Object.assign({}, prevState.customer);
      newCustomer[key] = text;
      return { customer: newCustomer };
    });
  }

  render() {
    // const customer = this.props.navigation.state.params.customer;
    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>First Name</Text>
          <TextInput
            style={styles.formInput}
            autoFocus={true}
            onChangeText={(text) => { this._onChangeText('first_name', text); }}
            value={this.state.customer.first_name}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Last Name</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => { this._onChangeText('last_name', text); }}
            value={this.state.customer.last_name}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Company</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => { this._onChangeText('company', text); }}
            value={this.state.customer.company}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>EMail</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => { this._onChangeText('email', text); }}
            value={this.state.customer.email}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Phone</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => { this._onChangeText('phone', text); }}
            value={this.state.customer.phone}
          />
        </View>
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  formGroup: {
    flexDirection: 'row',
    marginBottom: 20
  },
  formLabel: {
    flex: 1,
    fontSize: 16
  },
  formInput: {
    flex: 2,
    fontSize: 15,
    color: '#777',
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 3
      }
    })
  }
};

export default Edit;
