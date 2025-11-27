import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Menu } from "../../../components/Menu";

export const Dashboard = ({}) => {

  const transactions = [
    { id: '1', date: 'March 28, 2024', amount: '₦250,000', description: 'Rent Payment - Flat A2, Oak Estate' },
    { id: '2', date: 'March 20, 2024', amount: '₦180,000', description: 'Rent Payment - Flat C4, Sunrise Court' },
    { id: '3', date: 'March 15, 2024', amount: '₦300,000', description: 'Advance Rent - New Tenant, Royal Residency' },
    { id: '4', date: 'March 5, 2024', amount: '₦120,000', description: 'Maintenance Fee - Flat B1, City Homes' },
    { id: '5', date: 'February 25, 2024', amount: '₦220,000', description: 'Rent Payment - Flat A5, Pearl Court' },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.txnCard}>
      <Text style={styles.txnDate}>{item.date}</Text>
      <Text style={styles.txnAmount}>{item.amount}</Text>
      <Text style={styles.txnDesc}>{item.description}</Text>
    </View>
  );

  return (
    <Menu>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
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
            source={require("../../../assests/Images/Image1.jpg")}
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

        {/* Recent Transactions Section */}
        <View style={styles.txnContainer}>
          <View style={styles.txnHeader}>
            <Text style={styles.txnTitle}>Recent Transactions</Text>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
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
    elevation: 3,
    shadowColor: "#000",
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

  // Transaction Styles
  txnContainer: {
    backgroundColor: "#E9F6EE",
    borderRadius: 12,
    padding: 15,
    marginTop: 25,
  },
  txnHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  txnTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  viewAllBtn: {
    backgroundColor: "#ff6600",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  viewAllText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  txnCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  txnDate: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },
  txnAmount: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E65C00",
    marginTop: 3,
  },
  txnDesc: {
    fontSize: 12,
    color: "#666",
    marginTop: 3,
  },
});
