import styledComponents from "styled-components";
import { View, Dimensions, Text } from 'react-native'

/* export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7) */

const ImageView = styledComponents.Image`
  width: 300px
  height: 300px
  margin: 5% auto
  border-radius: 8px
`

const CarTitle = styledComponents.Text`
  text-align: center
`

const CarouselItem = ({ item }) => {

      return (
          <View key={item.id}>
              <ImageView source={{ uri: item.imgUrl }} />
              <CarTitle>{item.title}</CarTitle>
          </View>
      )
}

export default CarouselItem