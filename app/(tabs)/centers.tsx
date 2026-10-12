import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const centres = [
  {
    name: 'Madurai Central Procurement Centre',
    location: 'Madurai',
    distance: '3.2 km',
    status: 'Open',
  },
  {
    name: 'Thirumangalam Procurement Centre',
    location: 'Thirumangalam',
    distance: '8.5 km',
    status: 'Open',
  },
  {
    name: 'Melur Procurement Centre',
    location: 'Melur',
    distance: '12.4 km',
    status: 'Open',
  },
];

export default function CentresScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>
          Procurement Centres
        </Text>

        <Text style={styles.subtitle}>
          Find a centre near you
        </Text>

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#777"
          />

          <Text style={styles.searchText}>
            Search centre or location
          </Text>
        </View>

        {centres.map((centre, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
          >
            <View style={styles.icon}>
              <Ionicons
                name="location"
                size={25}
                color="#2E7D32"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>
                {centre.name}
              </Text>

              <Text style={styles.location}>
                {centre.location}
              </Text>

              <View style={styles.row}>
                <Text style={styles.distance}>
                  {centre.distance}
                </Text>

                <View style={styles.openBadge}>
                  <Text style={styles.openText}>
                    {centre.status}
                  </Text>
                </View>
              </View>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        ))}

      </ScrollView>
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
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#18351A',
  },

  subtitle: {
    color: '#777',
    marginTop: 6,
    marginBottom: 20,
  },

  searchBox: {
    height: 52,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 18,
    elevation: 1,
  },

  searchText: {
    color: '#999',
    marginLeft: 10,
    fontSize: 14,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    flex: 1,
    marginLeft: 13,
    marginRight: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263B27',
    lineHeight: 20,
  },

  location: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  distance: {
    fontSize: 11,
    color: '#666',
  },

  openBadge: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 10,
  },

  openText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2E7D32',
  },
});