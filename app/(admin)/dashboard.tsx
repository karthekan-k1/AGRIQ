import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>AGRIQ</Text>

            <Text style={styles.subtitle}>
              Admin Dashboard
            </Text>
          </View>

          <View style={styles.adminIcon}>
            <Ionicons
              name="person"
              size={24}
              color="#FFFFFF"
            />
          </View>
        </View>

        {/* Welcome */}

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>
            Welcome, Admin 👋
          </Text>

          <Text style={styles.welcomeSub}>
            Manage procurement centres and farmer queues.
          </Text>
        </View>

        {/* Statistics */}

        <View style={styles.statsGrid}>

          <StatCard
            icon="business-outline"
            title="Centres"
            value="12"
          />

          <StatCard
            icon="people-outline"
            title="Farmers"
            value="245"
          />

          <StatCard
            icon="time-outline"
            title="Active Queue"
            value="38"
          />

          <StatCard
            icon="calendar-outline"
            title="Bookings"
            value="67"
          />

        </View>

        {/* Management */}

        <Text style={styles.sectionTitle}>
          Management
        </Text>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => router.push('/(admin)/centres')}
        >
          <View style={styles.menuIcon}>
            <Ionicons
              name="business-outline"
              size={25}
              color="#2E7D32"
            />
          </View>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>
              Manage Centres
            </Text>

            <Text style={styles.menuSubtitle}>
              Add or remove procurement centres
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => router.push('/(admin)/queue')}
        >
          <View style={styles.menuIcon}>
            <Ionicons
              name="people-outline"
              size={25}
              color="#2E7D32"
            />
          </View>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>
              Queue Management
            </Text>

            <Text style={styles.menuSubtitle}>
              View and update farmer queue status
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="#999"
          />
        </TouchableOpacity>

        {/* Info */}

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={23}
            color="#2E7D32"
          />

          <Text style={styles.infoText}>
            Manage centres and queues efficiently using AGRIQ.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>
        <Ionicons
          name={icon}
          size={22}
          color="#2E7D32"
        />
      </View>

      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statTitle}>
        {title}
      </Text>
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
    padding: 20,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1B5E20',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 3,
  },

  adminIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    marginTop: 28,
    marginBottom: 22,
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#18351A',
  },

  welcomeSub: {
    fontSize: 13,
    color: '#777',
    marginTop: 7,
    lineHeight: 20,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },

  statIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statValue: {
    fontSize: 25,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 12,
  },

  statTitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 20,
    marginBottom: 13,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },

  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuContent: {
    flex: 1,
    marginLeft: 13,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#263B27',
  },

  menuSubtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 16,
    padding: 15,
    marginTop: 18,
  },

  infoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: '#356139',
    lineHeight: 18,
  },

});