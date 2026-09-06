import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Personal Notes App</Text>
      <Text>---------</Text>
      <Link href="/notes" style={styles.link}>Go to NOTES</Link> 
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
  link: {
    fontSize: 20,
    textDecorationLine: 'underline',
  }
});
