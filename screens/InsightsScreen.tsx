import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { InsightsHeader } from '@/components/InsightsHeader';
import { InsightsSummary } from '@/sections/InsightsSummary';

const InsightsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <InsightsHeader title="Insights" />
        
        <InsightsSummary />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
});

export default InsightsScreen;
