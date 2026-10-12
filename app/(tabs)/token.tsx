import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function TokenScreen() {
  const router = useRouter();

  const { centre, date, time } =
    useLocalSearchParams<{
      centre?: string;
      date?: string;
      time?: string;
    }>();

  // Demo token
  const tokenNumber = 'AQR-027';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Success */}
        <View style={styles.successIcon}>
          <Ionicons
            name="checkmark"
            size={48}
            color="#FFFFFF"
          />
        </View>

        <Text style={styles.successTitle}>
          Slot Booked Successfully
        </Text>

        <Text style={styles.subtitle}>
          Your procurement slot has been confirmed.
        </Text>

        {/* Token Card */}
        <View style={styles.tokenCard}>
          <Text style={styles.tokenLabel}>
            YOUR TOKEN NUMBER
          </Text>

          <Text style={styles.token}>
            {tokenNumber}
          </Text>

          <View style={styles.tokenDivider} />

          <View style={styles.detailsRow}>
            <View>
              <Text style={styles.detailLabel}>
                Date
              </Text>

              <Text style={styles.detailValue}>
                {date || '--'}
              </Text>
            </View>

            <View>
              <Text style={styles.detailLabel}>
                Time
              </Text>

              <Text style={styles.detailValue}>
                {time || '--'}
              </Text>
            </View>
          </View>
        </View>

        {/* Centre */}
        <View style={styles.centreCard}>
          <View style={styles.centreIcon}>
            <Ionicons
              name="location"
              size={24}
              color="#2E7D32"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.detailLabel}>
              Procurement Centre
            </Text>

            <Text style={styles.centreName}>
              {centre || 'Selected Centre'}
            </Text>
          </View>
        </View>

        {/* Info */}
        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#2E7D32"
          />

          <Text style={styles.infoText}>
            Please arrive at the procurement centre
            before your selected time.
          </Text>
        </View>

        {/* Status */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.statusButton}
          onPress={() =>
            router.replace('/(tabs)/status')
          }
        >
          <Text style={styles.statusButtonText}>
            View Procurement Status
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        {/* Home */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() =>
            router.replace('/(tabs)/home')
          }
        >
          <Text style={styles.homeButtonText}>
            Back to Home
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
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
    paddingHorizontal: 22,
    paddingVertical: 28,
    justifyContent: 'center',
  },

  successIcon: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#2E7D32',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  successTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#18351A',
    textAlign: 'center',
    marginTop: 18,
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginTop: 7,
  },

  tokenCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    marginTop: 28,
    alignItems: 'center',
    elevation: 3,
  },

  tokenLabel: {
    fontSize: 11,
    color: '#888',
    fontWeight: '700',
    letterSpacing: 1,
  },

  token: {
    fontSize: 38,
    fontWeight: '900',
    color: '#2E7D32',
    letterSpacing: 3,
    marginTop: 8,
  },

  tokenDivider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    width: '100%',
    marginVertical: 18,
  },

  detailsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  detailLabel: {
    fontSize: 11,
    color: '#888',
  },

  detailValue: {
    fontSize: 14,
    color: '#263B27',
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'left',
  },

  centreCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  centreIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  centreName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#263B27',
    marginTop: 4,
  },

  infoBox: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 14,
    borderRadius: 15,
    marginTop: 13,
    alignItems: 'center',
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#356139',
    marginLeft: 9,
  },

  statusButton: {
    width: '100%',
    height: 54,
    borderRadius: 16,
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  statusButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginRight: 9,
  },

  homeButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
  },

  homeButtonText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '700',
  },
});