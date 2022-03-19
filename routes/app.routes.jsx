import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import AllCarsScreen from '../screens/AllCarsScreen'
import DetailsScreen from '../screens/DetailsScreen'

const AppStack = createNativeStackNavigator()

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <AppStack.Screen name="All" component={AllCarsScreen} options={{ title: 'All Cars' }}/>
        <AppStack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
    </AppStack.Navigator>
)

export default AppRoutes