import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Menu } from "../../../components/Menu";
import { launchImageLibrary } from "react-native-image-picker";

 // 🔹 DUMMY PROPERTY DATA (Backend later)

const dummyProperties = [
  {
    id: 1,
    name: "Kai Mathews",
    address: "No. 3 Nyeche Close, Port Harcourt, Rivers",
    units: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    name: "Scarlett Boyd",
    address: "No. 3 Okocha street, Badagry, Lagos",
    units: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
];
// 🔹 PROPERTY SCREEN
export const MyProperty = ({ navigation }) => {
  const [properties, setProperties] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [photos, setPhotos] = useState([]);

   //PROPERTY FORM 
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    propertyFor: "",
    address: "",
    city: "",
    state: "",
    landlordCode: "",
    description: "",
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

   // Fetch User Profile (later add backend API)
  const fetchProperties = async () => {
    try {
      // EXAMPLE for backend:
      // const res = await fetch("https://api.com/user/properties");
      // const data = await res.json();
      // setProperties(data);

      setProperties(dummyProperties);
    } catch (err) {
      console.log("Error loading properties:", err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

     //🔹 Select Images
  const handleImagePick = () => {
    launchImageLibrary(
      { mediaType: "photo", selectionLimit: 0, quality: 0.8 },
      (response) => {
        if (response.assets) {
          setPhotos([...photos, ...response.assets]);
        }
      }
    );
  };

//🔹 Save new property
  const handleSave = () => {
    console.log("Saved Property:", form);
    console.log("Photos:", photos);
    setShowAddModal(false);
    setPhotos([]);
  };

  return (
    <Menu>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>My Properties</Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowAddModal(true)}
          >
            <Icon name="add" size={16} color="#fff" />
            <Text style={styles.addButtonText}>Add Property</Text>
          </TouchableOpacity>
        </View>

        {/* PROPERTY LIST */}
        <ScrollView
          contentContainerStyle={styles.propertiesContainer}
          showsVerticalScrollIndicator={false}
        >
          {properties.map((property) => (
            <View key={property.id} style={styles.cardStacked}>
              <Image
                source={{ uri: property.image }}
                style={styles.propertyImageStacked}
              />

              <View style={styles.detailsSection}>
                <Text style={styles.propertyName}>{property.name}</Text>
                <Text style={styles.propertyAddress}>{property.address}</Text>

                <View style={styles.unitsRow}>
                  <Icon name="home-outline" size={16} color="#ff7b00" />
                  <Text style={styles.unitsText}>
                    {property.units} units occupied
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PropertyDetails", {
                      propertyId: property.id,
                    })
                  }
                  style={styles.viewButton}
                >
                  <Icon name="eye-outline" size={16} color="#ff7b00" />
                  <Text style={styles.viewButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* ADD PROPERTY MODAL */}
        <Modal
          visible={showAddModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowAddModal(false)}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add New Property</Text>
                <TouchableOpacity onPress={() => setShowAddModal(false)}>
                  <Icon name="close" size={22} color="#064420" />
                </TouchableOpacity>
              </View>

              <ScrollView
                style={styles.formScroll}
                showsVerticalScrollIndicator={false}
              >
                {/* Photos */}
                <Text style={styles.sectionTitle}>Add Property Photos</Text>

                <TouchableOpacity
                  style={styles.imageUploadBox}
                  onPress={handleImagePick}
                >
                  <Icon name="image-outline" size={22} color="#064420" />
                  <Text style={{ color: "#064420", marginTop: 4 }}>
                    Tap to select images
                  </Text>
                </TouchableOpacity>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ marginVertical: 10 }}
                >
                  {photos.map((photo, index) => (
                    <Image
                      key={index}
                      source={{ uri: photo.uri }}
                      style={styles.previewImage}
                    />
                  ))}
                </ScrollView>

                {/* FORM */}
                <Text style={styles.sectionTitle}>Property Information</Text>

                <Text style={styles.label}>Property Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter property name"
                  value={form.name}
                  onChangeText={(v) => handleChange("name", v)}
                />

                <Text style={styles.label}>Property Type</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g Duplex, Flat"
                  value={form.type}
                  onChangeText={(v) => handleChange("type", v)}
                />

                <Text style={styles.label}>Price</Text>
                <TextInput
                  style={styles.input}
                  placeholder="₦0.00"
                  keyboardType="numeric"
                  value={form.price}
                  onChangeText={(v) => handleChange("price", v)}
                />

                <Text style={styles.label}>Property For</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Management or Sale"
                  value={form.propertyFor}
                  onChangeText={(v) => handleChange("propertyFor", v)}
                />

                <Text style={styles.label}>Address (Street)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter address"
                  value={form.address}
                  onChangeText={(v) => handleChange("address", v)}
                />

                <Text style={styles.label}>City</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter city"
                  value={form.city}
                  onChangeText={(v) => handleChange("city", v)}
                />

                <Text style={styles.label}>State</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter state"
                  value={form.state}
                  onChangeText={(v) => handleChange("state", v)}
                />

                <Text style={styles.label}>Landlord User Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter landlord code"
                  value={form.landlordCode}
                  onChangeText={(v) => handleChange("landlordCode", v)}
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  multiline
                  numberOfLines={4}
                  placeholder="Write short description..."
                  value={form.description}
                  onChangeText={(v) => handleChange("description", v)}
                />

                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSave}
                >
                  <Icon name="save-outline" size={18} color="#fff" />
                  <Text style={styles.saveText}>Save Property</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </Menu>
  );
};

// 🔹 STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f0eb",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  headerText: { fontSize: 24, fontWeight: "700", color: "#064420" },
  addButton: {
    backgroundColor: "#ff7b00",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 4,
    fontSize: 13,
  },
  cardStacked: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 18,
    overflow: "hidden",
    elevation: 2,
  },
  propertyImageStacked: { width: "100%", height: 150 },
  detailsSection: { paddingVertical: 14, paddingHorizontal: 16 },
  propertyName: { fontSize: 17, fontWeight: "700", color: "#064420" },
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
  viewButtonText: {
    color: "#ff7b00",
    marginLeft: 6,
    fontWeight: "500",
    fontSize: 13,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    maxHeight: "90%",
    padding: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: { fontSize: 18, fontWeight: "700", color: "#064420" },
  formScroll: { marginTop: 10 },
  sectionTitle: {
    color: "#064420",
    fontWeight: "700",
    marginBottom: 8,
    fontSize: 15,
  },
  label: { color: "#064420", fontWeight: "600", marginBottom: 4 },
  input: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  textArea: { height: 100, textAlignVertical: "top" },
  imageUploadBox: {
    borderWidth: 1,
    borderColor: "#8eb69b",
    borderStyle: "dashed",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    marginBottom: 10,
  },
  previewImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: "#ff7b00",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  saveText: { color: "#fff", fontWeight: "700", marginLeft: 6 },
});
