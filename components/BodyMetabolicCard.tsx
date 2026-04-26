import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const BodyMetabolicCard = () => {
  const [activeTab, setActiveTab] = useState<'Monthly' | 'Weekly'>('Monthly');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Body & Metabolic Trends</Text>
          <Text style={styles.subtitle}>Your weight</Text>
        </View>
        
        <View style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleButton, activeTab === 'Weekly' && styles.activeToggleButton]} 
            onPress={() => setActiveTab('Weekly')}
          >
            <Text style={[styles.toggleText, activeTab === 'Weekly' && styles.activeToggleText]}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleButton, activeTab === 'Monthly' && styles.activeToggleButton]} 
            onPress={() => setActiveTab('Monthly')}
          >
            <Text style={[styles.toggleText, activeTab === 'Monthly' && styles.activeToggleText]}>Monthly</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.graphPlaceholder}>
        <Text style={styles.placeholderText}>Weight Trends Graph Placeholder</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Aligned center for better toggle positioning
    marginBottom: 24,
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
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 4,
  },
  toggleButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeToggleButton: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 13,
    color: '#757575',
    fontWeight: '600',
  },
  activeToggleText: {
    color: '#1A1A1A',
  },
  graphPlaceholder: {
    height: 140,
    backgroundColor: '#E3F2FD', // Softer light blue
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 13,
    color: '#1976D2',
    fontWeight: '600',
  },
});
