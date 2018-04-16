import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const isIPhoneX = Math.max(width, height) >= 812;

class Home extends React.Component {
  constructor(props) {
    super(props);
    // Component State
    this.state = {
      customers: []
    };
  }

  componentWillMount() {
    console.log('componentWillMount: 畫面顯示前做的事');
  }

  componentDidMount() {
    console.log('componentDidMount: 畫面顯示後做的事');
    // 撈初始資料
    // const requset = axios.get('http://localhost:7654/api/customers');
    const requset = axios.get('http://172.20.10.2:7654/api/customers');
    requset
      .then((resp) => {
        this.setState({ customers: resp.data });
      })
      .catch((err) => {
        const st = err.response.status;
        if (st === 404) {

        } else if (st === 500) {

        } else {
          console.log('err:', err);
        }
      });
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => {
      // todo: 換頁 => Details
      this.props.navigation.navigate('Details', {
        customer: item
      });
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
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.flatlistContent}
          data={this.state.customers}
          renderItem={this._renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = {
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
  }
}

export default Home;
