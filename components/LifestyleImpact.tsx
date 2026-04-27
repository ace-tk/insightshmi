import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Palette } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';

export const LifestyleImpact = () => {
  const [months, setMonths] = useState<number>(4);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const baseData = [
    { name: 'Sleep', colors: ['#D1C4E9', '#B39DDB'], ratio: 0.75 },
    { name: 'Hydrate', colors: ['#FFCDD2', '#EF9A9A'], ratio: 0.3 },
    { name: 'Caffeine', colors: ['#B2DFDB', '#80CBC4'], ratio: 0.55 },
    { name: 'Exercise', colors: ['#F8BBD0', '#F48FB1'], ratio: 0.7 },
  ];

  const rows = baseData.map(item => ({
    name: item.name,
    colors: item.colors,
    filledCount: Math.round(item.ratio * months)
  }));
      
  const columns = months;

  const GradientSquare = ({ colors, isFilled }: { colors: string[], isFilled: boolean }) => {
    return (
      <View style={styles.squareContainer}>
        <Svg width={28} height={28} viewBox="0 0 28 28">
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
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setIsDropdownOpen(true)}
          >
            <Text style={styles.dropdownText}>{months} {months === 1 ? 'month' : 'months'}</Text>
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

      <Modal visible={isDropdownOpen} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setIsDropdownOpen(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.dropdownMenu}>
                <FlatList
                  data={Array.from({ length: 12 }, (_, i) => i + 1)}
                  keyExtractor={(item) => item.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      style={styles.dropdownItem}
                      onPress={() => {
                        setMonths(item);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <Text style={[styles.dropdownItemText, months === item && styles.dropdownItemTextSelected]}>
                        {item} {item === 1 ? 'month' : 'months'}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 200,
    maxHeight: 300,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
  dropdownItemTextSelected: {
    fontWeight: '700',
    color: '#9575CD',
  },
});
