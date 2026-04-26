import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Palette } from '@/constants/theme';

const screenWidth = Dimensions.get('window').width;

export const StabilityCard = () => {
  const chartData = {
    labels: [" Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        data: [24.5, 25.5, 27.5, 32],
        color: (opacity = 1) => `rgba(187, 134, 252, ${opacity})`,
        strokeWidth: 3
      },
      {
        data: [23.5, 24.5, 26, 29],
        color: (opacity = 1) => `rgba(187, 134, 252, 0.4)`, // Middle layer
        withDots: false
      },
      {
        data: [23, 23.5, 24.5, 26],
        color: (opacity = 1) => `rgba(187, 134, 252, 0.2)`, // Bottom layer
        withDots: false
      }
    ]
  };

  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(187, 134, 252, ${opacity})`,
    labelColor: (opacity = 1) => '#9E9E9E',
    propsForDots: {
      r: "0", // Hidden by default, we use custom dot
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      stroke: "transparent", // Hide grid lines
    },
    fillShadowGradient: '#BB86FC',
    fillShadowGradientOpacity: 0.3,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Stability Summary</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Based on your recent logs and symptom patterns.</Text>
        
        <View style={styles.scoreRow}>
          <Text style={styles.scoreLabel}>Stability Score</Text>
          <Text style={styles.scoreValue}>78%</Text>
        </View>

        <View style={styles.chartWrapper}>
          {/* Y-Axis Labels */}
          <View style={styles.yAxis}>
            <Text style={styles.yLabel}>32d</Text>
            <Text style={styles.yLabel}>28d</Text>
            <Text style={styles.yLabel}>24d</Text>
          </View>

          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={screenWidth - 60}
              height={180}
              chartConfig={chartConfig}
              bezier
              withInnerLines={false}
              withOuterLines={false}
              withHorizontalLabels={false}
              withVerticalLabels={true}
              style={styles.chart}
            />
            
            {/* Custom Vertical Line and Tooltip */}
            <View style={styles.interactiveLayer}>
              {/* Vertical Dashed Line at 'Mar' (approx 55% from left) */}
              <View style={styles.dashedLine} />
              
              {/* Tooltip */}
              <View style={styles.tooltipContainer}>
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipText}>Stability</Text>
                  <Text style={styles.tooltipText}>Improving</Text>
                  <View style={styles.tooltipArrow} />
                </View>
                <View style={styles.dot} />
              </View>
            </View>
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
    marginBottom: 12,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#757575',
    lineHeight: 24,
    marginBottom: 20,
  },
  scoreRow: {
    marginBottom: 10,
  },
  scoreLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  scoreValue: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginTop: 2,
  },
  chartWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    height: 220,
  },
  yAxis: {
    justifyContent: 'space-between',
    paddingVertical: 45,
    marginRight: 10,
    height: 160,
  },
  yLabel: {
    fontSize: 12,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  chartContainer: {
    flex: 1,
    position: 'relative',
    marginLeft: 0,
  },
  chart: {
    paddingRight: 0,
  },
  interactiveLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  dashedLine: {
    position: 'absolute',
    left: '60%', // Approx Mar position
    top: 60,
    bottom: 55,
    width: 1,
    borderWidth: 1,
    borderColor: '#78909C',
    borderStyle: 'dashed',
    opacity: 0.5,
  },
  tooltipContainer: {
    position: 'absolute',
    top: 0,
    left: '46%', // Aligned with the dashed line
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: '#000',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  tooltipText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -6,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#000',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#78909C',
    marginTop: 36, // Positioned on the line
    borderWidth: 2,
    borderColor: '#fff',
  },
});
