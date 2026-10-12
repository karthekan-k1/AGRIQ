import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


interface Farmer {

  id: number;

  name: string;

  token: string;

  status: 'Waiting' | 'Processing' | 'Completed';

}


export default function QueueScreen() {

  const router = useRouter();


  const [farmers, setFarmers] =
    useState<Farmer[]>([

      {
        id: 1,
        name: 'Ramesh Kumar',
        token: 'AQR-001',
        status: 'Processing',
      },

      {
        id: 2,
        name: 'Suresh',
        token: 'AQR-002',
        status: 'Waiting',
      },

      {
        id: 3,
        name: 'Murugan',
        token: 'AQR-003',
        status: 'Waiting',
      },

      {
        id: 4,
        name: 'Karthik',
        token: 'AQR-004',
        status: 'Waiting',
      },

    ]);


  const updateStatus = (
    id: number,
    status:
      | 'Waiting'
      | 'Processing'
      | 'Completed'
  ) => {

    setFarmers(

      farmers.map((farmer) =>

        farmer.id === id

          ? {
              ...farmer,
              status,
            }

          : farmer

      )

    );

  };


  const deleteFarmer = (id: number) => {

    Alert.alert(

      'Remove Farmer',

      'Remove this farmer from queue?',

      [

        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Remove',

          style: 'destructive',

          onPress: () => {

            setFarmers(

              farmers.filter(

                farmer =>
                  farmer.id !== id

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
            Queue Management
          </Text>


          <View style={{ width: 42 }} />

        </View>


        {/* Queue Stats */}

        <View style={styles.statsContainer}>


          <QueueStat
            title="Waiting"
            value={
              farmers.filter(
                f =>
                  f.status === 'Waiting'
              ).length
            }
            icon="time-outline"
          />


          <QueueStat
            title="Processing"
            value={
              farmers.filter(
                f =>
                  f.status === 'Processing'
              ).length
            }
            icon="sync-outline"
          />


          <QueueStat
            title="Completed"
            value={
              farmers.filter(
                f =>
                  f.status === 'Completed'
              ).length
            }
            icon="checkmark-circle-outline"
          />


        </View>


        <Text style={styles.sectionTitle}>
          Farmer Queue
        </Text>


        {farmers.map(
          (farmer, index) => (

            <View
              key={farmer.id}
              style={styles.farmerCard}
            >

              {/* Queue Number */}

              <View style={styles.queueNumber}>

                <Text style={styles.queueText}>
                  {index + 1}
                </Text>

              </View>


              {/* Farmer */}

              <View style={styles.farmerInfo}>

                <Text style={styles.farmerName}>
                  {farmer.name}
                </Text>


                <Text style={styles.token}>
                  Token: {farmer.token}
                </Text>


                <View
                  style={[
                    styles.statusBadge,

                    farmer.status ===
                      'Processing' &&
                      styles.processing,

                    farmer.status ===
                      'Completed' &&
                      styles.completed,

                  ]}
                >

                  <Text
                    style={styles.statusText}
                  >
                    {farmer.status}
                  </Text>

                </View>

              </View>


              {/* Actions */}

              <View
                style={styles.actions}
              >

                {farmer.status ===
                  'Waiting' && (

                  <TouchableOpacity
                    style={
                      styles.processButton
                    }

                    onPress={() =>

                      updateStatus(
                        farmer.id,
                        'Processing'
                      )

                    }
                  >

                    <Ionicons
                      name="play"
                      size={17}
                      color="#FFFFFF"
                    />

                  </TouchableOpacity>

                )}


                {farmer.status ===
                  'Processing' && (

                  <TouchableOpacity
                    style={
                      styles.completeButton
                    }

                    onPress={() =>

                      updateStatus(
                        farmer.id,
                        'Completed'
                      )

                    }
                  >

                    <Ionicons
                      name="checkmark"
                      size={18}
                      color="#FFFFFF"
                    />

                  </TouchableOpacity>

                )}


                <TouchableOpacity
                  style={
                    styles.deleteButton
                  }

                  onPress={() =>
                    deleteFarmer(
                      farmer.id
                    )
                  }
                >

                  <Ionicons
                    name="trash-outline"
                    size={18}
                    color="#E53935"
                  />

                </TouchableOpacity>

              </View>

            </View>

          )

        )}


      </ScrollView>

    </View>

  );

}


function QueueStat({

  title,
  value,
  icon,

}: {

  title: string;

  value: number;

  icon:
    keyof typeof Ionicons.glyphMap;

}) {

  return (

    <View style={styles.statCard}>

      <Ionicons
        name={icon}
        size={21}
        color="#2E7D32"
      />

      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statTitle}>
        {title}
      </Text>

    </View>

  );

}


const styles =
  StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor:
        '#F7F9F2',

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

      justifyContent:
        'space-between',

      marginBottom: 25,

    },


    backButton: {

      width: 42,

      height: 42,

      borderRadius: 13,

      backgroundColor:
        '#FFFFFF',

      justifyContent:
        'center',

      alignItems: 'center',

      elevation: 2,

    },


    headerTitle: {

      fontSize: 20,

      fontWeight: '800',

      color: '#18351A',

    },


    statsContainer: {

      flexDirection: 'row',

      justifyContent:
        'space-between',

      marginBottom: 25,

    },


    statCard: {

      width: '31%',

      backgroundColor:
        '#FFFFFF',

      borderRadius: 16,

      paddingVertical: 14,

      alignItems: 'center',

      elevation: 2,

    },


    statValue: {

      fontSize: 22,

      fontWeight: '800',

      color: '#18351A',

      marginTop: 6,

    },


    statTitle: {

      fontSize: 10,

      color: '#777',

      marginTop: 3,

    },


    sectionTitle: {

      fontSize: 20,

      fontWeight: '800',

      color: '#18351A',

      marginBottom: 14,

    },


    farmerCard: {

      backgroundColor:
        '#FFFFFF',

      borderRadius: 18,

      padding: 14,

      flexDirection: 'row',

      alignItems: 'center',

      marginBottom: 12,

      elevation: 2,

    },


    queueNumber: {

      width: 42,

      height: 42,

      borderRadius: 13,

      backgroundColor:
        '#E8F5E9',

      justifyContent:
        'center',

      alignItems: 'center',

    },


    queueText: {

      fontSize: 17,

      fontWeight: '800',

      color: '#2E7D32',

    },


    farmerInfo: {

      flex: 1,

      marginLeft: 12,

    },


    farmerName: {

      fontSize: 14,

      fontWeight: '700',

      color: '#263B27',

    },


    token: {

      fontSize: 11,

      color: '#888',

      marginTop: 3,

    },


    statusBadge: {

      alignSelf: 'flex-start',

      paddingHorizontal: 8,

      paddingVertical: 3,

      borderRadius: 10,

      backgroundColor:
        '#FFF3E0',

      marginTop: 6,

    },


    processing: {

      backgroundColor:
        '#FFF3E0',

    },


    completed: {

      backgroundColor:
        '#E8F5E9',

    },


    statusText: {

      fontSize: 10,

      fontWeight: '700',

      color: '#666',

    },


    actions: {

      gap: 7,

    },


    processButton: {

      width: 36,

      height: 36,

      borderRadius: 10,

      backgroundColor:
        '#2E7D32',

      justifyContent:
        'center',

      alignItems: 'center',

    },


    completeButton: {

      width: 36,

      height: 36,

      borderRadius: 10,

      backgroundColor:
        '#2E7D32',

      justifyContent:
        'center',

      alignItems: 'center',

    },


    deleteButton: {

      width: 36,

      height: 36,

      borderRadius: 10,

      backgroundColor:
        '#FFEBEE',

      justifyContent:
        'center',

      alignItems: 'center',

    },

  });