import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StabilityCard } from '@/components/StabilityCard';
import { CycleTrends } from '@/components/CycleTrends';
import { BodyMetabolicCard } from '@/components/BodyMetabolicCard';
import { SymptomTrends } from '@/components/SymptomTrends';

export const InsightsSummary = () => {
  return (
    <View style={styles.container}>
      <StabilityCard />
      <CycleTrends />
      <BodyMetabolicCard />
      <SymptomTrends />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
