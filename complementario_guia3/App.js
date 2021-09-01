import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import { View, Image, Text } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    src: require('./src/imgs/pupusas.JPG'),
    descripcion:
      'harina de maíz,aceite,quesillo friijoles molidos,Chicharron molido,sal',
  },
  {
    id: '2',
    title: 'Elotes Locos',
    src: require('./src/imgs/elotes-locos.jpg'),
    descripcion:
      'elotes blancos,queso rallado,mostaza,salsa negra (de la espesa),mayonesa,ketchup',
  },
  {
    id: '3',
    title: 'Tamales',
    src: require('./src/imgs/tamales.jpg'),
    descripcion: 'masa de maíz,aceite,caldo de gallina',
  },
  {
    id: '4',
    title: 'Sopa de Pata',
    src: require('./src/imgs/sopa.jpg'),
    descripcion: 'pata de res grande,achiote,yuca grande.Hierbas aromaticas',
  },
];
const Item = ({ title, img, descripcion }) => (
  <View style={styles.item}>
    <Card>
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.img} source={img} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </Card>
  </View>
);
const Comidas = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} descripcion={item.descripcion} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#00aae4',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 15,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    resizeMode: 'contain',
  },
});
export default Comidas;
