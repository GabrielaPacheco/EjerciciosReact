import * as React from 'react';
import { Divider } from 'react-native-elements';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Card,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 65,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
function Perros() {
  const [perros, setperros] = React.useState([
    { name: 'Bloodhound', pais: 'Bélgica', src: require('./img/perro1.jpg') },
    {
      name: 'Braco de Weimar',
      pais: 'Alemania',
      src: require('./img/perro2.jpg'),
    },
    { name: 'Bichón Frisé', pais: 'Francia', src: require('./img/perro3.jpg') },
    { name: 'Dálmata', pais: 'Croacia', src: require('./img/perro4.jpg') },
    {
      name: 'Pastor Holandés',
      pais: 'Países Bajos',
      src: require('./img/perro5.jpg'),
    },
  ]);
  return (
    <FlatList
      data={perros}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.img} source={item.src} />
            <View style={styles.content}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.pais}</Text>
            </View>
          </View>
          <Divider orientation="horizontal" />;
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

function Gatos() {
  const [gatos, setgatos] = React.useState([
    {
      name: 'Chantilly-Tiffany',
      pais: 'Estados Unidos',
      src: require('./img/gato1.jpg'),
    },
    {
      name: 'Angora turco',
      pais: 'Turquía',
      src: require('./img/gato2.jpg'),
    },
    { name: 'Habana', pais: 'Reino Unido', src: require('./img/gato3.jpg') },
    { name: 'Bobtail japonés', pais: 'Japón', src: require('./img/gato4.jpg') },
    {
      name: 'Scottish fold',
      pais: 'Reino Unido',
      src: require('./img/gato5.jpg'),
    },
  ]);
  return (
    <FlatList
      data={gatos}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.img} source={item.src} />
            <View style={styles.content}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.pais}</Text>
            </View>
          </View>
          <Divider orientation="horizontal" />;
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="PETS"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: '#feb72b',
        tabBarInactiveTintColor: '#FFF',
        tabBarInactiveBackgroundColor: '#527318',
      }}>
      <Tab.Screen
        name="Cats"
        component={Gatos}
        options={{
          tabBarLabel: 'Cats',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cat" size={size} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Dogs"
        component={Perros}
        options={{
          tabBarLabel: 'Dogs',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dog" size={size} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
