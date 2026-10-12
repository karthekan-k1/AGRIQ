import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SupportScreen() {

  const callSupport = () => {
    Linking.openURL('tel:1800123456');
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Header */}

        <Text style={styles.title}>
          Help & Support
        </Text>

        <Text style={styles.subtitle}>
          We&apos;re here to help you
        </Text>


        {/* Support Banner */}

        <View style={styles.supportBanner}>

          <View style={styles.supportIcon}>
            <Ionicons
              name="headset-outline"
              size={38}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.supportTitle}>
            Need Help?
          </Text>

          <Text style={styles.supportText}>
            Contact our support team for assistance with booking,
            procurement and payments.
          </Text>

          <TouchableOpacity
            style={styles.callButton}
            onPress={callSupport}
          >

            <Ionicons
              name="call-outline"
              size={20}
              color="#2E7D32"
            />

            <Text style={styles.callText}>
              Call Support
            </Text>

          </TouchableOpacity>

        </View>


        {/* Quick Help */}

        <Text style={styles.sectionTitle}>
          Quick Help
        </Text>


        <SupportItem
          icon="calendar-outline"
          title="Slot Booking"
          subtitle="Help with booking procurement slots"
        />

        <SupportItem
          icon="people-outline"
          title="Queue Status"
          subtitle="Track your queue position"
        />

        <SupportItem
          icon="cube-outline"
          title="Procurement"
          subtitle="Information about procurement process"
        />

        <SupportItem
          icon="wallet-outline"
          title="Payment Issues"
          subtitle="Payment and transaction support"
        />


        {/* FAQ */}

        <Text style={styles.sectionTitle}>
          Frequently Asked Questions
        </Text>

        <FAQ
          question="How do I book a procurement slot?"
        />

        <FAQ
          question="How is my token number generated?"
        />

        <FAQ
          question="How can I track my payment?"
        />

        <FAQ
          question="Can I cancel my booking?"
        />


        {/* Contact */}

        <View style={styles.contactCard}>

          <Ionicons
            name="mail-outline"
            size={25}
            color="#2E7D32"
          />

          <View style={{ marginLeft: 12 }}>

            <Text style={styles.contactTitle}>
              Email Support
            </Text>

            <Text style={styles.contactText}>
              support@agriq.in
            </Text>

          </View>

        </View>


      </ScrollView>

    </SafeAreaView>
  );
}


function SupportItem({
  icon,
  title,
  subtitle,
}: any) {

  return (

    <TouchableOpacity style={styles.supportItem}>

      <View style={styles.itemIcon}>

        <Ionicons
          name={icon}
          size={22}
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


function FAQ({
  question,
}: any) {

  return (

    <TouchableOpacity style={styles.faqCard}>

      <Text style={styles.faqText}>
        {question}
      </Text>

      <Ionicons
        name="chevron-down-outline"
        size={20}
        color="#2E7D32"
      />

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

  supportBanner: {
    backgroundColor: '#2E7D32',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginTop: 22,
  },

  supportIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#256628',
    justifyContent: 'center',
    alignItems: 'center',
  },

  supportTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 13,
  },

  supportText: {
    color: '#DCEEDD',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 8,
  },

  callButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  callText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 7,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 27,
    marginBottom: 12,
  },

  supportItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },

  itemIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
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

  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  faqText: {
    fontSize: 13,
    color: '#263B27',
    fontWeight: '600',
  },

  contactCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 17,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },

  contactTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#263B27',
  },

  contactText: {
    fontSize: 11,
    color: '#2E7D32',
    marginTop: 3,
  },

});