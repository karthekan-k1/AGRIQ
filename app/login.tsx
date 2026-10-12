import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!phone.trim() || !password.trim()) {
      setError('Please enter your mobile number and password.');
      return;
    }

    setError('');
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#18351A" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Ionicons name="leaf" size={35} color="#FFFFFF" />
            </View>

            <Text style={styles.logo}>AGRIQ</Text>
          </View>

          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.subtitle}>
            Login to manage your procurement
          </Text>

          <View style={styles.form}>

            <Text style={styles.label}>Mobile Number</Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="call-outline"
                size={20}
                color="#6E8A70"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter mobile number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <Text style={styles.label}>Password</Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#6E8A70"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login</Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>

          </View>

          <View style={styles.registerRow}>
            <Text style={styles.registerText}>
              Don&apos;t have an account?
            </Text>

            <TouchableOpacity
              onPress={() => router.push('/register')}
            >
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F2',
  },

  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    padding: 25,
    justifyContent: 'center',
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

  logoContainer: {
    alignItems: 'center',
    marginTop: 25,
  },

  logoCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1B5E20',
    letterSpacing: 2,
    marginTop: 8,
  },

  title: {
    fontSize: 29,
    fontWeight: '800',
    color: '#18351A',
    marginTop: 35,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
  },

  form: {
    width: '100%',
    marginTop: 35,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#344A36',
    marginBottom: 8,
    marginTop: 18,
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
    fontSize: 14,
    color: '#222',
    marginLeft: 10,
  },

  forgot: {
    textAlign: 'right',
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 13,
    marginTop: 12,
  },

  errorText: {
    color: '#B00020',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
  },

  loginButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#2E7D32',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    elevation: 4,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 10,
  },

  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  registerText: {
    color: '#777',
    fontSize: 14,
  },

  registerLink: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '700',
  },
});