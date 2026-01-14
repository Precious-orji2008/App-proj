import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { TenantMenu } from '../../../components/TenantMenu';
import { Colors } from '../../../components/colors';

export const TenantProfile = ({ navigation }) => {
  const user = {
  role: "Property Manager",
  name: "Jane Smith",
  email: "janesmith@example.com",
  phone: "+2348098765432",
  address: "45 Maple Crescent, Harmony Estate",
  city: "Abuja",
  state: "FCT",
};

  return (
    <TenantMenu>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={require('../../../assests/Images/Image1.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.role}>{user.role}</Text>
        </View>

        {/* Personal Information */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Fullname:</Text>
            <Text style={styles.infoValue}>{user.name}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user.email}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{user.phone}</Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Address</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Address:</Text>
            <Text style={styles.infoValue}>{user.address}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>City:</Text>
            <Text style={styles.infoValue}>{user.city}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>State:</Text>
            <Text style={styles.infoValue}>{user.state}</Text>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('TenantEditProfile')}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </TenantMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  role: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textDark,
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.textDarkGreen,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderColor: Colors.borderLight,
    paddingBottom: 4,
  },
  infoLabel: {
    fontWeight: '600',
    color: Colors.textMedium,
    width: 130,
  },
  infoValue: {
    color: Colors.textDark,
    flex: 1,
    flexWrap: 'wrap',
  },
  editButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  editText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 15,
  },
});
