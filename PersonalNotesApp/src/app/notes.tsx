import { Text, View, StyleSheet } from "react-native";

export default function Notes() {
  return(
    <View style={styles.container}>
      <Text>Personal Notes App</Text> 
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
});