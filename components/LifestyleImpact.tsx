import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Palette } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';

export const LifestyleImpact = () => {
  const rows = [
    { name: 'Sleep', colors: ['#D1C4E9', '#B39DDB'], filledCount: 7 },
    { name: 'Hydrate', colors: ['#FFCDD2', '#EF9A9A'], filledCount: 3 },
    { name: 'Caffeine', colors: ['#B2DFDB', '#80CBC4'], filledCount: 5 },
    { name: 'Exercise', colors: ['#F8BBD0', '#F48FB1'], filledCount: 4 },
  ];
  const columns = 9;

  const GradientSquare = ({ colors, isFilled }: { colors: string[], isFilled: boolean }) => {
    return (
      <View style={styles.squareContainer}>
        <Svg width={28} height={28}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={isFilled ? colors[0] : '#E0E0E0'} stopOpacity={isFilled ? 1 : 0.4} />
              <Stop offset="1" stopColor={isFilled ? colors[1] : '#E0E0E0'} stopOpacity={isFilled ? 1 : 0.4} />
            </LinearGradient>
          </Defs>
          <Rect width={28} height={28} rx={6} fill="url(#grad)" />
        </Svg>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Lifestyle Impact</Text>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Correlation Strength</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>4 months</Text>
            <IconSymbol name="chevron.down" size={14} color="#9E9E9E" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.gridContainer}>
          {rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.rowLabel}>{row.name}</Text>
              <View style={styles.squaresContainer}>
                {[...Array(columns)].map((_, colIndex) => (
                   <GradientSquare 
                    key={colIndex} 
                    colors={row.colors} 
                    isFilled={colIndex < row.filledCount} 
                  />
                ))}
              </View>
            </View>
          ))}
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
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 13,
    color: '#9E9E9E',
    marginRight: 4,
    fontWeight: '500',
  },
  gridContainer: {
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  rowLabel: {
    width: 65,
    fontSize: 12,
    color: '#757575',
    fontWeight: '600',
  },
  squaresContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  squareContainer: {
    width: 28,
    height: 28,
  },
});
