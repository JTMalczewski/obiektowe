import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, } from 'react-native';
import { useState, useContext } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native';
import { useBasketContext, BasketContext } from '@/hooks/useContext';

export default function TabTwoScreen() {

  interface BasketContextProps {
    basket: {
      Apple: number;
      Orange: number;
      Banana: number;
      Carrot: number;
      Potato: number;
      Tomato: number;
      Shirt: number;
      Jacked: number;
      Hat: number;
    },
    setBasket: (b: { Apple: number; Orange: number; Banana: number; Carrot: number; Potato: number; Tomato: number; Shirt: number; Jacked: number; Hat: number }) => void;
  }

  const { basket, setBasket } = useContext(BasketContext) as BasketContextProps;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Apple: 1$ x {basket.Apple} = {basket.Apple * 1}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Banana: 5$ x {basket.Banana} = {basket.Banana * 5}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Orange: 2$ x {basket.Orange} = {basket.Orange * 2}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Carrot: 3$ x {basket.Carrot} = {basket.Carrot * 3}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Potato: 4$ x {basket.Potato} = {basket.Potato * 4}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Tomato: 10$ x {basket.Tomato} = {basket.Tomato * 10}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Shirt: 10$ x {basket.Shirt} = {basket.Shirt * 10}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Jacked: 20$ x {basket.Jacked} = {basket.Jacked * 20}$
      </ThemedText>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
        Hat: 5$ x {basket.Hat} = {basket.Hat * 5}$
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
