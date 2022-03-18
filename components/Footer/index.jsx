import { Text } from 'react-native'
import styledComponents from 'styled-components'
import MyGithub from '../MyGithub'

const FooterView = styledComponents.View`
    align-items: center
    justify-content: center
    display: flex
    flex-direction: row
    margin: 5% auto
`

const Footer = () => {
    return (
        <FooterView>
            <Text>Designed and Developed by{' '}</Text>
            <MyGithub />
        </FooterView>
    )
}

export default Footer