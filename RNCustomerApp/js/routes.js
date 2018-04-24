import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation';

import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Add from './screens/Add';

const mainStack = StackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
    Edit: { screen: Edit },
    Add: { screen: Add }
  },
  { initialRouteName: 'Home' }
);

const authStack = StackNavigator(
  {
    login: { screen: Login }
  }
);

const createRouter = (isLogin = false) => SwitchNavigator(
  {
    Auth: { screen: authStack },
    Main: { screen: mainStack }
  },
  { initialRouteName: isLogin ? 'Main' : 'Auth' }
);

export default createRouter;
