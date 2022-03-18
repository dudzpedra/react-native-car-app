import styledComponents from "styled-components"
import Avatar from "../Avatar"
import Title from "../Title"

const HeaderView = styledComponents.View`
    margin: 5% auto
    width: 90%
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    border: 2px solid purple
    border-radius: 10px
`

const Header = () => {
    return (
        <HeaderView>
            <Avatar />
            <Title />
        </HeaderView>
    )
}

export default Header