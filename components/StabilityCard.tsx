import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StabilityCardProps {
  score?: number;
  subtitle?: string;
}

export const StabilityCard = ({ 
  score = 78, 
  subtitle = "Based on your recent performance metrics." 
}: StabilityCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Stability Summary</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      
      <View style={styles.graphPlaceholder}>
        <Text style={styles.placeholderText}>Graph Visualization Placeholder</Text>
      </View>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Stability Score {score}%</Text>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    lineHeight: 20,
    marginBottom: 20,
  },
  graphPlaceholder: {
    height: 140,
    backgroundColor: '#F3EFFF', // Softer light purple
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 13,
    color: '#7C4DFF',
    fontWeight: '600',
  },
  scoreContainer: {
    marginTop: 4,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FF8A65', // Using consistent accent color
  },
});
