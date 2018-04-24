import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  Platform
} from 'react-native';
import { userLogin } from '../actions';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: ''
    };
  }

  _handleLogin = () => {
    const { account, password } = this.state;
    if (!account || !password) {
      alert('請輸入帳號密碼');
      return;
    }
    this.props.userLogin(account, password)
      .catch((err) => {
        const st = err.response.status;
        if (st === 401) {
          alert('帳號密碼錯誤!');
          this.setState({ account: '', password: '' });
        } else {
          alert('系統發生錯誤!');
          console.log(err);
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME</Text>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Account</Text>
          <TextInput
            style={styles.formInput}
            autoCapitalize="none"
            onChangeText={(text) => { this.setState({ account: text }); }}
            value={this.state.account}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            onChangeText={(text) => { this.setState({ password: text }); }}
            value={this.state.password}
          />
        </View>
        <TouchableHighlight
          style={styles.formSubmit}
          underlayColor="#2980b9"
          onPress={() => { this._handleLogin(); }}
        >
          <Text style={styles.formSubmitText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 16
  },
  welcome: {
    fontSize: 32,
    marginTop: 30,
    marginBottom: 50,
    letterSpacing: 1
  },
  formGroup: {
    marginBottom: 40
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8
  },
  formInput: {
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
  formSubmit: {
    backgroundColor: '#3498db',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formSubmitText: {
    color: '#fff',
    fontSize: 16
  }
};

export default connect(null, {
  userLogin
})(Login);
