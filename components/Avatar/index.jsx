import styledComponents from "styled-components"

const AvatarImage = styledComponents.Image`
    width: 80px
    height: 80px
    margin: 0 2%
`

const Avatar = () => {
    return <AvatarImage source={{ uri: 'https://cdn4.iconfinder.com/data/icons/car-42/512/car_0002-512.png' }} />
}

export default Avatar