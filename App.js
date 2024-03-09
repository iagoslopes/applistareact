import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';



export default function App() {

  const [listaProdutos, setListaProdutos] = useState([]);

  async function carregaProdutos(){
    var resp = await fetch("https://web-wfiwe9krz76p.up-de-fra1-1.apps.run-on-seenode.com/api/produtos",
    {
      method:"GET",
      
    }
    );
    var lista = await resp.json();
    setListaProdutos(lista);
  }

  return (
    <View style={styles.container}>
      <List.Section>
      <List.Subheader>Produtos</List.Subheader>
        {listaProdutos.map((produto)=>{
          return (
            <List.Item title={produto.nome} left={() => <List.Icon icon="cellphone" />} right={() => <Text>{produto.preco}</Text>} />
          )
        })}
        
      </List.Section>
      <Button onPress={()=>{carregaProdutos()}} mode="contained">Carregar</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});