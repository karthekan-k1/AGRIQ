import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: 1,
    title: 'Slot Confirmed',
    message: 'Your procurement slot has been successfully booked.',
    time: '10 mins ago',
    icon: 'checkmark-circle',
    type: 'success',
    unread: true,
  },
  {
    id: 2,
    title: 'Queue Update',
    message: 'Your current queue position is 08.',
    time: '30 mins ago',
    icon: 'people',
    type: 'queue',
    unread: true,
  },
  {
    id: 3,
    title: 'Procurement Reminder',
    message: 'Please arrive at the procurement centre before 10:00 AM.',
    time: '1 hour ago',
    icon: 'time',
    type: 'reminder',
    unread: false,
  },
  {
    id: 4,
    title: 'Payment Processed',
    message: 'Your payment has been initiated successfully.',
    time: 'Yesterday',
    icon: 'wallet',
    type: 'payment',
    unread: false,
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subtitle}>
              Stay updated with your procurement
            </Text>
          </View>

          <TouchableOpacity style={styles.markButton}>
            <Ionicons
              name="checkmark-done-outline"
              size={22}
              color="#2E7D32"
            />
          </TouchableOpacity>
        </View>

        {/* Today */}
        <Text style={styles.sectionTitle}>Today</Text>

        {notifications.slice(0, 3).map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}

        {/* Earlier */}
        <Text style={styles.sectionTitle}>Earlier</Text>

        {notifications.slice(3).map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function NotificationCard({ item }: any) {
  return (
    <TouchableOpacity
      style={[
        styles.notificationCard,
        item.unread && styles.unreadCard,
      ]}
    >
      <View style={styles.iconBox}>
        <Ionicons
          name={item.icon}
          size={22}
          color="#2E7D32"
        />
      </View>

      <View style={styles.notificationContent}>
        <View style={styles.titleRow}>
          <Text style={styles.notificationTitle}>
            {item.title}
          </Text>

          {item.unread && (
            <View style={styles.unreadDot} />
          )}
        </View>

        <Text style={styles.message}>
          {item.message}
        </Text>

        <Text style={styles.time}>
          {item.time}
        </Text>
      </View>
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#18351A',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  markButton: {
    width: 45,
    height: 45,
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 25,
    marginBottom: 12,
  },

  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 18,
    marginBottom: 10,
    elevation: 2,
  },

  unreadCard: {
    backgroundColor: '#F1F8F1',
    borderWidth: 1,
    borderColor: '#D6EED8',
  },

  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationContent: {
    flex: 1,
    marginLeft: 12,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#263B27',
  },

  unreadDot: {
    width: 7,
    height: 7,
    backgroundColor: '#2E7D32',
    borderRadius: 10,
    marginLeft: 7,
  },

  message: {
    fontSize: 12,
    color: '#777',
    lineHeight: 18,
    marginTop: 5,
  },

  time: {
    fontSize: 11,
    color: '#999',
    marginTop: 7,
  },
});