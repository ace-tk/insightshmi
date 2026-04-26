import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface StabilityCardProps {
  score?: number;
  subtitle?: string;
}

const screenWidth = Dimensions.get('window').width;

export const StabilityCard = ({ 
  score = 78, 
  subtitle = "Based on your recent performance metrics." 
}: StabilityCardProps) => {
  const chartData = {
    labels: ["W1", "W2", "W3", "W4", "W5"],
    datasets: [
      {
        data: [70, 75, 72, 80, 78],
        color: (opacity = 1) => `rgba(124, 77, 255, ${opacity})`, // Purple
        strokeWidth: 3
      }
    ]
  };

  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(124, 77, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(117, 117, 117, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#7C4DFF"
    },
    propsForBackgroundLines: {
      strokeDasharray: "", // solid background lines
      stroke: "#f0f0f0",
      strokeWidth: 1
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Stability Summary</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      
      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={screenWidth - 88} // card padding (24*2) + screen padding (20*2) = 88
          height={160}
          chartConfig={chartConfig}
          bezier
          withInnerLines={false}
          withOuterLines={false}
          style={styles.chartStyle}
        />
      </View>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Stability Score {score}%</Text>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    lineHeight: 20,
    marginBottom: 10,
  },
  chartContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  chartStyle: {
    paddingRight: 40, // Ensure labels aren't cut off
  },
  scoreContainer: {
    marginTop: 4,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FF8A65',
  },
});
