import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFDFB" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header / Nama Lengkap */}
        <View style={styles.header}>
          <Text style={styles.name}>Nazwa Hummaimah Shiddqin</Text>
          <Text style={styles.title}>INFORMATICS STUDENT</Text>
        </View>

        <View style={styles.dividerMain} />

        {/* Section 1: Data Akademik (NIM & Asal Sekolah) */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>DATA AKADEMIK</Text>
          
          <View style={styles.row}>
            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>2488010039</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Asal Sekolah</Text>
            <Text style={styles.value}>SMAN 1 Cilimus</Text>
          </View>
        </View>

        {/* Section 2: Cita-cita */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>CITA-CITA</Text>
          <Text style={styles.bodyTextBold}>UI/UX Designer & Researcher</Text>
        </View>

        {/* Section 3: Rencana Mencapai Cita-cita */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>RENCANA MENCAPAI CITA-CITA</Text>
          
          <View style={styles.planRow}>
            <Text style={styles.planNumber}>01</Text>
            <View style={styles.planContent}>
              <Text style={styles.planTitle}>Pemahaman Dasar HCI & Research</Text>
              <Text style={styles.planSub}>Mempelajari prinsip Interaksi Manusia & Komputer serta metodologi Design Thinking.</Text>
            </View>
          </View>

          <View style={styles.planRow}>
            <Text style={styles.planNumber}>02</Text>
            <View style={styles.planContent}>
              <Text style={styles.planTitle}>Praktik Prototyping & Design System</Text>
              <Text style={styles.planSub}>Melatih pembuatan wireframe, hi-fi prototype, serta pembuatan antarmuka aplikasi mobile.</Text>
            </View>
          </View>

          <View style={styles.planRow}>
            <Text style={styles.planNumber}>03</Text>
            <View style={styles.planContent}>
              <Text style={styles.planTitle}>Pengembangan Portofolio UI/UX</Text>
              <Text style={styles.planSub}>Membangun studi kasus riset UX dan portofolio desain produk secara konsisten.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFDFB',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },

  /* Header */
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2D6A4F',
    letterSpacing: 1.2,
    marginTop: 4,
  },

  dividerMain: {
    height: 2,
    backgroundColor: '#111827',
    marginBottom: 28,
  },

  /* Section Styling */
  section: {
    marginBottom: 28,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2D6A4F',
    letterSpacing: 1.5,
    marginBottom: 12,
  },

  /* Row Info */
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  label: {
    fontSize: 13,
    color: '#6B7280',
  },
  value: {
    fontSize: 13,
    fontWeight: '600',
    color: '#191D1B',
  },

  /* Cita-cita Text */
  bodyTextBold: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  /* Strategic Plan */
  planRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  planNumber: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2D6A4F',
    width: 28,
    marginRight: 8,
  },
  planContent: {
    flex: 1,
  },
  planTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111827',
  },
  planSub: {
    fontSize: 12,
    color: '#4B5563',
    marginTop: 2,
    lineHeight: 17,
  },
});