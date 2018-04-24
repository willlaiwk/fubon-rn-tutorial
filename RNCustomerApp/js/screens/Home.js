import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  Button,
  TouchableHighlight
} from 'react-native';
import {
  fetchCustomers,
  selectCustomer
} from '../actions';

const { width, height } = Dimensions.get('window');
const isIPhoneX = Math.max(width, height) >= 812;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomers();
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.selectCustomer(item);
        this.props.navigation.navigate('Details');
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.itemLeft}>
          <Image
            style={styles.itemAvatar}
            source={{ uri: item.avatar }}
          />
        </View>
        <View style={styles.itemRight}>
          <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
          <Text style={styles.itemCompany}>{item.company}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.flatlistContent}
          data={this.props.customers}
          renderItem={this._renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <TouchableHighlight
          underlayColor="#d35400"
          style={styles.addButton}
          onPress={() => {
            this.props.navigation.navigate('Add');
          }}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    position: 'relative'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#fff'
  },
  itemLeft: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  itemRight: {
    flex: 1,
    justifyContent: 'center'
  },
  itemAvatar: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 32
  },
  itemName: {
    fontSize: 20,
    color: '#222'
  },
  itemCompany: {
    fontSize: 16,
    color: '#777'
  },
  flatlistContent: {
    paddingBottom: Platform.OS === 'ios' ? (isIPhoneX ? 34 : 0) : 0,
    backgroundColor: '#fff'
  },
  separator: {
    height: 1,
    marginLeft: '4%',
    width: '96%',
    backgroundColor: '#ccc'
  },
  addButton: {
    position: 'absolute',
    bottom: 35,
    right: 30,
    width: 64,
    height: 64,
    backgroundColor: '#e67e22',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 64 / 2,
    borderColor: '#000',
  },
  addButtonText: {
    color: '#fff'
  }
}

const mapStateToProps = (state) => ({
  customers: state.customer.customerList
});

export default connect(mapStateToProps, {
  fetchCustomers,
  selectCustomer
})(Home);
