import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Menu } from '../../components/Menu';

export const Profile = ({navigation}) => {
  const user = {
    role: 'Software Developer',
    name: 'Ahamba Ohale',
    email: 'ah76euc5c@jxpomup.com',
    phone: '+2349075245232',
    landlordCode: 'E6B3E082',
    about:
      'Experienced software developer with a passion for creating efficient, user-friendly applications and scalable systems.',
    address: '12 King’s Avenue, GRA Phase 2',
    city: 'Port Harcourt',
    state: 'Rivers',
    rentCollection: '₦1,200,000',
  };

  return (
    <Menu>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assests/Images/Image1.jpg')}
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

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Landlord Code:</Text>
            <Text style={styles.infoValue}>{user.landlordCode}</Text>
          </View>
        </View>

        {/* About */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{user.about}</Text>
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

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Rent Collection:</Text>
            <Text style={styles.infoValue}>{user.rentCollection}</Text>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile')} // 👈🏽 navigate to edit screen
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fdf8',
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
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: '#1a1a1a',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
    paddingBottom: 4,
  },
  infoLabel: {
    fontWeight: '600',
    color: '#555',
    width: 130,
  },
  infoValue: {
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
  aboutText: {
    color: '#444',
    fontSize: 14,
    lineHeight: 20,
  },
  editButton: {
    backgroundColor: '#ff6600',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
