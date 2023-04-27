import { TextInput, View } from 'react-native';
import estilos from './estilos';

export default function InputPesquisa() {
  return (
    <View style={estilos.container}>
      <TextInput style={estilos.pesquisa} />
    </View>
  );
}
