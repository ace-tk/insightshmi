import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InsightsHeaderProps {
  title: string;
}

export const InsightsHeader = ({ title }: InsightsHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
