import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/theme';

export default function StatusScreen() {
  const router = useRouter();

  const hasBooking = false;

  if (!hasBooking) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>

          <View style={styles.emptyIcon}>
            <Ionicons
              name="calendar-outline"
              size={55}
              color={COLORS.primary}
            />
          </View>

          <Text style={styles.emptyTitle}>
            No Active Booking
          </Text>

          <Text style={styles.emptyText}>
            You don&apos;t have any active procurement
            booking at the moment.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push('/(tabs)/booking')
            }
          >
            <Text style={styles.buttonText}>
              Book a Slot
            </Text>

            <Ionicons
              name="arrow-forward"
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  emptyContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  emptyIcon: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 25,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textSecondary,
    marginTop: 10,
  },

  button: {
    height: 55,
    width: '100%',
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 9,
  },
});