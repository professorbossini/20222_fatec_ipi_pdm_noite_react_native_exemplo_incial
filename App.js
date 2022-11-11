import {
  Alert,
  Button,  
  StyleSheet,
  Text, 
  TextInput, 
  View 
} from 'react-native';

import { useState } from 'react';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])
  const capturarTexto = (lembreteDigitado) => {

    lembreteDigitado = lembreteDigitado.toUpperCase()
    // não faça isso!
    // lembrete = lembreteDigitado
    // faça isso
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    if (lembrete.length > 0){
      setLembretes(lembretes => {
        const aux = [lembrete, ...lembretes]
        setLembrete('')
        return aux
      })
    }
    else{
      Alert.alert(
        "Digite algo",
        "Você precisa digitar o lembrete",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "OK",
            style: "default",
            onPress: () => Alert.alert("beleza você entendeu")
          },
          {
            text: "TErceiro botão"
          }
        ],
        {
          cancelable: true,
          onDismiss: () => Alert.alert ("Você se rebelou e clicou fora")
        }
      )
    }
  } 
  // fazer café -> <Text>fazer café</Text> 
  //  ver um filme -> <Text>ver um filme</Text>
  //Single Source of Truth
  return (
    <View style={{padding: 40}}>
      <View>
        <TextInput 
          style={{borderBottomColor: '#CCC', borderBottomWidth: 2, padding: 12, marginBottom: 4}}
          placeholder="Lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button 
          title="OK"
          onPress={adicionarLembrete}
        />
      </View>
      <View>
        {
          lembretes.map(l => <Text>{l}</Text>)
        }
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
