import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta (){
    return <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>

      <View>
          <Text>Cesta de Verduras</Text>
          <Text>Jenny jack farm</Text>
          <Text>
              Uma cesta com produtos selecionados 
              cuidadosamente da fazenda direto pra
              sua cozinha
          </Text>

      </View>

    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    }
});