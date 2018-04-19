import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';

class Details extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: 'Cancel',
    headerRight: <Button title="Edit" onPress={() => {
      navigation.state.params.handleRouteEdit();
    }} />
  })

  componentDidMount() {
    this.props.navigation.setParams({ handleRouteEdit: this._handleRouteEdit });
  }

  _handleRouteEdit = () => {
    this.props.navigation.navigate('Edit');
  }

  render() {
    const customer = this.props.customer;
    return (
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.image}
            source={{ uri: customer.avatar }}
          />
          <Text style={styles.name}>{customer.first_name} {customer.last_name}</Text>
          <Text style={styles.company}>{customer.company}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.infoGroup}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoText}>{customer.email}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoText}>{customer.phone}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// const Details = (props) => {
//   console.log('Detils props:', props);
//   // const customer = props.navigation.state.params.customer;
//   // const customer = props.customer;
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentHeader}>
//         <Image
//           style={styles.image}
//           source={{ uri: customer.avatar }}
//         />
//         <Text style={styles.name}>{customer.first_name} {customer.last_name}</Text>
//         <Text style={styles.company}>{customer.company}</Text>
//       </View>
//       <View style={styles.content}>
//         <View style={styles.infoGroup}>
//           <Text style={styles.infoLabel}>Email</Text>
//           <Text style={styles.infoText}>{customer.email}</Text>
//         </View>
//         <View style={styles.infoGroup}>
//           <Text style={styles.infoLabel}>Phone</Text>
//           <Text style={styles.infoText}>{customer.phone}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentHeader: {
    alignItems: 'center',
    padding: 16
  },
  content: {
    paddingHorizontal: 30
  },
  image: {
    width: 64,
    height: 64,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 32
  },
  name: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 2
  },
  company: {
    fontSize: 18,
    color: '#777'
  },
  infoGroup: {
    flexDirection: 'row',
    marginBottom: 10
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
  },
  infoText: {
    flex: 2,
    fontSize: 15,
    color: '#777',
  }
};

const mapStateToProps = (state) => ({
  customer: state.customer.customer
});

export default connect(mapStateToProps)(Details);
