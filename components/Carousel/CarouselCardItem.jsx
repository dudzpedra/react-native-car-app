import styledComponents from "styled-components";
import { View } from 'react-native'

const ImageView = styledComponents.Image`
  width: 350px
  height: 300px
  margin: 4% auto
  border-radius: 8px
`

const CarTitle = styledComponents.Text`
  text-align: center
  font-size: 18px
  color: purple
`

const CarouselItem = ({ item }) => {

      return (
          <View key={item.id}>
              <CarTitle>{item.title}</CarTitle>
              <ImageView source={{ uri: item.imgUrl }} />
              <CarTitle>{item.description}</CarTitle>
          </View>
      )
}

export default CarouselItem