import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F9F2"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>AGRIQ</Text>
            <Text style={styles.tagline}>
              Smart Farmer Procurement
            </Text>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Ionicons
              name="notifications-outline"
              size={23}
              color="#1B5E20"
            />
          </TouchableOpacity>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.smallText}>
            Welcome, Farmer 👋
          </Text>

          <Text style={styles.title}>
            Sell your produce{'\n'}
            <Text style={styles.green}>without the wait.</Text>
          </Text>

          <Text style={styles.description}>
            Book your slot, track your queue and manage
            your procurement easily.
          </Text>
        </View>

        {/* Main Booking Card */}
        <TouchableOpacity
          style={styles.bookingCard}
          onPress={() => router.push('/(tabs)/booking')}
        >
          <View style={styles.bookingIcon}>
            <Ionicons
              name="calendar-outline"
              size={29}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.bookingContent}>
            <Text style={styles.bookingTitle}>
              Book Procurement Slot
            </Text>

            <Text style={styles.bookingSubtitle}>
              Choose centre, date and time
            </Text>
          </View>

          <View style={styles.arrow}>
            <Ionicons
              name="arrow-forward"
              size={21}
              color="#2E7D32"
            />
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.grid}>

          <ActionCard
            icon="calendar-outline"
            title="Book Slot"
            subtitle="Schedule visit"
            onPress={() => router.push('/(tabs)/booking')}
          />

          <ActionCard
            icon="time-outline"
            title="My Queue"
            subtitle="Track position"
          />

          <ActionCard
            icon="cube-outline"
            title="Procurement"
            subtitle="Check status"
          />

          <ActionCard
            icon="wallet-outline"
            title="Payment"
            subtitle="View payment"
          />

        </View>

        {/* Today's Status */}
        <Text style={styles.sectionTitle}>
          Today&apos;s Status
        </Text>

        <View style={styles.statusCard}>

          <StatusItem
            icon="location-outline"
            title="Procurement Centre"
            value="Not booked"
          />

          <View style={styles.divider} />

          <StatusItem
            icon="people-outline"
            title="Queue Position"
            value="--"
          />

          <View style={styles.divider} />

          <StatusItem
            icon="checkmark-circle-outline"
            title="Procurement Status"
            value="No active booking"
          />

        </View>

        {/* Info */}
        <View style={styles.info}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#2E7D32"
          />

          <Text style={styles.infoText}>
            Book your slot early and avoid long waiting
            times at the procurement centre.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function ActionCard({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={onPress}
    >
      <View style={styles.actionIcon}>
        <Ionicons
          name={icon}
          size={24}
          color="#2E7D32"
        />
      </View>

      <Text style={styles.actionTitle}>{title}</Text>

      <Text style={styles.actionSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

function StatusItem({
  icon,
  title,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}) {
  return (
    <View style={styles.statusRow}>
      <View style={styles.statusIcon}>
        <Ionicons
          name={icon}
          size={22}
          color="#2E7D32"
        />
      </View>

      <View style={styles.statusInfo}>
        <Text style={styles.statusLabel}>{title}</Text>
        <Text style={styles.statusValue}>{value}</Text>
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
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },

  logo: {
    fontSize: 27,
    fontWeight: '900',
    color: '#1B5E20',
    letterSpacing: 1.5,
  },

  tagline: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
  },

  notification: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  welcome: {
    marginTop: 12,
    marginBottom: 25,
  },

  smallText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },

  title: {
    fontSize: 31,
    lineHeight: 39,
    fontWeight: '800',
    color: '#18351A',
  },

  green: {
    color: '#2E7D32',
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#777',
    marginTop: 13,
  },

  bookingCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    marginBottom: 28,
  },

  bookingIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#256628',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookingContent: {
    flex: 1,
    marginLeft: 13,
  },

  bookingTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  bookingSubtitle: {
    color: '#DCEEDD',
    fontSize: 12,
    marginTop: 5,
  },

  arrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#18351A',
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  actionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },

  actionIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 11,
  },

  actionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#263B27',
  },

  actionSubtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
  },

  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    paddingHorizontal: 17,
    elevation: 2,
    marginBottom: 18,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },

  statusIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusInfo: {
    marginLeft: 13,
  },

  statusLabel: {
    fontSize: 11,
    color: '#888',
  },

  statusValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263B27',
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  info: {
    backgroundColor: '#E8F5E9',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#356139',
    marginLeft: 9,
  },
});