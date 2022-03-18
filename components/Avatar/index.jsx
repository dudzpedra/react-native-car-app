import { Image, StyleSheet } from 'react-native'

const Avatar = ({ size }) => {
    return <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.avatar} />
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginHorizontal: 5
    },
})

export default Avatar