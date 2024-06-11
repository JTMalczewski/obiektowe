import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BasketContext, BasketContextType } from '@/hooks/useContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [basket, setBasket] = useState<{ Apple: number; Orange: number; Banana: number; Carrot: number; Potato: number; Tomato: number; Shirt: number; Jacked: number; Hat: number }>({ Apple: 0, Orange: 0, Banana: 0, Carrot: 0, Potato: 0, Tomato: 0, Shirt: 0, Jacked: 0, Hat: 0 });
  return (
    <BasketContext.Provider value={{basket, setBasket}}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </BasketContext.Provider>
  );
}
