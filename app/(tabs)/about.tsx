import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <View style={styles.logoCircle}>
        <Ionicons
          name="leaf"
          size={40}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.logo}>AGRIQ</Text>

      <Text style={styles.heading}>
        Smart Farmer Procurement
      </Text>

      <Text style={styles.description}>
        AGRIQ helps farmers book procurement slots,
        reduce waiting time, track queue position,
        and monitor procurement and payment status
        from one simple mobile application.
      </Text>

      <Text style={styles.sectionTitle}>
        What AGRIQ Provides
      </Text>

      <InfoCard
        icon="calendar-outline"
        title="Slot Booking"
        text="Choose a convenient procurement date and time."
      />

      <InfoCard
        icon="time-outline"
        title="Queue Tracking"
        text="Know your queue position and avoid unnecessary waiting."
      />

      <InfoCard
        icon="location-outline"
        title="Procurement Centres"
        text="Find nearby procurement centres easily."
      />

      <InfoCard
        icon="wallet-outline"
        title="Payment Tracking"
        text="Track your procurement payment status."
      />

    </ScrollView>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Ionicons
          name={icon}
          size={23}
          color="#2E7D32"
        />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </View>
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
    padding: 22,
    paddingTop: 35,
    paddingBottom: 40,
  },

  logoCircle: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  logo: {
    fontSize: 27,
    fontWeight: '900',
    color: '#1B5E20',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 10,
  },

  heading: {
    fontSize: 21,
    fontWeight: '800',
    color: '#18351A',
    textAlign: 'center',
    marginTop: 20,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#707070',
    textAlign: 'center',
    marginTop: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 32,
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 12,
    elevation: 2,
  },

  icon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContent: {
    flex: 1,
    marginLeft: 13,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#263B27',
  },

  cardText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#777',
    marginTop: 4,
  },
});