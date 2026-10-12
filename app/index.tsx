import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.logoCircle}>
          <Ionicons name="leaf" size={55} color="#FFFFFF" />
        </View>

        <Text style={styles.logo}>AGRIQ</Text>

        <Text style={styles.title}>
          Smart Farmer{'\n'}
          <Text style={styles.green}>Procurement</Text>
        </Text>

        <Text style={styles.description}>
          Book your procurement slot, track your queue,
          and manage your produce with ease.
        </Text>

        <View style={styles.features}>
          <Feature
            icon="calendar-outline"
            text="Book procurement slots"
          />

          <Feature
            icon="time-outline"
            text="Track your queue"
          />

          <Feature
            icon="location-outline"
            text="Find procurement centres"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons
            name="arrow-forward"
            size={21}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.adminButton}
          onPress={() => router.push('/admin-login')}
        >
          <Ionicons name="shield-checkmark-outline" size={19} color="#2E7D32" />
          <Text style={styles.adminButtonText}>Admin Login</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>
          Simple • Fast • Farmer Friendly
        </Text>

      </View>
    </SafeAreaView>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}) {
  return (
    <View style={styles.feature}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={20} color="#2E7D32" />
      </View>

      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F2',
  },

  content: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },

  logo: {
    fontSize: 30,
    fontWeight: '900',
    color: '#1B5E20',
    textAlign: 'center',
    letterSpacing: 2,
  },

  title: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '800',
    color: '#18351A',
    textAlign: 'center',
    marginTop: 25,
  },

  green: {
    color: '#2E7D32',
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#707070',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 15,
  },

  features: {
    width: '100%',
    marginTop: 30,
  },

  feature: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  featureIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureText: {
    flex: 1,
    marginLeft: 13,
    fontSize: 14,
    color: '#405142',
    fontWeight: '600',
  },

  button: {
    width: '100%',
    height: 56,
    borderRadius: 17,
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 10,
  },

  adminButton: {
    width: '100%',
    height: 48,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A5C8A7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  adminButtonText: {
    color: '#2E7D32',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },

  bottomText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: 20,
  },
});