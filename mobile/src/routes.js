import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Profile from './pages/profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevApp - Mapa' 
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7d40E7'
            },
        },
    })
);

export default Routes;
