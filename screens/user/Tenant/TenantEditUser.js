import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export const TenantEditProfile = ({navigation}) => {
  // const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleUploadPhoto = () => {
    // image upload logic here (e.g. expo-image-picker)
  };

  const handleDeleteAccount = () => {
    // delete logic here
  };

  const handleSaveChanges = () => {
    // save logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back to Profile</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Edit Profile</Text>

      {/* Profile Image */}
      {photo ? (
        <Image source={{ uri: photo }} style={styles.profileImage} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={{ color: "#aaa" }}>No Photo</Text>
        </View>
      )}

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadBtn} onPress={handleUploadPhoto}>
        <Text style={styles.uploadText}>Upload New Photo</Text>
      </TouchableOpacity>

      {/* Delete Button */}
      <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteAccount}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>

      {/* Form Fields */}
      <View style={styles.form}>
        {/* <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
          placeholderTextColor={"black"}
        /> */}

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter first name"
          placeholderTextColor={"black"}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter last name"
          placeholderTextColor={"black"}
        />

       <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={"black"}
          />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          placeholderTextColor={"black"}
        />

        {/* Divider */}
        <View style={styles.sectionDivider} />
        <Text style={styles.subHeader}>Address and Location</Text>

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
          placeholderTextColor={"black"}
        />

        {/* <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={setCountry}
          placeholder="Enter country"
          placeholderTextColor={"black"}
        /> */}

        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Enter city"
          placeholderTextColor={"black"}
        />

        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={setState}
          placeholder="Enter state"
          placeholderTextColor={"black"}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleSaveChanges}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f3f9f7",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backText: {
    color: "#ff6600",
    fontWeight: "600",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#004d40",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  uploadBtn: {
    borderWidth: 1,
    borderColor: "#ff6600",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  uploadText: {
    color: "#ff6600",
    fontWeight: "600",
  },
  deleteBtn: {
    marginBottom: 20,
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  form: {
    width: "100%",
  },
  label: {
    fontWeight: "600",
    color: "#004d40",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  sectionDivider: {
    height: 2,
    backgroundColor: "#ff6600",
    marginVertical: 15,
  },
  subHeader: {
    fontWeight: "700",
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  saveBtn: {
    backgroundColor: "#004d40",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  saveText: {
    color: "#fff",
    fontWeight: "700",
  },
});
