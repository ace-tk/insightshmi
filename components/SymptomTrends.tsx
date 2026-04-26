import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SymptomTrends = () => {
  const symptoms = [
    { name: 'Mood', color: '#FFB74D' },
    { name: 'Acne', color: '#4DB6AC' },
    { name: 'Fatigue', color: '#9575CD' },
    { name: 'Bloating', color: '#F06292' },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Symptom Trends</Text>
      <Text style={styles.subtitle}>Compared to last cycle</Text>
      
      <View style={styles.contentContainer}>
        <View style={styles.donutContainer}>
          <View style={styles.donutPlaceholder}>
            <View style={styles.donutHole} />
          </View>
        </View>
        
        <View style={styles.labelsContainer}>
          {symptoms.map((symptom, index) => (
            <View key={index} style={styles.labelRow}>
              <View style={[styles.dot, { backgroundColor: symptom.color }]} />
              <Text style={styles.labelText}>{symptom.name}</Text>
            </View>
          ))}
        </View>
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
    borderWidth: 1,
    borderColor: '#F0F0F0',
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
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  donutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    borderWidth: 15,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutHole: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  labelsContainer: {
    marginLeft: 20,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  labelText: {
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },
});
