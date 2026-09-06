import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Notes() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>N O T E S</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#ffffff',
  }
});