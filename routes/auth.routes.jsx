import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Welcome' component={WelcomeScreen} options={{ title: 'Cars App' }}/>
    </AuthStack.Navigator>
)

export default AuthRoutes