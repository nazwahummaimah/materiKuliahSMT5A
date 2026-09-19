import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
         {"\n"} Nama Lengkap : Nazwa Hummaimah Shiddqin{"\n"}
         {"\n"} NIM : 2488010039 {"\n"}
         {"\n"} Asal Sekolah : SMAN 1 CILIMUS{"\n"}
         {"\n"} Cita-cita : UI/UX Desaigner{"\n"}
         {"\n"} Rencana mencapai cita-cita : {"\n"}
         {"\n"} - Memahami Dasar HCI & Research{"\n"}
         {"\n"} - Praktik Prototyping & Design System{"\n"}
         {"\n"} - Pengembangan Portofolio UI/UX{"\n"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});