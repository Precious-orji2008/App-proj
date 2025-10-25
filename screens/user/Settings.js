import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Menu } from "../../components/Menu";

export const Settings = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Security");
  const [twoFactor, setTwoFactor] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDeactivate = () => {
    Alert.alert(
      "Deactivate Account",
      "You sure say you wan deactivate your account?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Deactivate",
          style: "destructive",
          onPress: () => console.log("Account Deactivated"),
        },
      ]
    );
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "All password fields must be filled!");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords no match!");
      return;
    }
    Alert.alert("Success", "Password changed successfully!");
  };

  return (
    <Menu>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Account Settings</Text>
        <Text style={styles.subText}>
          Manage your landlord account details and preferences
        </Text>

        {/* 🔹 Tabs */}
        <View style={styles.tabContainer}>
          {["Security", "Notifications", "Billing"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 🔐 SECURITY TAB */}
        {activeTab === "Security" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Security Settings</Text>

            {/* Two-Factor */}
            <View style={styles.settingCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
                <Text style={styles.settingDesc}>
                  Add an extra layer of security to your account
                </Text>
              </View>
              <Switch
                value={twoFactor}
                onValueChange={setTwoFactor}
                trackColor={{ false: "#ccc", true: "#ff6600" }}
                thumbColor={"#fff"}
              />
            </View>

            {/* Password */}
            <View style={styles.settingCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.settingTitle}>Password</Text>
                <Text style={styles.settingDesc}>Last changed: Never</Text>
              </View>
              <TouchableOpacity
                style={styles.orangeButton}
                onPress={() => setActiveTab("ChangePassword")}
              >
                <Text style={styles.orangeButtonText}>Change Password</Text>
              </TouchableOpacity>
            </View>

            {/* ⚠️ Danger Zone */}
            <View style={styles.dangerZone}>
              <Text style={styles.dangerTitle}>Danger Zone</Text>
              <View style={styles.line} />

              <View style={styles.settingCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.settingTitle}>Deactivate Account</Text>
                  <Text style={styles.settingDesc}>
                    Temporarily disable your account
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.deactivateButton}
                  onPress={handleDeactivate}
                >
                  <Text style={styles.deactivateText}>Deactivate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* 🔑 CHANGE PASSWORD TAB */}
        {activeTab === "ChangePassword" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Change Password</Text>

            <Text style={styles.label}>Current Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter current password"
            />

            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
            />

            <Text style={styles.label}>Confirm New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm new password"
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={handlePasswordChange}
            >
              <Text style={styles.saveText}>Save Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab("Security")}
              style={styles.backBtn}
            >
              <Text style={styles.backText}>← Back to Security</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* 🛎️ Notifications */}
        {activeTab === "Notifications" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notification Settings</Text>
            <Text style={styles.settingDesc}>Coming soon...</Text>
          </View>
        )}

        {/* 💳 Billing */}
        {activeTab === "Billing" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Billing Settings</Text>
            <Text style={styles.settingDesc}>Coming soon...</Text>
          </View>
        )}
      </ScrollView>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#f4fdf8" },
  header: { fontSize: 24, fontWeight: "700", color: "#004d40", marginBottom: 4 },
  subText: { color: "#00695c", marginBottom: 20 },

  // Tabs
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#d0e6df",
    marginBottom: 20,
  },
  tabButton: { marginRight: 25, paddingBottom: 8 },
  activeTabButton: { borderBottomWidth: 3, borderColor: "#ff6600" },
  tabText: { fontWeight: "600", color: "#207f68", fontSize: 15 },
  activeTabText: { color: "#004d40" },

  // Sections
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#004d40", marginBottom: 12 },

  // Cards
  settingCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0ece9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  settingTitle: { fontSize: 16, fontWeight: "600", color: "#003d33" },
  settingDesc: { color: "#207f68", fontSize: 13, marginTop: 3 },

  // Buttons
  orangeButton: {
    backgroundColor: "#ff6600",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  orangeButtonText: { color: "#fff", fontWeight: "600", fontSize: 13 },

  // Danger Zone
  dangerZone: { marginTop: 20 },
  dangerTitle: { fontSize: 18, fontWeight: "700", color: "#004d40", marginBottom: 8 },
  line: { height: 1, backgroundColor: "#e0ece9", marginBottom: 12 },
  deactivateButton: {
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deactivateText: { color: "red", fontWeight: "600", fontSize: 13 },

  // Password Inputs
  label: { fontWeight: "600", color: "#004d40", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  // Save Button
  saveBtn: {
    backgroundColor: "#004d40",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveText: { color: "#fff", fontWeight: "700" },

  // Back Button
  backBtn: { marginTop: 10, alignItems: "center" },
  backText: { color: "#ff6600", fontWeight: "600" },
});
