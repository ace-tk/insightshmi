import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

export const SymptomTrends = () => {
  const symptoms = [
    { name: 'Mood', color: '#FFB74D', percentage: 40 },
    { name: 'Acne', color: '#4DB6AC', percentage: 25 },
    { name: 'Fatigue', color: '#9575CD', percentage: 20 },
    { name: 'Bloating', color: '#F06292', percentage: 15 },
  ];

  const size = 130;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  let currentOffset = 0;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Symptom Trends</Text>
      <Text style={styles.subtitle}>Compared to last cycle</Text>
      
      <View style={styles.contentContainer}>
        <View style={styles.donutContainer}>
          <Svg width={size} height={size}>
            <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
              {symptoms.map((symptom, index) => {
                const strokeDashoffset = circumference - (symptom.percentage / 100) * circumference;
                const rotation = (currentOffset / 100) * 360;
                currentOffset += symptom.percentage;
                
                return (
                  <Circle
                    key={index}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={symptom.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(${rotation}, ${size / 2}, ${size / 2})`}
                    fill="transparent"
                  />
                );
              })}
            </G>
          </Svg>
          <View style={styles.centerTextContainer}>
            <Text style={styles.totalText}>100%</Text>
          </View>
        </View>
        
        <View style={styles.labelsContainer}>
          {symptoms.map((symptom, index) => (
            <View key={index} style={styles.labelRow}>
              <View style={[styles.dot, { backgroundColor: symptom.color }]} />
              <View>
                <Text style={styles.labelText}>{symptom.name}</Text>
                <Text style={styles.percentageText}>{symptom.percentage}%</Text>
              </View>
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
    position: 'relative',
  },
  centerTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
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
  percentageText: {
    fontSize: 12,
    color: '#757575',
    marginTop: 1,
  },
});
