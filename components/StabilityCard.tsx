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
    backgroundColor: '#F5F5F5',
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 16,
  },
  graphPlaceholder: {
    height: 120,
    backgroundColor: '#E0D7FF', // Light purple
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 12,
    color: '#6B52D1',
    fontWeight: '500',
  },
  scoreContainer: {
    marginTop: 8,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF', // Using a default iOS-style blue for the score
  },
});
