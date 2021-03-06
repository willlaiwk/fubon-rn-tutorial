import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Platform,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';
import axios from 'axios';
import {
  updateCustomer,
  deleteCustomer
} from '../actions';

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
    const customer = Object.assign({}, props.customer);
    this.state = { customer };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleUpdate: this._handleUpdate });
  }

  _handleUpdate = () => {
    const customer = this.state.customer;
    this.props.updateCustomer(customer)
      .then(() => {
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

  _handleDelete = () => {
    this.props.deleteCustomer(this.props.customer.id)
      .then(() => {
        this.props.navigation.popToTop();
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
        <View style={styles.formGroup}>
          <TouchableHighlight
            underlayColor="#c0392b"
            style={styles.deleteButton}
            onPress={() => {
              Alert.alert(
                'Warning',
                `Do you want to delete the customer ?`,
                [
                  { text: 'Cancel', style: 'cancel' },
                  {
                    text: 'Delete', style: 'destructive', onPress: () => {
                      this._handleDelete();
                    }
                  },
                ],
                { cancelable: false }
              )
            }}
          >
            <Text style={styles.deleteButtonText}>DELETE</Text>
          </TouchableHighlight>
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
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16
  }
};

const mapStateToProps = (state) => ({
  customer: state.customer.selectedCustomer
});

export default connect(mapStateToProps, {
  updateCustomer,
  deleteCustomer
})(Edit);
