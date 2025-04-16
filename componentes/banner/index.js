import { Text, Image, View } from 'react-native';
import styles from './styles';

export default function Banner() {
  return (
    <View style={styles.containerBanner}>
      <Text style={styles.TextBanner}>Em Cartaz</Text>
      <Image style={styles.imageBanner} source={require('../../img/acompanhante.jpg')} />
    </View>
  );
}


