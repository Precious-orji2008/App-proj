import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // install with: npm install react-native-vector-icons
import { Menu } from "../../components/Menu";

export const Dashboard = ({}) => {
  return (
    <Menu>
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header Greeting */}
      <Text style={styles.greeting}>Good morning!</Text>

      {/* Search + Notification + Profile */}
      <View style={styles.topBar}>
        <View style={styles.searchBox}>
          <Icon name="search-outline" size={18} color="#666" />
          <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>

        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="notifications-outline" size={22} color="#ff6600" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>

        <Image
          source={require("../../assests/Images/Image1.jpg")}
          style={styles.avatar}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Dashboard</Text>

      {/* Dashboard Cards */}
      <View style={styles.card}>
        <Icon name="home-outline" size={24} color="#ff6600" />
        <View style={styles.cardText}>
          <Text style={styles.cardLabel}>Total Properties Owned</Text>
          <Text style={styles.cardValue}>2</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Icon name="eye-outline" size={24} color="#ff6600" />
        <View style={styles.cardText}>
          <Text style={styles.cardLabel}>Occupied Units</Text>
          <Text style={styles.cardValue}>11</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Icon name="construct-outline" size={24} color="#ff6600" />
        <View style={styles.cardText}>
          <Text style={styles.cardLabel}>Maintenance Requests</Text>
          <Text style={styles.cardValue}>03</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Icon name="cash-outline" size={24} color="#ff6600" />
        <View style={styles.cardText}>
          <Text style={styles.cardLabel}>Pending Rent Payments</Text>
          <Text style={styles.cardValue}>07</Text>
        </View>
      </View>
    </ScrollView>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4fdf8",
    padding: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#2c3e50",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    color: "#333",
  },
  iconWrapper: {
    marginRight: 12,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1a1a1a",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 25,
    marginBottom: 15,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    marginLeft: 12,
  },
  cardLabel: {
    fontSize: 14,
    color: "#555",
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
