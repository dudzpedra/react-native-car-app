import { useState } from 'react'
import { Button } from 'react-native'
import styledComponents from "styled-components"
import { useAuth } from '../../contexts/auth'
import TheButton from '../TheButton'

const LoginView = styledComponents.View`
    width: 80%
`

const InputView = styledComponents.TextInput`
    height: 50px
    border: 2px solid purple
    border-radius: 10px
    margin: 2% 0
    padding: 0 2%
`

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = newUsername => setUsername(newUsername)
    const handlePassword = newPassword => setPassword(newPassword)

    const { signIn } = useAuth()

    const handleSignIn = () => {
        const newUser = {
            username,
            password
        }
        signIn(newUser)
    }
    return (
        <LoginView>
            <InputView placeholder="Username" onChangeText={handleUsername} defaultValue={username}/>
            <InputView placeholder="Password" onChangeText={handlePassword} defaultValue={password}/>
            <Button title='signin' onPress={handleSignIn}/>
            <TheButton text='Login' navigation={navigation} path='Home' />
        </LoginView>
    )
}

export default Login