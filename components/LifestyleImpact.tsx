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
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
    marginBottom: 24,
  },
  gridContainer: {
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rowLabel: {
    width: 90,
    fontSize: 13,
    color: '#424242',
    fontWeight: '600',
  },
  squaresContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  square: {
    width: 28,
    height: 28,
    borderRadius: 6,
  },
});
