import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PlaceListScreen from '../screen/PlaceListScreen'
import PlaceDetailScreen from '../screen/PlaceDetailScreen'
import NewPlaceScreen from '../screen/NewPlaceScreen'
import MapScreen from '../screen/MapScreen'
import Colors from '../constants/Colors'

const PlaceNavigator = createStackNavigator(
    {
        List: PlaceListScreen,
        Detail: PlaceDetailScreen,
        New: NewPlaceScreen,
        Map: MapScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === 'android' ? Colors.primary : 'white',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primary,
        },
    }
)

export default createAppContainer(PlaceNavigator)
