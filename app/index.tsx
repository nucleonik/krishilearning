import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/images/logokrishi.png')} />
          <CustomButton
            tbx={{ marginTop: 30, borderRadius: 4 }}
            cbx={{
              marginTop: 10,
              marginBottom: 12,
              marginLeft: 25,
              marginRight: 25,
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center',
            }}
            handlePress={() => router.push('/sign-in')}
            title={'Tap To Continue'}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="green" style="light" />
    </SafeAreaView>
  );
};

export default Index;
