import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Palette } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';

export const CycleTrends = () => {
  const [range, setRange] = useState<'firstHalf' | 'secondHalf'>('firstHalf');

  const firstHalfData = [
    { month: 'Jan', days: 28, greenHeight: '35%', redHeight: '25%' },
    { month: 'Feb', days: 30, greenHeight: '45%', redHeight: '30%' },
    { month: 'Mar', days: 28, greenHeight: '30%', redHeight: '28%' },
    { month: 'Apr', days: 32, greenHeight: '50%', redHeight: '32%' },
    { month: 'May', days: 28, greenHeight: '35%', redHeight: '26%' },
    { month: 'Jun', days: 28, greenHeight: '35%', redHeight: '28%' },
  ];

  const secondHalfData = [
    { month: 'Jul', days: 29, greenHeight: '40%', redHeight: '27%' },
    { month: 'Aug', days: 31, greenHeight: '48%', redHeight: '29%' },
    { month: 'Sep', days: 28, greenHeight: '32%', redHeight: '25%' },
    { month: 'Oct', days: 30, greenHeight: '45%', redHeight: '30%' },
    { month: 'Nov', days: 27, greenHeight: '30%', redHeight: '24%' },
    { month: 'Dec', days: 29, greenHeight: '38%', redHeight: '26%' },
  ];

  const cycleData = range === 'firstHalf' ? firstHalfData : secondHalfData;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Cycle Trends</Text>
      
      <View style={styles.card}>
        {/* Background Grid Lines */}
        <View style={styles.gridLayer}>
          <View style={styles.gridLine} />
          <View style={styles.gridLine} />
          <View style={styles.gridLine} />
        </View>

        <TouchableOpacity 
          style={styles.arrowButton}
          onPress={() => setRange('firstHalf')}
        >
          <IconSymbol name="chevron.left" size={16} color="#9575CD" />
        </TouchableOpacity>

        <View style={styles.chartContainer}>
          {cycleData.map((item, index) => (
            <View key={index} style={styles.barWrapper}>
              <Text style={styles.daysText}>{item.days}</Text>
              <View style={styles.pillBase}>
                {/* Green Top Segment */}
                <View style={[styles.segment, styles.greenSegment, { height: item.greenHeight as any }]}>
                  <View style={styles.iconWrapper}>
                    <IconSymbol name="record.circle" size={12} color="rgba(255,255,255,0.9)" />
                  </View>
                </View>
                
                {/* Red Bottom Segment */}
                <View style={[styles.segment, styles.redSegment, { height: item.redHeight as any }]}>
                  <IconSymbol name="drop.fill" size={10} color="rgba(255,255,255,0.9)" />
                </View>
              </View>
              <Text style={styles.monthLabel}>{item.month}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.arrowButton}
          onPress={() => setRange('secondHalf')}
        >
          <IconSymbol name="chevron.right" size={16} color="#9575CD" />
        </TouchableOpacity>
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
    backgroundColor: '#F7F7F7', // Very light grey background
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  gridLayer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 40,
    zIndex: 0,
  },
  gridLine: {
    height: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    opacity: 0.5,
  },
  arrowButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#D1C4E9', // Soft purple border
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  barWrapper: {
    alignItems: 'center',
    height: 190,
    justifyContent: 'flex-end',
  },
  daysText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  pillBase: {
    width: 26,
    height: 130,
    backgroundColor: '#D1C4E9', // Lavender base (Full Height)
    borderRadius: 13,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  segment: {
    width: '100%',
    alignItems: 'center',
  },
  greenSegment: {
    backgroundColor: '#80CBC4', // Sage Green tone
    paddingTop: 12,
  },
  redSegment: {
    backgroundColor: '#EF9A9A', // Coral/Red tone
    justifyContent: 'center',
    paddingBottom: 4,
  },
  iconWrapper: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthLabel: {
    marginTop: 12,
    fontSize: 12,
    color: '#757575',
    fontWeight: '600',
  },
});
