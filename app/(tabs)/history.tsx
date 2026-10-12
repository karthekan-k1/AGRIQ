import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const historyData = [
  {
    id: 1,
    produce: 'Paddy',
    date: '05 Sep 2026',
    quantity: '500 KG',
    token: 'AQR-027',
    status: 'Completed',
  },
  {
    id: 2,
    produce: 'Rice',
    date: '20 Aug 2026',
    quantity: '400 KG',
    token: 'AQR-019',
    status: 'Completed',
  },
  {
    id: 3,
    produce: 'Maize',
    date: '10 Aug 2026',
    quantity: '300 KG',
    token: 'AQR-012',
    status: 'Completed',
  },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>
          Procurement History
        </Text>

        <Text style={styles.subtitle}>
          View your previous procurement records
        </Text>

        {/* Statistics */}
        <View style={styles.statsContainer}>

          <StatCard
            number="03"
            label="Procurements"
            icon="cube-outline"
          />

          <StatCard
            number="1,200"
            label="Total KG"
            icon="scale-outline"
          />

        </View>

        {/* History */}
        <Text style={styles.sectionTitle}>
          Recent Records
        </Text>

        {historyData.map((item) => (
          <HistoryCard
            key={item.id}
            item={item}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({
  number,
  label,
  icon,
}: any) {
  return (
    <View style={styles.statCard}>
      <Ionicons
        name={icon}
        size={24}
        color="#2E7D32"
      />

      <Text style={styles.statNumber}>
        {number}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function HistoryCard({ item }: any) {
  return (
    <TouchableOpacity style={styles.historyCard}>

      <View style={styles.produceIcon}>
        <Ionicons
          name="leaf-outline"
          size={25}
          color="#2E7D32"
        />
      </View>

      <View style={styles.historyContent}>

        <View style={styles.topRow}>
          <Text style={styles.produce}>
            {item.produce}
          </Text>

          <Text style={styles.status}>
            {item.status}
          </Text>
        </View>

        <Text style={styles.date}>
          {item.date}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            {item.quantity}
          </Text>

          <Text style={styles.token}>
            Token: {item.token}
          </Text>
        </View>

      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#999"
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F2',
  },

  content: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#18351A',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    elevation: 2,
  },

  statNumber: {
    fontSize: 25,
    fontWeight: '900',
    color: '#18351A',
    marginTop: 10,
  },

  statLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 25,
    marginBottom: 12,
  },

  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },

  produceIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  historyContent: {
    flex: 1,
    marginLeft: 12,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  produce: {
    fontSize: 15,
    fontWeight: '800',
    color: '#263B27',
  },

  status: {
    fontSize: 10,
    color: '#2E7D32',
    fontWeight: '700',
  },

  date: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: 7,
  },

  info: {
    fontSize: 11,
    color: '#666',
    marginRight: 15,
  },

  token: {
    fontSize: 11,
    color: '#666',
  },
});