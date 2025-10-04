import { Text, View, Image, TextInput } from "react-native";

import { SafeAreaView } from
"react-native-safe-area-context";

export default function Index()  {
  return (
    <SafeAreaView>

      <Text style={{color:'red', fontSize:30, fontStyle:"Italic"}}>My name is Damilola and I am a Senior software developer.</Text>

      <Text style={{color:'green', fontSize:50}}>I am so excited for this class</Text>

      <Text style={{color:'blue', fontSize:70, fontStyle:'italic'}}>React native is fun</Text>

      <Image 
      source={require('../assets/images/icon.png')}/>

      <TextInput style={{borderColor:'red', borderWidth:2}}/>


    </SafeAreaView>
  );
}
