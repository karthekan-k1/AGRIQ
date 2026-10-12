import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => router.replace('/login'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.subtitle}>
          Manage your account information
        </Text>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>F</Text>
          </View>

          <Text style={styles.name}>
            Farmer Name
          </Text>

          <Text style={styles.phone}>
            +91 98765 43210
          </Text>

          <View style={styles.verified}>
            <Ionicons
              name="checkmark-circle"
              size={16}
              color="#2E7D32"
            />

            <Text style={styles.verifiedText}>
              Verified Farmer
            </Text>
          </View>
        </View>

        {/* Personal Information */}
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.menuCard}>
          <ProfileItem
            icon="person-outline"
            title="Personal Details"
            subtitle="Name, address and information"
          />

          <Divider />

          <ProfileItem
            icon="call-outline"
            title="Phone Number"
            subtitle="+91 98765 43210"
          />

          <Divider />

          <ProfileItem
            icon="card-outline"
            title="Farmer ID"
            subtitle="AGRIQ-FR-1027"
          />
        </View>

        {/* Account */}
        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <View style={styles.menuCard}>
          <ProfileItem
            icon="lock-closed-outline"
            title="Change Password"
            subtitle="Update your password"
          />

          <Divider />

          <ProfileItem
            icon="notifications-outline"
            title="Notification Settings"
            subtitle="Manage notifications"
          />

          <Divider />

          <ProfileItem
            icon="language-outline"
            title="Language"
            subtitle="English"
          />
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={21}
            color="#D32F2F"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

        <Text style={styles.version}>
          AGRIQ v1.0.0
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileItem({
  icon,
  title,
  subtitle,
}: any) {
  return (
    <TouchableOpacity style={styles.profileItem}>
      <View style={styles.itemIcon}>
        <Ionicons
          name={icon}
          size={21}
          color="#2E7D32"
        />
      </View>

      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>
          {title}
        </Text>

        <Text style={styles.itemSubtitle}>
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#999"
      />
    </TouchableOpacity>
  );
}

function Divider() {
  return <View style={styles.divider} />;
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

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    alignItems: 'center',
    padding: 25,
    marginTop: 22,
    elevation: 2,
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
  },

  name: {
    fontSize: 21,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 13,
  },

  phone: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  verified: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 13,
  },

  verifiedText: {
    fontSize: 11,
    color: '#2E7D32',
    fontWeight: '700',
    marginLeft: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 25,
    marginBottom: 12,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 15,
    elevation: 2,
  },

  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },

  itemIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContent: {
    flex: 1,
    marginLeft: 12,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263B27',
  },

  itemSubtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  logoutButton: {
    height: 55,
    backgroundColor: '#FFF1F1',
    borderRadius: 16,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#D32F2F',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },

  version: {
    textAlign: 'center',
    fontSize: 11,
    color: '#999',
    marginTop: 20,
  },
});