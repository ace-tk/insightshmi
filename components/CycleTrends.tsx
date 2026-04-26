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
    padding: 20,
    borderRadius: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 150,
    paddingHorizontal: 10,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 24,
    backgroundColor: '#FF8A65', // Using a warm accent color
    borderRadius: 12,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#999',
  },
});
