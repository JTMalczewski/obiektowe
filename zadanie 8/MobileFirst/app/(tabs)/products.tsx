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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Products</ThemedText>
      </ThemedView>
      <ThemedText>Buy what fancy you!</ThemedText>


      <Collapsible title="Friuts">
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            1$ - Apple
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Apple}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Apple: basket.Apple + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Apple: basket.Apple - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            5$ - Banana
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Banana}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Banana: basket.Banana + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Banana: basket.Banana - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            2$ - Orange
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Orange}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Orange: basket.Orange + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Orange: basket.Orange - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>
      </Collapsible>


      <Collapsible title="Veggies">
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            3$ - Carrot
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Carrot}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Carrot: basket.Carrot + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Carrot: basket.Carrot - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            4$ - Potato
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Potato}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Potato: basket.Potato + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Potato: basket.Potato - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            10$ - Tomato
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Tomato}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Tomato: basket.Tomato + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Tomato: basket.Tomato - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>


      </Collapsible>



      <Collapsible title="Robes">
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            10$ - Shirt
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Shirt}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Shirt: basket.Shirt + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Shirt: basket.Shirt - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            20$ - Jacked
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Jacked}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Jacked: basket.Jacked + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Jacked: basket.Jacked - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            5$ - Hat
          </ThemedText>
          <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', marginBottom: 10 }}>
            {basket.Hat}
          </ThemedText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 50 }}>
            <Button
              onPress={() => { setBasket({ ...basket, Hat: basket.Hat + 1 }) }}
              title="+"
              color="#005500"
            />
            <Button
              onPress={() => { setBasket({ ...basket, Hat: basket.Hat - 1 }) }}
              title="-"
              color="#991111"
            />
          </div>
        </div>
      </Collapsible>
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
