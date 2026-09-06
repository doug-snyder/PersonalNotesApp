import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Settings() {
  return (
		<View style={styles.container}>
			<Text style={styles.text}>S E T T I N G S</Text> 
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