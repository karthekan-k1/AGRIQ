import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

const menuItems: {
  label: string;
  route: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
}[] = [
  { label: 'Home', route: '/(tabs)/home', icon: 'home-outline' },
  { label: 'Procurement Centres', route: '/(tabs)/centers', icon: 'location-outline' },
  { label: 'Book a Slot', route: '/(tabs)/booking', icon: 'calendar-outline' },
  { label: 'My Produce', route: '/(tabs)/produce', icon: 'leaf-outline' },
  { label: 'My Token', route: '/(tabs)/token', icon: 'ticket-outline' },
  { label: 'Current Status', route: '/(tabs)/status', icon: 'pulse-outline' },
  { label: 'Booking History', route: '/(tabs)/history', icon: 'time-outline' },
  { label: 'Payments', route: '/(tabs)/payment', icon: 'card-outline' },
  { label: 'Notifications', route: '/(tabs)/notification', icon: 'notifications-outline' },
  { label: 'Support', route: '/(tabs)/support', icon: 'headset-outline' },
  { label: 'About AGRIQ', route: '/(tabs)/about', icon: 'information-circle-outline' },
  { label: 'Profile', route: '/(tabs)/profile', icon: 'person-outline' },
];

export default function TabLayout() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenuItem = (route: string) => {
    setMenuVisible(false);
    router.push(route as never);
  };

  return (
    <View style={styles.root}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: '#8A948A',
          tabBarStyle: {
            position: 'absolute',
            left: 14,
            right: 14,
            bottom: 14,
            height: 74,
            paddingBottom: 9,
            paddingTop: 8,
            paddingHorizontal: 8,
            borderTopWidth: 0,
            borderRadius: 24,
            backgroundColor: COLORS.white,
            elevation: 12,
            shadowColor: '#18351A',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.14,
            shadowRadius: 14,
          },
          tabBarItemStyle: {
            minWidth: 56,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="centers"
          options={{
            title: 'Centres',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="booking"
          options={{
            title: 'Book',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name="add"
                size={focused ? 30 : 28}
                color={COLORS.white}
                style={{
                  width: 54,
                  height: 54,
                  paddingTop: focused ? 11 : 12,
                  marginTop: -25,
                  textAlign: 'center',
                  borderRadius: 27,
                  backgroundColor: focused ? COLORS.primaryDark : COLORS.primary,
                  shadowColor: COLORS.primaryDark,
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.28,
                  shadowRadius: 7,
                  elevation: 7,
                }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen name="about" options={{ href: null }} />

        <Tabs.Screen name="notification" options={{ href: null }} />
        <Tabs.Screen name="payment" options={{ href: null }} />
        <Tabs.Screen name="produce" options={{ href: null }} />
        <Tabs.Screen name="status" options={{ href: null }} />
        <Tabs.Screen name="support" options={{ href: null }} />
        <Tabs.Screen name="token" options={{ href: null }} />
      </Tabs>

      <Pressable
        accessibilityLabel="Open navigation menu"
        accessibilityRole="button"
        onPress={() => setMenuVisible(true)}
        style={styles.menuButton}
      >
        <Ionicons name="menu-outline" size={25} color={COLORS.primaryDark} />
      </Pressable>

      <Modal
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
        transparent
        visible={menuVisible}
      >
        <View style={styles.modalRoot}>
          <SafeAreaView style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <View>
                <Text style={styles.drawerEyebrow}>FARMER SERVICES</Text>
                <Text style={styles.drawerTitle}>AGRIQ</Text>
              </View>
              <Pressable
                accessibilityLabel="Close navigation menu"
                accessibilityRole="button"
                onPress={() => setMenuVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={22} color={COLORS.primaryDark} />
              </Pressable>
            </View>

            <View style={styles.menuList}>
              {menuItems.map((item) => (
                <Pressable
                  accessibilityRole="button"
                  key={item.route}
                  onPress={() => openMenuItem(item.route)}
                  style={({ pressed }) => [
                    styles.menuItem,
                    pressed && styles.menuItemPressed,
                  ]}
                >
                  <View style={styles.menuIcon}>
                    <Ionicons name={item.icon} size={20} color={COLORS.primary} />
                  </View>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  <Ionicons name="chevron-forward" size={17} color="#A0ADA0" />
                </Pressable>
              ))}
            </View>
          </SafeAreaView>

          <Pressable
            accessibilityLabel="Close navigation menu"
            accessibilityRole="button"
            onPress={() => setMenuVisible(false)}
            style={styles.backdrop}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  menuButton: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 22,
    elevation: 6,
    height: 44,
    justifyContent: 'center',
    left: 18,
    position: 'absolute',
    shadowColor: COLORS.primaryDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 7,
    top: 18,
    width: 44,
    zIndex: 10,
  },
  modalRoot: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    backgroundColor: 'rgba(16, 44, 21, 0.42)',
    flex: 1,
  },
  drawer: {
    backgroundColor: COLORS.background,
    elevation: 18,
    maxWidth: 340,
    paddingHorizontal: 18,
    shadowColor: '#18351A',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    width: '84%',
  },
  drawerHeader: {
    alignItems: 'center',
    borderBottomColor: '#DDE8D9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 18,
    paddingTop: 18,
  },
  drawerEyebrow: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  drawerTitle: {
    color: COLORS.primaryDark,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 2,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    borderRadius: 19,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  menuList: {
    paddingTop: 12,
  },
  menuItem: {
    alignItems: 'center',
    borderRadius: 14,
    flexDirection: 'row',
    minHeight: 49,
    paddingHorizontal: 8,
  },
  menuItemPressed: {
    backgroundColor: COLORS.primaryLight,
  },
  menuIcon: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    height: 36,
    justifyContent: 'center',
    marginRight: 12,
    width: 36,
  },
  menuLabel: {
    color: COLORS.text,
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
});