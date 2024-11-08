import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      router.replace('/resource');
    } catch (error) {
      Alert.alert('Error', error.message || 'Sign-in failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/logokrishi.png')}
            style={{ width: 200, resizeMode: 'contain' }}
          />
          <Text style={{ marginTop: 40 }}>Sign In to Krishi Learning App</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            placeholder="Enter your email"
            otherStyle={{ marginTop: 15 }}
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter your password"
            otherStyle={{ marginTop: 7 }}
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
            tbx={{ marginTop: 20, width: 240, height: 40, borderRadius: 4 }}
            cbx={{ color: 'white', lineHeight: 22 }}
          />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Space-Mono', marginRight: 5 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('/sign-up')}>
              <Text
                style={{
                  fontWeight: '400',
                  fontFamily: 'Space-Mono',
                  color: 'green',
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
