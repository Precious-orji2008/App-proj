import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Menu } from "../../components/Menu"; 

export const MyProperty = ({navigation}) => {
  const properties = [
    {
      id: 1,
      name: "Kai Mathews",
      address: "No. 3 Nyeche Close, Port Harcourt, Rivers",
      units: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      id: 2,
      name: "Scarlett Boyd",
      address: "No. 3 Okocha street, Badagry, Lagos",
      units: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    },
  ];

  return (
    <Menu>
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>My Properties</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={16} color="#fff" />
          <Text style={styles.addButtonText}>Add Property</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.propertiesContainer} showsVerticalScrollIndicator={false}>
        {properties.map((property) => (
          <View key={property.id} style={styles.cardStacked}>
            <Image source={{ uri: property.image }} style={styles.propertyImageStacked} />

            <View style={styles.detailsSection}>
              <Text style={styles.propertyName}>{property.name}</Text>
              <Text style={styles.propertyAddress}>{property.address}</Text>

              <View style={styles.unitsRow}>
                <Icon name="home-outline" size={16} color="#ff7b00" />
                <Text style={styles.unitsText}>{property.units} units occupied</Text>
              </View>

              <TouchableOpacity 
              onPress={() => navigation.navigate('PropertyDetails', { propertyId: property.id })}
              style={styles.viewButton}>
                <Icon name="eye-outline" size={16} color="#ff7b00" />
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e4f0eb", paddingHorizontal: 20, paddingTop: 30 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
  headerText: { fontSize: 24, fontWeight: "700", color: "#064420" },
  addButton: {
    backgroundColor: "#ff7b00",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  addButtonText: { color: "#fff", fontWeight: "600", marginLeft: 4, fontSize: 13 },
  propertiesContainer: { paddingBottom: 40 },
  cardStacked: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  propertyImageStacked: {
    width: "100%",
    height: 150,
  },
  detailsSection: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  propertyName: { fontSize: 17, fontWeight: "700", color: "#064420", marginBottom: 4 },
  propertyAddress: { color: "#064420", fontSize: 13, marginBottom: 10 },
  unitsRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  unitsText: { color: "#064420", marginLeft: 6, fontSize: 13 },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ff7b00",
    borderRadius: 6,
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewButtonText: { color: "#ff7b00", marginLeft: 6, fontWeight: "500", fontSize: 13 },
});
