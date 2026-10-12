import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Centre {
  id: number;
  name: string;
  location: string;
}

export default function CentresScreen() {

  const router = useRouter();

  const [centreName, setCentreName] = useState('');
  const [location, setLocation] = useState('');

  const [centres, setCentres] = useState<Centre[]>([
    {
      id: 1,
      name: 'Madurai Central Centre',
      location: 'Madurai',
    },
    {
      id: 2,
      name: 'Melur Procurement Centre',
      location: 'Melur',
    },
    {
      id: 3,
      name: 'Thirumangalam Centre',
      location: 'Thirumangalam',
    },
  ]);

  const addCentre = () => {

    if (!centreName || !location) {

      Alert.alert(
        'Missing Information',
        'Please enter centre name and location.'
      );

      return;
    }

    const newCentre = {
      id: Date.now(),
      name: centreName,
      location: location,
    };

    setCentres([...centres, newCentre]);

    setCentreName('');
    setLocation('');

    Alert.alert(
      'Success',
      'Procurement centre added successfully.'
    );
  };

  const deleteCentre = (id: number) => {

    Alert.alert(
      'Delete Centre',
      'Are you sure you want to delete this centre?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setCentres(
              centres.filter(
                (centre) => centre.id !== id
              )
            );
          },
        },
      ]
    );
  };

  return (

    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Header */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={23}
              color="#18351A"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Manage Centres
          </Text>

          <View style={{ width: 42 }} />

        </View>


        {/* Add Centre */}

        <View style={styles.addCard}>

          <Text style={styles.cardTitle}>
            Add New Centre
          </Text>

          <View style={styles.inputContainer}>

            <Ionicons
              name="business-outline"
              size={20}
              color="#2E7D32"
            />

            <TextInput
              placeholder="Centre Name"
              value={centreName}
              onChangeText={setCentreName}
              style={styles.input}
            />

          </View>


          <View style={styles.inputContainer}>

            <Ionicons
              name="location-outline"
              size={20}
              color="#2E7D32"
            />

            <TextInput
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
              style={styles.input}
            />

          </View>


          <TouchableOpacity
            style={styles.addButton}
            onPress={addCentre}
          >

            <Ionicons
              name="add"
              size={22}
              color="#FFFFFF"
            />

            <Text style={styles.addButtonText}>
              Add Centre
            </Text>

          </TouchableOpacity>

        </View>


        {/* Centre List */}

        <View style={styles.listHeader}>

          <Text style={styles.sectionTitle}>
            Procurement Centres
          </Text>

          <Text style={styles.count}>
            {centres.length}
          </Text>

        </View>


        {centres.map((centre) => (

          <View
            key={centre.id}
            style={styles.centreCard}
          >

            <View style={styles.centreIcon}>

              <Ionicons
                name="business"
                size={23}
                color="#2E7D32"
              />

            </View>


            <View style={styles.centreInfo}>

              <Text style={styles.centreName}>
                {centre.name}
              </Text>

              <View style={styles.locationRow}>

                <Ionicons
                  name="location-outline"
                  size={14}
                  color="#888"
                />

                <Text style={styles.location}>
                  {centre.location}
                </Text>

              </View>

            </View>


            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                deleteCentre(centre.id)
              }
            >

              <Ionicons
                name="trash-outline"
                size={21}
                color="#E53935"
              />

            </TouchableOpacity>

          </View>

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
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#18351A',
  },

  addCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginBottom: 16,
  },

  inputContainer: {
    height: 52,
    backgroundColor: '#F7F9F2',
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#263B27',
  },

  addButton: {
    height: 52,
    backgroundColor: '#2E7D32',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 7,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#18351A',
  },

  count: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    fontWeight: '700',
  },

  centreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },

  centreIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centreInfo: {
    flex: 1,
    marginLeft: 12,
  },

  centreName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263B27',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  location: {
    fontSize: 11,
    color: '#888',
    marginLeft: 4,
  },

  deleteButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },

});