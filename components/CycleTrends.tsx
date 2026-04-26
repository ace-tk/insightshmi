import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CycleTrends = () => {
  const bars = [60, 45, 80, 55, 70]; // Fake data heights in percentage

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cycle Trends</Text>
      
      <View style={styles.chartContainer}>
        {bars.map((height, index) => (
          <View key={index} style={styles.barWrapper}>
            <View style={[styles.bar, { height: `${height}%` }]} />
            <Text style={styles.barLabel}>C{index + 1}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 24,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    paddingHorizontal: 4,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 28,
    backgroundColor: '#FF8A65',
    borderRadius: 14,
  },
  barLabel: {
    marginTop: 12,
    fontSize: 13,
    color: '#757575',
    fontWeight: '500',
  },
});
