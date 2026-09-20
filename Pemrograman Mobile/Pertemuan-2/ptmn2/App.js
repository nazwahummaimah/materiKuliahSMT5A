import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.name}>Nazwa Hummaimah Shiddqin</Text>
      <Text style={styles.title}>INFORMATICS STUDENT</Text>

      <View style={styles.line} />

      <Text style={styles.heading}>DATA AKADEMIK</Text>

      <View style={styles.row}>
        <Text>NIM</Text>
        <Text>2488010039</Text>
      </View>

      <View style={styles.row}>
        <Text>Asal Sekolah</Text>
        <Text>SMAN 1 CILIMUS</Text>
      </View>

      <Text style={styles.heading}>CITA-CITA</Text>
      <Text style={styles.cita}>UI/UX Designer & Researcher</Text>

      <Text style={styles.heading}>RENCANA MENCAPAI CITA-CITA</Text>

      <Text style={styles.plan}>01. Memahami HCI & Design Thinking</Text>
      <Text style={styles.description}>
        Mempelajari dasar interaksi manusia dan komputer serta Design Thinking.
      </Text>

      <Text style={styles.plan}>02. Belajar Prototyping & Design System</Text>
      <Text style={styles.description}>
        Berlatih membuat wireframe, prototype, dan desain aplikasi.
      </Text>

      <Text style={styles.plan}>03. Membuat Portofolio UI/UX</Text>
      <Text style={styles.description}>
        Membuat studi kasus dan mengembangkan portofolio desain.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FAFDFB',
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#111827',
  },

  title: {
    marginTop: 5,
    color: '#2D6A4F',
    fontWeight: 'bold',
  },

  line: {
    height: 2,
    backgroundColor: '#111827',
    marginVertical: 20,
  },

  heading: {
    marginTop: 15,
    marginBottom: 10,
    color: '#2D6A4F',
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  cita: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  plan: {
    marginTop: 10,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 3,
    color: '#555',
    lineHeight: 18,
  },
});