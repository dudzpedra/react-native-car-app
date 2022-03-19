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

const FooterText = styledComponents.Text`
    color: white
`

const Footer = () => {
    return (
        <FooterView>
            <FooterText>Designed and Developed by{' '}</FooterText>
            <MyGithub />
        </FooterView>
    )
}

export default Footer