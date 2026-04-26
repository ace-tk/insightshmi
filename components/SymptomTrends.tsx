import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { Palette } from '@/constants/theme';

export const SymptomTrends = () => {
  const symptoms = [
    { name: 'Bloating', color: '#B39DDB', percentage: 31, top: '15%', right: '-10%' },
    { name: 'Fatigue', color: '#EF9A9A', percentage: 21, bottom: '-5%', right: '20%' },
    { name: 'Acne', color: '#80CBC4', percentage: 17, bottom: '5%', left: '-5%' },
    { name: 'Mood', color: '#FCE4EC', percentage: 30, top: '10%', left: '-5%' },
  ];

  const size = 220;
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  let currentOffset = 0;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Body Signals</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Symptom Trends</Text>
        <Text style={styles.subtitle}>Compared to last cycle</Text>
        
        <View style={styles.chartContainer}>
          <View style={styles.donutWrapper}>
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
                      transform={`rotate(${rotation}, ${size / 2}, ${size / 2})`}
                      fill="transparent"
                    />
                  );
                })}
              </G>
            </Svg>

            {/* Overlapping circular labels */}
            {symptoms.map((symptom, index) => (
              <View 
                key={index} 
                style={[
                  styles.labelBubble, 
                  { 
                    top: symptom.top, 
                    right: symptom.right, 
                    bottom: symptom.bottom, 
                    left: symptom.left,
                    shadowColor: symptom.color 
                  }
                ]}
              >
                <Text style={styles.bubblePercentage}>{symptom.percentage}%</Text>
                <Text style={styles.bubbleName}>{symptom.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#9E9E9E',
    marginTop: 2,
    marginBottom: 40,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  donutWrapper: {
    width: 220,
    height: 220,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelBubble: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  bubblePercentage: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  bubbleName: {
    fontSize: 12,
    color: '#757575',
    fontWeight: '500',
  },
});
