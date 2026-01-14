import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TenantMenu } from '../../../components/TenantMenu';
import { Colors } from '../../../components/colors';

export const TenantDashboard = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+2348012345678',
    apartment: 'Unit 5B',
    compound: 'Greenwood Estate',
    currentRent: '₦650,000',
    nextDue: 'October 12, 2026',
  };

  const invoices = [
    {
      date: 'April 15, 2024',
      title: 'Monthly Service Charge',
      amount: '₦25,000',
    },
    {
      date: 'March 28, 2024',
      title: 'Water Bill',
      amount: '₦7,800',
    },
    {
      date: 'March 10, 2024',
      title: 'Power Maintenance Fee',
      amount: '₦12,500',
    },
    {
      date: 'February 22, 2024',
      title: 'Security Levy',
      amount: '₦10,000',
    },
    {
      date: 'February 1, 2024',
      title: 'Environmental Cleaning Fee',
      amount: '₦5,500',
    },
  ];

  return (
    <TenantMenu>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Dashboard Title */}
        <Text style={styles.dashboardTitle}>Dashboard</Text>

        {/* TOP STATS — VERTICAL CARDS */}
        <View style={styles.verticalContainer}>
          <View style={styles.cardBox}>
            <Text style={styles.cardLabel}>Your Apartment</Text>
            <Text style={styles.cardValue}>{user.apartment}</Text>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.cardLabel}>Pending Maintenance</Text>
            <Text style={styles.cardValue}>03</Text>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.cardLabel}>Total Payments</Text>
            <Text style={styles.cardValue}>₦0.00</Text>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.cardLabel}>Next Rent Due</Text>
            <Text style={styles.cardValue}>{user.nextDue}</Text>
          </View>
        </View>

        <View style={styles.mainRow}>
          {/* LEFT — PROFILE CARD */}
          <View style={styles.profileCard}>
            <Text style={styles.sectionTitle}>Your Profile</Text>

            <View style={styles.centerBox}>
              <Image
                source={require('../../../assests/Images/Image1.jpg')}
                style={styles.profileImage}
              />
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.infoLine}>
                <Text style={styles.label}>Name: </Text>
                {user.name}
              </Text>

              <Text style={styles.infoLine}>
                <Text style={styles.label}>Email: </Text>
                {user.email}
              </Text>

              <Text style={styles.infoLine}>
                <Text style={styles.label}>Phone: </Text>
                {user.phone}
              </Text>

              <Text style={styles.infoLine}>
                <Text style={styles.label}>Apartment: </Text>
                {user.apartment}
              </Text>

              <Text style={styles.infoLine}>
                <Text style={styles.label}>Compound: </Text>
                {user.compound}
              </Text>

              <Text style={styles.infoLine}>
                <Text style={styles.label}>Current Rent: </Text>
                {user.currentRent}
              </Text>
            </View>

            {/* Buttons */}
            <View style={styles.btnRow}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.btnText}>Pay Rent</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.btnText}>Request Maintenance</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.btnText}>View Agreement</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* RIGHT — INVOICES */}
          <View style={styles.invoiceCard}>
            <Text style={styles.sectionTitle}>Invoices & Receipts</Text>

            {invoices.map((item, index) => (
              <View key={index} style={styles.invoiceItem}>
                <View>
                  <Text style={styles.invoiceDate}>{item.date}</Text>
                  <Text style={styles.invoiceTitle}>{item.title}</Text>
                </View>

                <View style={styles.invoiceRight}>
                  <Text style={styles.invoiceAmount}>{item.amount}</Text>
                  <TouchableOpacity style={styles.downloadBtn}>
                    <Text style={styles.downloadText}>Download</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
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

  dashboardTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    color: Colors.textDarkGreen,
  },

  verticalContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  cardBox: {
    width: '48%',
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },

  cardLabel: {
    fontSize: 13,
    color: Colors.textDark,
    marginBottom: 6,
  },

  cardValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryOrange, 
  },

  /* PROFILE CARD LEFT */
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },

  centerBox: {
    alignItems: 'center',
    marginVertical: 10,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  profileInfo: { marginTop: 15 },

  infoLine: {
    fontSize: 14,
    marginBottom: 6,
    color: Colors.textDark, 
  },

  label: {
    fontWeight: '700',
    color: Colors.textDarkGreen, 
  },

  btnRow: { marginTop: 20 },

  actionBtn: {
    backgroundColor: Colors.primary, 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  btnText: {
    color: Colors.white,
    fontWeight: '600',
  },

  /* INVOICE SECTION RIGHT */
  invoiceCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: Colors.textDarkGreen,
  },

  invoiceItem: {
    borderBottomWidth: 1,
    borderColor: Colors.borderLight, 
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  invoiceDate: {
    color: Colors.textDarkGreen,
    fontWeight: '700',
  },

  invoiceTitle: {
    fontStyle: 'italic',
    color: Colors.textMedium, 
  },

  invoiceRight: { alignItems: 'flex-end' },

  invoiceAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primaryOrange, 
  },

  downloadBtn: {
    marginTop: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.borderDark, 
    borderRadius: 4,
  },

  downloadText: {
    fontSize: 12,
    color: Colors.textDark,
  },
});
