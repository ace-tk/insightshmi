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
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
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
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 2,
  },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  activeToggleButton: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  toggleText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#111',
  },
  graphPlaceholder: {
    height: 120,
    backgroundColor: '#F0F8FF', // Light blue
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 12,
    color: '#4682B4',
    fontWeight: '500',
  },
});
