import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: 'grey',
          height: 54,
        },
      }}
    >
      <Tabs.Screen
        name="resource"
        options={{
          title: 'Resource',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                tintColor: focused ? '#11823B' : '#B1B1B1',
                width: focused ? 28 : 24,
                height: focused ? 28 : 24,
              }}
              source={require('../../assets/images/resource.png')}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? '#11823B' : '#B1B1B1',
              }}
            >
              Resource
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                tintColor: focused ? '#11823B' : '#B1B1B1',
                width: focused ? 28 : 22,
                height: focused ? 28 : 22,
              }}
              source={require('../../assets/images/progress.png')}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? '#11823B' : '#B1B1B1',
              }}
            >
              Progress
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                tintColor: focused ? '#11823B' : '#B1B1B1',
                width: focused ? 28 : 24,
                height: focused ? 28 : 24,
              }}
              source={require('../../assets/images/settings.png')}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? '#11823B' : '#B1B1B1',
              }}
            >
              Settings
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
