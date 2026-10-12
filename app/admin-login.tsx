import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AdminLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter your admin email and password.');
      return;
    }

    setError('');
    router.replace('/(admin)/dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
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
              <Ionicons name="shield-checkmark" size={35} color="#FFFFFF" />
            </View>
            <Text style={styles.logo}>AGRIQ</Text>
          </View>

          <Text style={styles.title}>Admin Login</Text>
          <Text style={styles.subtitle}>Sign in to manage centres and queues</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Admin Email</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#6E8A70" />
              <TextInput
                style={styles.input}
                placeholder="Enter admin email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#6E8A70" />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login to Admin</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.farmerLink}
            onPress={() => router.replace('/login')}
          >
            <Text style={styles.farmerLinkText}>Farmer login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, backgroundColor: '#F7F9F2' },
  content: { flexGrow: 1, width: '100%', maxWidth: 480, alignSelf: 'center', padding: 25, justifyContent: 'center' },
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
  logoContainer: { alignItems: 'center', marginTop: 25 },
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
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', marginTop: 8 },
  form: { width: '100%', marginTop: 35 },
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
  input: { flex: 1, fontSize: 14, color: '#222', marginLeft: 10 },
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
    marginTop: 30,
    elevation: 4,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 10,
  },
  farmerLink: { alignItems: 'center', marginTop: 30 },
  farmerLinkText: { color: '#2E7D32', fontSize: 14, fontWeight: '700' },
});
