import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ProduceItem = {
  id: number;
  name: string;
  price: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const produceList: ProduceItem[] = [
  {
    id: 1,
    name: 'Paddy',
    price: '₹49 / KG',
    icon: 'leaf-outline',
  },
  {
    id: 2,
    name: 'Rice',
    price: '₹52 / KG',
    icon: 'nutrition-outline',
  },
  {
    id: 3,
    name: 'Maize',
    price: '₹36 / KG',
    icon: 'leaf-outline',
  },
  {
    id: 4,
    name: 'Wheat',
    price: '₹42 / KG',
    icon: 'leaf-outline',
  },
];

export default function ProduceScreen() {
  const [selectedProduce, setSelectedProduce] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>
          My Produce
        </Text>

        <Text style={styles.subtitle}>
          Select the produce for procurement
        </Text>

        {/* Information Banner */}

        <View style={styles.infoBanner}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#2E7D32"
            />
          </View>

          <Text style={styles.infoText}>
            Select your crop to view procurement price and details.
          </Text>
        </View>

        {/* Produce */}

        <Text style={styles.sectionTitle}>
          Available Produce
        </Text>

        <View style={styles.grid}>
          {produceList.map((item) => {
            const selected =
              selectedProduce === item.name;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.produceCard,
                  selected && styles.selectedCard,
                ]}
                onPress={() =>
                  setSelectedProduce(item.name)
                }
              >

                <View
                  style={[
                    styles.produceIcon,
                    selected && styles.selectedIcon,
                  ]}
                >
                  <Ionicons
                    name={item.icon}
                    size={28}
                    color={
                      selected
                        ? '#FFFFFF'
                        : '#2E7D32'
                    }
                  />
                </View>

                <Text style={styles.produceName}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  {item.price}
                </Text>

                {selected && (
                  <View style={styles.selectedBadge}>
                    <Ionicons
                      name="checkmark"
                      size={13}
                      color="#FFFFFF"
                    />
                  </View>
                )}

              </TouchableOpacity>
            );
          })}
        </View>

        {/* Selected Produce */}

        {selectedProduce !== '' && (

          <View style={styles.selectedInfo}>

            <View style={styles.selectedHeader}>

              <View>
                <Text style={styles.selectedTitle}>
                  Selected Produce
                </Text>

                <Text style={styles.selectedName}>
                  {selectedProduce}
                </Text>
              </View>

              <Ionicons
                name="checkmark-circle"
                size={30}
                color="#2E7D32"
              />

            </View>

            <View style={styles.detailRow}>

              <View style={styles.detailBox}>

                <Text style={styles.detailLabel}>
                  Minimum Quantity
                </Text>

                <Text style={styles.detailValue}>
                  100 KG
                </Text>

              </View>

              <View style={styles.detailBox}>

                <Text style={styles.detailLabel}>
                  Quality
                </Text>

                <Text style={styles.detailValue}>
                  Standard
                </Text>

              </View>

            </View>

          </View>

        )}

        {/* Add Produce */}

        <TouchableOpacity style={styles.addButton}>

          <Ionicons
            name="add-circle-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.addText}>
            Add Produce
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
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

  infoBanner: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 17,
    marginTop: 22,
    alignItems: 'center',
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#356139',
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 25,
    marginBottom: 13,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  produceCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 13,
    elevation: 2,
    position: 'relative',
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: '#2E7D32',
    backgroundColor: '#F1F8F1',
  },

  produceIcon: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedIcon: {
    backgroundColor: '#2E7D32',
  },

  produceName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263B27',
    marginTop: 13,
  },

  price: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '700',
    marginTop: 5,
  },

  selectedBadge: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#2E7D32',
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginTop: 12,
    elevation: 2,
  },

  selectedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectedTitle: {
    fontSize: 12,
    color: '#888',
  },

  selectedName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 4,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  detailBox: {
    width: '48%',
    backgroundColor: '#F7F9F2',
    padding: 14,
    borderRadius: 14,
  },

  detailLabel: {
    fontSize: 10,
    color: '#888',
  },

  detailValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263B27',
    marginTop: 5,
  },

  addButton: {
    height: 55,
    backgroundColor: '#2E7D32',
    borderRadius: 16,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 8,
  },

});