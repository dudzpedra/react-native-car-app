import { useCallback } from 'react'
import { Linking, Button } from 'react-native'

const MyGithub = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://github.com/dudzpedra')
    }, [])
    return <Button accessibilityLabel='Visit developer github' title='dudzpedra' color='purple' onPress={handlePress} />
}

export default MyGithub