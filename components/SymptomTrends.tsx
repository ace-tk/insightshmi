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
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  donutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutPlaceholder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#FAFAFA',
    borderWidth: 16,
    borderColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutHole: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  labelsContainer: {
    flex: 1,
    marginLeft: 32,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  labelText: {
    fontSize: 15,
    color: '#424242',
    fontWeight: '600',
  },
});
