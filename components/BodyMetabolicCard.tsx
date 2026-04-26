import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export const BodyMetabolicCard = () => {
  const [activeTab, setActiveTab] = useState<'Monthly' | 'Weekly'>('Monthly');

  const chartData = {
    labels: activeTab === 'Monthly' ? ["Jan", "Feb", "Mar", "Apr"] : ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: activeTab === 'Monthly' ? [65, 64.5, 63.8, 63.2] : [63.5, 63.2, 63.4, 63.1, 63.2],
        color: (opacity = 1) => `rgba(255, 138, 101, ${opacity})`, // Warm pink/red
        strokeWidth: 3
      }
    ]
  };

  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(255, 138, 101, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(117, 117, 117, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#FF8A65"
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      stroke: "#f0f0f0",
      strokeWidth: 1
    }
  };

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

      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={screenWidth - 88}
          height={160}
          chartConfig={chartConfig}
          bezier
          withInnerLines={false}
          withOuterLines={false}
          style={styles.chartStyle}
        />
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
    alignItems: 'center',
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
  chartContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  chartStyle: {
    paddingRight: 40,
  },
});
