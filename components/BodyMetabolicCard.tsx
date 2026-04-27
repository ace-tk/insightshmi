import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
} from 'react-native-reanimated';
import { Palette } from '@/constants/theme';

const screenWidth = Dimensions.get('window').width;

export const BodyMetabolicCard = () => {
  const [activeTab, setActiveTab] = useState<'Monthly' | 'Weekly'>('Monthly');
  const togglePos = useSharedValue(activeTab === 'Weekly' ? 1 : 0);
  const chartOpacity = useSharedValue(1);

  useEffect(() => {
    togglePos.value = withSpring(activeTab === 'Weekly' ? 1 : 0, { damping: 15 });
    chartOpacity.value = 0;
    chartOpacity.value = withTiming(1, { duration: 500 });
  }, [activeTab]);

  const animatedToggleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: togglePos.value * 76 }],
  }));

  const animatedChartStyle = useAnimatedStyle(() => ({
    opacity: chartOpacity.value,
  }));

  const monthlyData = {
    labels: ["  Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [35, 45, 38, 70, 55],
        color: (opacity = 1) => `rgba(244, 143, 177, ${opacity})`,
        strokeWidth: 3
      }
    ]
  };

  const weeklyData = {
    labels: ["  Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: [65, 62, 68, 64, 66],
        color: (opacity = 1) => `rgba(244, 143, 177, ${opacity})`,
        strokeWidth: 3
      }
    ]
  };

  const chartData = activeTab === 'Monthly' ? monthlyData : weeklyData;

  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(244, 143, 177, ${opacity})`,
    labelColor: (opacity = 1) => '#9E9E9E',
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#F48FB1", // Pink border for dots
      fill: "#fff" // Hollow white center
    },
    propsForBackgroundLines: {
      strokeDasharray: "5",
      stroke: "#E0E0E0",
      strokeWidth: 1
    },
    fillShadowGradient: '#F48FB1',
    fillShadowGradientOpacity: 0.3,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Body & Metabolic Trends</Text>
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Your weight</Text>
            <Text style={styles.subtitle}>in kg</Text>
          </View>
          
          <View style={styles.toggleContainer}>
            <Animated.View style={[styles.toggleHighlight, animatedToggleStyle]} />
            <TouchableOpacity 
              style={styles.toggleButton} 
              onPress={() => setActiveTab('Monthly')}
            >
              <Text style={[styles.toggleText, activeTab === 'Monthly' && styles.activeToggleText]}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.toggleButton} 
              onPress={() => setActiveTab('Weekly')}
            >
              <Text style={[styles.toggleText, activeTab === 'Weekly' && styles.activeToggleText]}>Weekly</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.chartWrapper}>
          <View style={styles.yAxis}>
            <Text style={styles.yLabel}>75</Text>
            <Text style={styles.yLabel}>50</Text>
            <Text style={styles.yLabel}>25</Text>
          </View>
          <Animated.View style={[styles.chartContainer, animatedChartStyle]}>
            <LineChart
              data={chartData}
              width={screenWidth - 80}
              height={200}
              chartConfig={chartConfig}
              bezier
              withInnerLines={true}
              withOuterLines={false}
              withHorizontalLabels={false}
              withVerticalLines={false} // Remove vertical grid lines
              style={styles.chart}
              getDotColor={() => '#fff'} // Ensure center is white
            />
          </Animated.View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#9E9E9E',
    marginTop: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
    width: 160,
    position: 'relative',
  },
  toggleHighlight: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 76,
    height: 32,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  toggleButton: {
    width: 76,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 14,
    color: '#9E9E9E',
    fontWeight: '600',
  },
  activeToggleText: {
    color: '#fff',
  },
  chartWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  yAxis: {
    height: 160,
    justifyContent: 'space-between',
    paddingBottom: 40,
    marginRight: 10,
  },
  yLabel: {
    fontSize: 13,
    color: '#000', // Changed to black for better visibility
    fontWeight: '700', // Bolder labels
  },
  chartContainer: {
    flex: 1,
    marginLeft: 0,
  },
  chart: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});
