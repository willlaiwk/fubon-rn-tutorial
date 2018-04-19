import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  Platform,
  TextInput
} from 'react-native';
import { createCustomer } from '../actions';

class Add extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Customer',
    headerRight: (
      <Button
        onPress={() => {
          navigation.state.params.handleCreate();
        }}
        title="Create"
        color="#1a6efe"
      />
    )
  })

  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleCreate: this._onSubmit });
  }

  _onSubmit = () => {
    const customer = Object.assign({}, this.state.customer);
    this.props.createCustomer(customer)
      .then(() => {
        alert('新增成功!');
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

const mapDispatchToProps = (dispatch) => ({
  createCustomer: bindActionCreators(createCustomer, dispatch)
})

export default connect(null, mapDispatchToProps)(Add);
