import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado, code }) => {
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [area, setarea] = useState();
  const [imagen, setimagen] = useState();
  const [lengua, setlengua] = useState([]);

  useEffect(() => {
    setinfo(resultado);
    lengua.length = 0;
    Object.values(info).map((e) => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setarea(e.area.total);
      setimagen(code);
      Object.values(e.linguas).map((l) => {
        lengua.push(l.nome);
      });
    });
  });

  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={styles.container}>
        <Text>Capital: {capital}</Text>
        <Text>Region: {region}</Text>
        <Text>Lengua: {lengua.toString()}</Text>
        <Text>Area en metros cuadrados: {area} km2</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://flagcdn.com/w160/${imagen}.png`,
          }}
        />
      </View>
    </Card>
  );
};
export default Pais;
const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 75,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
