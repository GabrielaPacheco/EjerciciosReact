import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
const App = () => {
  const [modalVisiblehabitaciones, setModalVisibleHabitaciones] = useState(
    false
  );
  const [modalVisibleservicios, setModalVisibleServicios] = useState(false);
  const [modalVisiblelugares, setModalVisibleLugares] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblehabitaciones}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Tipos de Habitaciones</Text>
              <Text>
                El hotel Crowne Plaza ofrece habitaciones individuales, dobles
                de uso individual, twin o doble con camas individuales, dobles,
                triples y cuádruples.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitaciones(!modalVisiblehabitaciones);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleservicios}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>
                Servicios que ofrece Crowne Plaza
              </Text>
              <Text>
                Los servicios disponibles dentro del hotel son: Minibar, café y
                té, piscinas, saunas y gimnasios.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleServicios(!modalVisibleservicios);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblelugares}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Lugares Cercanos al Hotel</Text>
              <Text>
                Dentro de los lugares más cercanos al hotel podemos mencionar:
                La pupuseria Suiza Escalón, Plaza Palestina, Essenza Coffee y
                Restaurante El Mirador.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLugares(!modalVisiblelugares);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
        </View>

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Hotel Crowne Plaza</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitaciones(!modalVisiblehabitaciones);
                }}>
                <Image
                  style={styles.habitacion}
                  source={require('./src/img/habitacion1.jpg')}
                />
              </TouchableHighlight>
            </View>

            <View>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion2.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion3.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion4.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion5.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion6.jpg')}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Servicios para huéspedes</Text>
          <View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleServicios(!modalVisibleservicios);
                }}>
                <Image
                  style={styles.servicios}
                  source={require('./src/img/servicio1.jpg')}
                />
              </TouchableHighlight>
            </View>

            <View>
              <Image
                style={styles.servicios}
                source={require('./src/img/servicio2.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.servicios}
                source={require('./src/img/servicio3.png')}
              />
            </View>

            <View>
              <Image
                style={styles.servicios}
                source={require('./src/img/servicio4.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.servicios}
                source={require('./src/img/servicio5.jpg')}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Lugares Cercanos</Text>
          <View style={styles.listaItem}>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleLugares(!modalVisiblelugares);
              }}>
              <Image
                style={styles.servicios}
                source={require('./src/img/lugar1.jpg')}
              />
            </TouchableHighlight>
          </View>

          <View style={styles.listaItem}>
            <Image
              style={styles.servicios}
              source={require('./src/img/lugar2.jpg')}
            />
          </View>

          <View style={styles.listaItem}>
            <Image
              style={styles.servicios}
              source={require('./src/img/lugar3.jpg')}
            />
          </View>

          <View style={styles.listaItem}>
            <Image
              style={styles.servicios}
              source={require('./src/img/lugar4.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  habitacion: {
    width: 250,
    height: 300,
    marginRight: 10,
  },

  servicios: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },

  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});
export default App;
