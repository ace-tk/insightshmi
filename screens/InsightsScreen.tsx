import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { InsightsHeader } from '@/components/InsightsHeader';
import { InsightsSummary } from '@/sections/InsightsSummary';
import { Palette } from '@/constants/theme';

const { width, height } = Dimensions.get('window');

const InsightsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Background Gradient Layer */}
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#FCE4EC" stopOpacity="1" /> 
              <Stop offset="0.3" stopColor="#F2F7F2" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect width={width} height={height} fill="url(#grad)" />
        </Svg>
      </View>

      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent, 
          { paddingTop: insets.top + 20 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        <InsightsHeader title="Insights" />
        
        <InsightsSummary />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 130, // Increased gap for bottom tab bar
  },
});

export default InsightsScreen;
