import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StabilityCard } from '@/components/StabilityCard';

export const InsightsSummary = () => {
  return (
    <View style={styles.container}>
      <StabilityCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
