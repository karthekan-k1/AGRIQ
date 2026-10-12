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

const centres = [
  'Madurai Central Procurement Centre',
  'Thirumangalam Procurement Centre',
  'Melur Procurement Centre',
];

const dates = [
  { day: '05', month: 'SEP', label: 'Today' },
  { day: '06', month: 'SEP', label: 'Tomorrow' },
  { day: '07', month: 'SEP', label: 'Monday' },
  { day: '08', month: 'SEP', label: 'Tuesday' },
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
];

export default function BookingScreen() {
  const router = useRouter();

  const [selectedCentre, setSelectedCentre] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const confirmBooking = () => {
    if (!selectedCentre || !selectedDate || !selectedTime) {
      Alert.alert(
        'Complete Booking',
        'Please select centre, date and time.'
      );
      return;
    }

    router.push({
      pathname: './token',
      params: {
        centre: selectedCentre,
        date: selectedDate,
        time: selectedTime,
      },
    });
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

          <Text style={styles.headerTitle}>Book Slot</Text>

          <View style={{ width: 42 }} />
        </View>

        {/* Progress */}
        <View style={styles.progressContainer}>
          <View style={styles.progressActive} />
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
        </View>

        {/* Centre */}
        <Text style={styles.sectionTitle}>
          Select Procurement Centre
        </Text>

        {centres.map((centre) => {
          const selected = selectedCentre === centre;

          return (
            <TouchableOpacity
              key={centre}
              activeOpacity={0.8}
              style={[
                styles.optionCard,
                selected && styles.selectedCard,
              ]}
              onPress={() => setSelectedCentre(centre)}
            >
              <View
                style={[
                  styles.optionIcon,
                  selected && styles.selectedIcon,
                ]}
              >
                <Ionicons
                  name="location"
                  size={22}
                  color={selected ? '#FFFFFF' : '#2E7D32'}
                />
              </View>

              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>
                  {centre}
                </Text>

                <Text style={styles.optionSubtitle}>
                  Procurement centre
                </Text>
              </View>

              <Ionicons
                name={
                  selected
                    ? 'checkmark-circle'
                    : 'ellipse-outline'
                }
                size={24}
                color={selected ? '#2E7D32' : '#BBBBBB'}
              />
            </TouchableOpacity>
          );
        })}

        {/* Date */}
        <Text style={styles.sectionTitle}>
          Select Date
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateScrollContent}
        >
          {dates.map((date) => {
            const value = `${date.day} ${date.month}`;
            const selected = selectedDate === value;

            return (
              <TouchableOpacity
                key={value}
                activeOpacity={0.8}
                style={[
                  styles.dateCard,
                  selected && styles.selectedDate,
                ]}
                onPress={() => setSelectedDate(value)}
              >
                <Text
                  style={[
                    styles.dateLabel,
                    selected && styles.whiteText,
                  ]}
                >
                  {date.label}
                </Text>

                <Text
                  style={[
                    styles.dateNumber,
                    selected && styles.whiteText,
                  ]}
                >
                  {date.day}
                </Text>

                <Text
                  style={[
                    styles.month,
                    selected && styles.whiteText,
                  ]}
                >
                  {date.month}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Time */}
        <Text style={styles.sectionTitle}>
          Select Time
        </Text>

        <View style={styles.timeGrid}>
          {timeSlots.map((time) => {
            const selected = selectedTime === time;

            return (
              <TouchableOpacity
                key={time}
                activeOpacity={0.8}
                style={[
                  styles.timeCard,
                  selected && styles.selectedTime,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Ionicons
                  name="time-outline"
                  size={18}
                  color={selected ? '#FFFFFF' : '#2E7D32'}
                />

                <Text
                  style={[
                    styles.timeText,
                    selected && styles.whiteText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Summary */}
        {(selectedCentre || selectedDate || selectedTime) && (
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>
              Booking Summary
            </Text>

            <SummaryRow
              icon="location-outline"
              label="Centre"
              value={selectedCentre || 'Not selected'}
            />

            <SummaryRow
              icon="calendar-outline"
              label="Date"
              value={selectedDate || 'Not selected'}
            />

            <SummaryRow
              icon="time-outline"
              label="Time"
              value={selectedTime || 'Not selected'}
            />
          </View>
        )}

        {/* Confirm */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.confirmButton}
          onPress={confirmBooking}
        >
          <Text style={styles.confirmText}>
            Confirm Slot
          </Text>

          <Ionicons
            name="arrow-forward"
            size={21}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.summaryRow}>
      <Ionicons
        name={icon}
        size={19}
        color="#2E7D32"
      />

      <Text style={styles.summaryLabel}>
        {label}
      </Text>

      <Text style={styles.summaryValue}>
        {value}
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  dateScrollContent: {
    paddingRight: 10,
    paddingBottom: 4,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    fontSize: 21,
    fontWeight: '800',
    color: '#18351A',
  },

  progressContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 25,
  },

  progressActive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#2E7D32',
  },

  progressInactive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#D7E2D7',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 20,
    marginBottom: 13,
  },

  optionCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  selectedCard: {
    borderColor: '#2E7D32',
    backgroundColor: '#F1F8F1',
  },

  optionIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedIcon: {
    backgroundColor: '#2E7D32',
  },

  optionContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  optionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#263B27',
  },

  optionSubtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: 3,
  },

  dateCard: {
    width: 78,
    height: 92,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  selectedDate: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },

  dateLabel: {
    fontSize: 11,
    color: '#777',
  },

  dateNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#263B27',
    marginVertical: 3,
  },

  month: {
    fontSize: 10,
    color: '#888',
    fontWeight: '600',
  },

  whiteText: {
    color: '#FFFFFF',
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  timeCard: {
    width: '48%',
    minWidth: 140,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  selectedTime: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },

  timeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#263B27',
    marginLeft: 7,
  },

  summaryCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginTop: 20,
    elevation: 2,
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#18351A',
    marginBottom: 12,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  summaryLabel: {
    fontSize: 12,
    color: '#888',
    width: 65,
    marginLeft: 8,
  },

  summaryValue: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#263B27',
    textAlign: 'right',
    marginLeft: 8,
  },

  confirmButton: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    elevation: 4,
  },

  confirmText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 10,
  },
});