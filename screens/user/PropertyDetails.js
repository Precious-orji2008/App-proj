import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const PropertyDetails = ({ navigation }) => {
  const property = {
    name: "Scarlett Boyd",
    address: "No. 3 Okocha street, Badagry, Lagos",
    type: "Mini Estate",
    totalUnits: 2,
    occupancyRate: "100%",
    occupiedUnits: 2,
    annualIncome: "₦2,200,000",
    avgRent: "₦0 avg/unit",
    activeMaintenance: 0,
    maintenanceNote: "All clear",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  };

  const tenants = [
    {
      id: 1,
      name: "Hanae Hendricks",
      unit: "Unit 1",
      rent: "₦1,000,000",
      start: "N/A",
      end: "N/A",
    },
    {
      id: 2,
      name: "Timothy Lawrence",
      unit: "Unit 2",
      rent: "₦1,200,000",
      start: "N/A",
      end: "N/A",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="arrow-back" size={18} color="#ff7b00" />
        <Text style={styles.backText}>Back to Properties</Text>
      </TouchableOpacity>

      {/* Property Info */}
      <View style={styles.headerSection}>
        <Image source={{ uri: property.image }} style={styles.propertyImage} />

        <View style={{ flex: 1 }}>
          <Text style={styles.propertyName}>{property.name}</Text>
          <Text style={styles.propertyAddress}>{property.address}</Text>
          <View style={styles.typeRow}>
            <Text style={styles.propertyType}>{property.type}</Text>
            <Text style={styles.unitCount}>{property.totalUnits} units total</Text>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Occupancy Rate</Text>
          <Text style={styles.statValue}>{property.occupancyRate}</Text>
          <Text style={styles.statSub}>
            {property.occupiedUnits} of {property.totalUnits} units occupied
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Annual Rental Income</Text>
          <Text style={styles.statValue}>{property.annualIncome}</Text>
          <Text style={styles.statSub}>{property.avgRent}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Active Maintenance</Text>
          <Text style={styles.statValue}>{property.activeMaintenance}</Text>
          <Text style={styles.statSub}>{property.maintenanceNote}</Text>
        </View>
      </View>

      {/* Tenants Table */}
      <View style={styles.tableSection}>
        <Text style={styles.sectionTitle}>Current Tenants</Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.cell, styles.headerCell, { flex: 1.5 }]}>
            Name
          </Text>
          <Text style={[styles.cell, styles.headerCell]}>Unit</Text>
          <Text style={[styles.cell, styles.headerCell]}>Annual Rent</Text>
          <Text style={[styles.cell, styles.headerCell]}>Lease Start</Text>
          <Text style={[styles.cell, styles.headerCell]}>Lease End</Text>
        </View>

        {tenants.map((tenant) => (
          <View key={tenant.id} style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1.5, color: "#ff7b00" }]}>
              {tenant.name}
            </Text>
            <Text style={styles.cell}>{tenant.unit}</Text>
            <Text style={styles.cell}>{tenant.rent}</Text>
            <Text style={styles.cell}>{tenant.start}</Text>
            <Text style={styles.cell}>{tenant.end}</Text>
          </View>
        ))}
      </View>

      {/* Vacant Flats */}
      <View style={styles.tableSection}>
        <Text style={styles.sectionTitle}>Vacant Flats</Text>
        <View style={styles.vacantBox}>
          <Text style={{ color: "#666" }}>No vacant flats</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f0eb",
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  backText: {
    color: "#ff7b00",
    fontSize: 14,
    marginLeft: 4,
  },
  headerSection: {
    flexDirection: "row",
    backgroundColor: "#d9ebe3",
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  propertyImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#064420",
    marginBottom: 4,
  },
  propertyAddress: {
    fontSize: 14,
    color: "#064420",
    marginBottom: 6,
  },
  typeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  propertyType: {
    color: "#064420",
    marginRight: 16,
  },
  unitCount: {
    color: "#064420",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "32%",
    paddingVertical: 14,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  statLabel: {
    fontWeight: "700",
    color: "#064420",
    marginBottom: 6,
  },
  statValue: {
    fontWeight: "700",
    fontSize: 18,
    color: "#064420",
  },
  statSub: {
    fontSize: 12,
    color: "#064420",
    marginTop: 4,
  },
  tableSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
  },
  sectionTitle: {
    fontWeight: "700",
    color: "#064420",
    fontSize: 16,
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#d9ebe3",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  cell: {
    flex: 1,
    fontSize: 13,
    color: "#064420",
  },
  headerCell: {
    fontWeight: "700",
  },
  vacantBox: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
});
