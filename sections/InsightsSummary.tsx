import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StabilityCard } from '@/components/StabilityCard';
import { CycleTrends } from '@/components/CycleTrends';

export const InsightsSummary = () => {
  return (
    <View style={styles.container}>
      <StabilityCard />
      <CycleTrends />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
