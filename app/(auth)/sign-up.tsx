import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { FlipInEasyX } from 'react-native-reanimated';
import { router } from 'expo-router';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from '@/context/GlobalProvider';
const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in the fields');
    }

    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);

      router.replace('/resource');
    } catch (error) {
      Alert.alert('Error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              style={{
                width: 200,
              }}
              source={require('../../assets/images/logokrishi.png')}
            />
            <Text style={{ marginTop: 40 }}>
              Sign Up to Krishi Learning App
            </Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyle={{ marginTop: 15 }}
              keyboardType="email-address"
              placeholder={'Enter your email'}
            />

            <FormField
              title="Username"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyle={{ marginTop: 15 }}
              placeholder={'Enter your email'}
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyle={{ marginTop: 7 }}
              placeholder={'Enter your password'}
            />
            <CustomButton
              title={'Sign Up'}
              tbx={{
                marginTop: 20,
                width: 240,
                height: 40,
                borderRadius: 4,
              }}
              cbx={{
                color: 'white',

                lineHeight: 22,
              }}
              handlePress={submit}
              isLoading={isSubmitting}
            />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text
                style={{
                  fontFamily: 'Space-Mono',
                  marginRight: 5,
                }}
              >
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => router.push('./sign-in')}
                style={{ width: 60, height: 30 }}
              >
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Space-Mono',
                    color: 'green',
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
