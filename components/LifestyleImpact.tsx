import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LifestyleImpact = () => {
  const rows = ['Sleep', 'Hydration', 'Caffeine', 'Exercise'];
  const columns = 6;

  // Mock intensity colors (0-3)
  const colors = ['#F5F5F5', '#FFDDC1', '#FFAB91', '#FF7043'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Lifestyle Impact</Text>
      <Text style={styles.subtitle}>Correlation Strength</Text>
      
      <View style={styles.gridContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <Text style={styles.rowLabel}>{row}</Text>
            <View style={styles.squaresContainer}>
              {[...Array(columns)].map((_, colIndex) => (
                <View 
                  key={colIndex} 
                  style={[styles.square, { backgroundColor: getRandomColor() }]} 
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
    marginBottom: 20,
  },
  gridContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rowLabel: {
    width: 80,
    fontSize: 12,
    color: '#444',
    fontWeight: '500',
  },
  squaresContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
});
