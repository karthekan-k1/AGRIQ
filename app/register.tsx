import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#18351A" />
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Register as an AGRIQ farmer
        </Text>

        <View style={styles.form}>

          <Text style={styles.label}>Full Name</Text>
          <Input
            icon="person-outline"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Mobile Number</Text>
          <Input
            icon="call-outline"
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Village</Text>
          <Input
            icon="location-outline"
            placeholder="Enter your village"
            value={village}
            onChangeText={setVillage}
          />

          <Text style={styles.label}>Password</Text>
          <Input
            icon="lock-closed-outline"
            placeholder="Create password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace('/login')}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}> Login</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function Input({
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}: any) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={icon} size={20} color="#6E8A70" />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
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
    padding: 25,
    paddingBottom: 40,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    elevation: 2,
  },

  title: {
    fontSize: 29,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 35,
    textAlign: 'center',
    alignSelf: 'center',
  },

  subtitle: {
    color: '#777',
    fontSize: 14,
    marginTop: 7,
    textAlign: 'center',
    alignSelf: 'center',
  },

  form: {
    width: '100%',
    marginTop: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#344A36',
    marginBottom: 8,
    marginTop: 17,
  },

  inputContainer: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 1,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#222',
  },

  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#2E7D32',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },

  loginText: {
    color: '#777',
  },

  loginLink: {
    color: '#2E7D32',
    fontWeight: '700',
  },
});