import React,{useState} from 'react';
import {View, StyleSheet,Image,Text,ScrollView, Modal,Button, TouchableHighlight} from 'react-native';
const App = () =>{
  const[modalVisibleplaya,setModalVisiblePlaya]= useState(false);
  const[modalVisiblepupusas,setModalVisiblePupusas]= useState(false);
  const[modalVisibleruta,setModalVisibleRuta]= useState(false);
return(
<>
<ScrollView>
<Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
  alert('Modal has been closed.');
}} >
<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Ir a la playa</Text>
<Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
<Button title="Cerrar" onPress={()=>{setModalVisiblePlaya(!modalVisibleplaya)}}></Button>
</View>
</View>
</Modal>

<Modal transparent={true} animationType="slide" visible={modalVisiblepupusas} onRequestClose={() => {
  alert('Modal has been closed.');
}} >
<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Comer Pupusas</Text>
<Text>Las pupusas son el platillo típico de El Salvador ya que son muy deliciosas.</Text>
<Button title="Cerrar" onPress={()=>{setModalVisiblePupusas(!modalVisiblepupusas)}}></Button>
</View>
</View>
</Modal>

<Modal transparent={true} animationType="slide" visible={modalVisibleruta} onRequestClose={() => {
  alert('Modal has been closed.');
}} >
<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Ir Ruta Azul</Text>
<Text>Con más de 300 kilómetros de playa e innumerables oportunidades de senderismo, esta nueva ruta permite al turista vivir experiencias que van más allá de un simple recorrido turístico.</Text>
<Button title="Cerrar" onPress={()=>{setModalVisibleRuta(!modalVisibleruta)}}></Button>
</View>
</View>
</Modal>

<View style={{flexDirection:'row'}} >
<Image
style={styles.banner}
source={require('./src/img/bg.jpg')} />
</View>

<View styles={styles.contenedor}>
<Text style={styles.titulo}>¿Que hacer en El Salvador?</Text>
<ScrollView horizontal>

<View>
<TouchableHighlight
onPress={()=>{setModalVisiblePlaya(!modalVisibleplaya)}}
>
<Image
style={styles.ciudad}
source={require('./src/img/actividad1.jpg')}/>
</TouchableHighlight>
</View>

<View>
<Image
style={styles.ciudad}
source={require('./src/img/actividad2.jpg')}/>
</View>

<View>
<Image
style={styles.ciudad}
source={require('./src/img/actividad3.jpg')}/>
</View>

<View>
<Image
style={styles.ciudad}
source={require('./src/img/actividad4.jpg')}/>
</View>

<View>
<Image
style={styles.ciudad}
source={require('./src/img/actividad5.png')}/>
</View>

</ScrollView>

<Text style={styles.titulo}>Platillos Salvadoreños</Text>
<View>

<View>
<TouchableHighlight
onPress={()=>{setModalVisiblePupusas(!modalVisiblepupusas)}}
>
<Image
style={styles.mejores}
source={require('./src/img/mejores1.jpg')}/>
</TouchableHighlight>
</View>

<View>
<Image
style={styles.mejores}
source={require('./src/img/mejores2.jpg')}/>
</View>

<View>
<Image
style={styles.mejores}
source={require('./src/img/mejores3.jpg')}/>
</View>

</View>

<Text style={styles.titulo}>Rutas Turisticas</Text>
<View style={styles.listaItem}>
<TouchableHighlight
onPress={()=>{setModalVisibleRuta(!modalVisibleruta)}}
>
<Image
style={styles.mejores}
source={require('./src/img/ruta1.jpg')}/>
</TouchableHighlight>
</View>

<View style={styles.listaItem}>
<Image
style={styles.mejores}
source={require('./src/img/ruta2.jpg')}/>
</View>

<View style={styles.listaItem}>
<Image
style={styles.mejores}
source={require('./src/img/ruta3.jpg')}/>
</View>

<View style={styles.listaItem}>
<Image
style={styles.mejores}
source={require('./src/img/ruta4.jpg')}/>
</View>

</View>

</ScrollView>

</>
);
};
const styles = StyleSheet.create({
banner:{
height:250,
flex:1
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},

mejores: {
  width: '100%',
  height: 200,
  marginVertical:5
},

listaItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
vistaModal:{
backgroundColor:'#000000aa',flex:1
},
Modal:{
backgroundColor:'#fff',margin:50,padding:40,borderRadius:10,flex
:1
},
subtitulo:{
fontWeight:'bold',
fontSize:14,
justifyContent:'center'
},

});
export default App;