// Settings.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import { Menu } from "../../../components/Menu"; 

export const Settings = () => {
  const [activeTab, setActiveTab] = useState("security");
  const [twoFactor, setTwoFactor] = useState(false);
   const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match.");
      return;
    }

    Alert.alert("Success", "Password changed successfully (demo).");
    setShowPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const [notifications, setNotifications] = useState({
    lease: true,
    rent: true,
    maintenance: true,
    payment: true,
    system: false,
  });

  const [emailNotif, setEmailNotif] = useState("All notifications");
  const [smsNotif, setSmsNotif] = useState("Only important");
  const [pushNotif, setPushNotif] = useState("Only important");

  const [openDropdown, setOpenDropdown] = useState(null); // "email" | "sms" | "push" | null
  const options = ["All notifications", "Only important", "None"];

  const toggleSwitch = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelect = (type, value) => {
    if (type === "email") setEmailNotif(value);
    if (type === "sms") setSmsNotif(value);
    if (type === "push") setPushNotif(value);
    setOpenDropdown(null);
  };

  const [billingInfo, setBillingInfo] = useState({
    address: "",
    email: "",
    taxInfo: "",
    invoiceFrequency: "Monthly",
  });

  const handleChange = (field, value) => {
    setBillingInfo({ ...billingInfo, [field]: value });
  };

  const renderTabButton = (label, key) => (
    <TouchableOpacity key={key} style={styles.tabButton} onPress={() => setActiveTab(key)}>
      <Text style={[styles.tabText, activeTab === key && styles.tabTextActive]}>
        {label}
      </Text>
      {activeTab === key && <View style={styles.activeLine} />}
    </TouchableOpacity>
  );

   const renderSecurity = () => (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <Text style={styles.sectionTitle}>Security Settings</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.boldText}>Two-Factor Authentication</Text>
            <Text style={styles.subText}>
              Add an extra layer of security to your account
            </Text>
          </View>
          <Switch
            value={twoFactor}
            onValueChange={setTwoFactor}
            trackColor={{ false: "#ccc", true: "#ff7b00" }}
            thumbColor={"#fff"}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.boldText}>Password</Text>
            <Text style={styles.subText}>Last changed: Never</Text>
          </View>
          <TouchableOpacity
            style={styles.orangeButton}
            onPress={() => setShowPasswordModal(true)}
          >
            <Text style={styles.orangeButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Danger Zone</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.boldText}>Deactivate Account</Text>
            <Text style={styles.subText}>
              Temporarily disable your account
            </Text>
          </View>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.redButtonText}>Deactivate</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Password Change Modal */}
      <Modal
        transparent
        visible={showPasswordModal}
        animationType="slide"
        onRequestClose={() => setShowPasswordModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Change Password</Text>

            <TextInput
              placeholder="Current Password"
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
              style={styles.input}
            />
            <TextInput
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setShowPasswordModal(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={handlePasswordChange}
              >
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );

  const renderNotifications = () => (
    <ScrollView contentContainerStyle={styles.tabContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Notification Preferences</Text>

      {Object.entries(notifications).map(([key, value]) => (
        <View key={key} style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.boldText}>
                {key === "lease" && "New Lease Signed"}
                {key === "rent" && "Rent Reminders"}
                {key === "maintenance" && "Maintenance Requests"}
                {key === "payment" && "Payment Received"}
                {key === "system" && "System Announcements"}
              </Text>
              <Text style={styles.subText}>
                {key === "lease" && "When tenants sign new lease agreements"}
                {key === "rent" && "Upcoming and overdue rent payments"}
                {key === "maintenance" && "New maintenance requests from tenants"}
                {key === "payment" && "When rent payments are processed"}
                {key === "system" && "System updates and new features"}
              </Text>
            </View>
            <Switch
              value={value}
              onValueChange={(val) =>
                setNotifications((prev) => ({ ...prev, [key]: val }))
              }
              trackColor={{ false: "#ccc", true: "#ff7b00" }}
              thumbColor={"#fff"}
            />
          </View>
        </View>
      ))}

      <Text style={styles.sectionHeader}>Notification Methods</Text>

        <View style={styles.methodContainer}>
          {/* EMAIL */}
          <View style={styles.methodRow}>
            <Text style={styles.methodLabel}>Email Notifications</Text>

            <TouchableOpacity
              style={styles.selectBox}
              activeOpacity={0.8}
              onPress={() => setOpenDropdown(openDropdown === "email" ? null : "email")}
            >
              <Text style={styles.selectedText}>{emailNotif}</Text>
              <Text style={styles.arrow}>▾</Text>
            </TouchableOpacity>

            {openDropdown === "email" && (
              <View style={styles.dropdown}>
                {options.map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={styles.dropdownItem}
                    onPress={() => handleSelect("email", opt)}
                  >
                    <Text style={styles.dropdownText}>{opt}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* SMS */}
          <View style={styles.methodRow}>
            <Text style={styles.methodLabel}>SMS Alerts</Text>

            <TouchableOpacity
              style={styles.selectBox}
              activeOpacity={0.8}
              onPress={() => setOpenDropdown(openDropdown === "sms" ? null : "sms")}
            >
              <Text style={styles.selectedText}>{smsNotif}</Text>
              <Text style={styles.arrow}>▾</Text>
            </TouchableOpacity>

            {openDropdown === "sms" && (
              <View style={styles.dropdown}>
                {options.map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={styles.dropdownItem}
                    onPress={() => handleSelect("sms", opt)}
                  >
                    <Text style={styles.dropdownText}>{opt}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* PUSH */}
          <View style={styles.methodRow}>
            <Text style={styles.methodLabel}>Push Notifications</Text>

            <TouchableOpacity
              style={styles.selectBox}
              activeOpacity={0.8}
              onPress={() => setOpenDropdown(openDropdown === "push" ? null : "push")}
            >
              <Text style={styles.selectedText}>{pushNotif}</Text>
              <Text style={styles.arrow}>▾</Text>
            </TouchableOpacity>

            {openDropdown === "push" && (
              <View style={styles.dropdown}>
                {options.map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={styles.dropdownItem}
                    onPress={() => handleSelect("push", opt)}
                  >
                    <Text style={styles.dropdownText}>{opt}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
    </ScrollView>
  );

  return (
    <Menu>
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
        <Text style={styles.subHeader}>
          Manage your landlord account details and preferences
        </Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {renderTabButton("Security", "security")}
          {renderTabButton("Notifications", "notifications")}
          {renderTabButton("Billing", "billing")}
        </View>

        {/* Content */}
        <View style={{ flex: 1, marginBottom: 60 }}>
          {activeTab === "security" && renderSecurity()}
          {activeTab === "notifications" && renderNotifications()}
          {activeTab === "billing" && (
  <ScrollView contentContainerStyle={styles.tabContent} showsVerticalScrollIndicator={false}>
    <Text style={styles.sectionTitle}>Payment Methods</Text>

    <View style={styles.card}>
      <View style={styles.paymentBox}>
        <Text style={styles.paymentText}>No payment methods on file</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add New Payment Method</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={styles.sectionTitle}>Billing Information</Text>

    <View style={styles.card}>
      {/* Billing Address */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Billing Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Street address"
          value={billingInfo.address}
          onChangeText={(val) => handleChange("address", val)}
        />
      </View>

      {/* Billing Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Billing Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@email.com"
          keyboardType="email-address"
          value={billingInfo.email}
          onChangeText={(val) => handleChange("email", val)}
        />
      </View>

      {/* Tax Info */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Tax Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Tax ID or business number"
          value={billingInfo.taxInfo}
          onChangeText={(val) => handleChange("taxInfo", val)}
        />
      </View>

      {/* Invoice Frequency */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Invoice Frequency</Text>
        <TextInput
          style={styles.input}
          placeholder="Monthly / Quarterly / Yearly"
          value={billingInfo.invoiceFrequency}
          onChangeText={(val) => handleChange("invoiceFrequency", val)}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={[styles.buttonText, { color: "#555" }]}>Discard Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]}>
          <Text style={[styles.buttonText, { color: "#fff" }]}>Save Billing Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
)}

        </View>
      </View>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6faf7", paddingHorizontal: 16, paddingTop: 16 },
  header: { fontSize: 24, fontWeight: "700", color: "#0b3b2e" },
  subHeader: { fontSize: 14, color: "#507f6a", marginBottom: 16 },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8e5",
    marginBottom: 10,
  },
  tabButton: { flex: 1, alignItems: "center", paddingVertical: 12 },
  tabText: { color: "#4a6658", fontWeight: "600", fontSize: 15 },
  tabTextActive: { color: "#ff7b00" },
  activeLine: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: "100%",
    backgroundColor: "#ff7b00",
  },
  tabContent: { paddingBottom: 80 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
    color: "#0b3b2e",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  boldText: { fontWeight: "600", fontSize: 15, color: "#0b3b2e" },
  subText: { color: "#507f6a", fontSize: 13, marginTop: 2 },
  orangeButton: {
    backgroundColor: "#ff7b00",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  orangeButtonText: { color: "#fff", fontWeight: "600", fontSize: 13 },
  redButton: {
    borderWidth: 1,
    borderColor: "#d33",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  redButtonText: { color: "#d33", fontWeight: "600", fontSize: 13 },
  emptyView: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 40 },

  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#064420",
    marginBottom: 10,
  },
  methodContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
  },
  methodRow: {
    marginBottom: 12,
  },
  methodLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#064420",
    marginBottom: 8,
  },
  selectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#f8f8f8",
  },
  selectedText: {
    color: "#004d40",
    fontWeight: "500",
  },
  arrow: {
    color: "#004d40",
    fontSize: 16,
    marginLeft: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderTopWidth: 0,
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 6,
    backgroundColor: "#fff",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  dropdownText: {
    color: "#333",
  },

    modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0b3b2e",
    marginBottom: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  cancelText: { color: "#555" },
  saveBtn: {
    backgroundColor: "#ff7b00",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  saveText: { color: "#fff", fontWeight: "600" },

    // Billing Styles
  paymentBox: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  paymentText: {
    color: "#777",
    marginBottom: 8,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addButtonText: {
    color: "#333",
    fontWeight: "500",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
    marginBottom: 6,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 24,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 10,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  saveButton: {
    backgroundColor: "#ff7b00",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
  },


});
