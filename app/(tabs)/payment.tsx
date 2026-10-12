import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>Payments</Text>

        <Text style={styles.subtitle}>
          Track your procurement payments
        </Text>

        {/* Balance */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>
            Total Payment
          </Text>

          <Text style={styles.balance}>
            ₹ 24,500
          </Text>

          <View style={styles.paymentStatus}>
            <Ionicons
              name="checkmark-circle"
              size={17}
              color="#FFFFFF"
            />

            <Text style={styles.paymentStatusText}>
              Payment Processed
            </Text>
          </View>
        </View>

        {/* Payment Details */}
        <Text style={styles.sectionTitle}>
          Latest Payment
        </Text>

        <View style={styles.paymentCard}>

          <PaymentRow
            icon="cube-outline"
            title="Produce"
            value="Paddy"
          />

          <Divider />

          <PaymentRow
            icon="scale-outline"
            title="Quantity"
            value="500 KG"
          />

          <Divider />

          <PaymentRow
            icon="cash-outline"
            title="Rate"
            value="₹49 / KG"
          />

          <Divider />

          <PaymentRow
            icon="calendar-outline"
            title="Date"
            value="05 Sep 2026"
          />

        </View>

        {/* Payment History */}
        <Text style={styles.sectionTitle}>
          Payment History
        </Text>

        <PaymentHistory
          produce="Paddy"
          amount="₹24,500"
          date="05 Sep 2026"
          status="Completed"
        />

        <PaymentHistory
          produce="Rice"
          amount="₹18,200"
          date="20 Aug 2026"
          status="Completed"
        />

        <PaymentHistory
          produce="Maize"
          amount="₹12,500"
          date="10 Aug 2026"
          status="Completed"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

function PaymentRow({
  icon,
  title,
  value,
}: any) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Ionicons
          name={icon}
          size={20}
          color="#2E7D32"
        />
      </View>

      <Text style={styles.rowTitle}>
        {title}
      </Text>

      <Text style={styles.rowValue}>
        {value}
      </Text>
    </View>
  );
}

function PaymentHistory({
  produce,
  amount,
  date,
  status,
}: any) {
  return (
    <TouchableOpacity style={styles.historyCard}>
      <View style={styles.historyIcon}>
        <Ionicons
          name="wallet-outline"
          size={23}
          color="#2E7D32"
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.historyProduce}>
          {produce}
        </Text>

        <Text style={styles.historyDate}>
          {date}
        </Text>
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.historyAmount}>
          {amount}
        </Text>

        <Text style={styles.completed}>
          {status}
        </Text>
      </View>
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

  balanceCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 22,
    padding: 22,
    marginTop: 22,
  },

  balanceLabel: {
    color: '#DCEEDD',
    fontSize: 13,
  },

  balance: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 6,
  },

  paymentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  paymentStatusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 25,
    marginBottom: 12,
  },

  paymentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
    elevation: 2,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },

  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  rowTitle: {
    flex: 1,
    fontSize: 13,
    color: '#777',
  },

  rowValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#263B27',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },

  historyIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  historyProduce: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263B27',
  },

  historyDate: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },

  historyAmount: {
    fontSize: 14,
    fontWeight: '800',
    color: '#18351A',
  },

  completed: {
    fontSize: 10,
    color: '#2E7D32',
    marginTop: 4,
  },
});