import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TenantMenu } from '../../../components/TenantMenu';
import Icon from 'react-native-vector-icons/Feather';

export const TenantProperty = () => {
  const [activeTab, setActiveTab] = useState('details');

  const property = {
    unit: 'Unit A3',
    type: '3 Bedroom Flat',
    rent: '₦500,000 / year',
    leaseStart: 'January 12, 2024',
    leaseEnd: 'January 12, 2025',
    caution: '₦50,000',
    amenities: [
      'Parking Space',
      '24/7 Water Supply',
      'Backup Generator',
      '3 Bedrooms',
      '2 Bathrooms',
    ],
    rules: [
      'No loud noise after 9PM',
      'Pets allowed with permission',
      'No illegal activities',
    ],
    manager: 'Bluewall Property Ltd',
    landlord: 'Mr. Kelvin Duke',
  };

  return (
    <TenantMenu>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* HEADER IMAGE */}
        <Image
          style={styles.headerImage}
          source={require('../../../assests/Images/Image1.jpg')}
        />

        <View style={styles.unitBadge}>
          <Text style={styles.unitText}>{property.unit}</Text>
        </View>

        {/* TOP SUMMARY */}
        <View style={styles.summaryBox}>
          <Text style={styles.name}>Kelvin Duke</Text>
          <View style={styles.row}>
            <Icon name="home" size={16} color="#1a3b2d" />
            <Text style={styles.sumText}>{property.type}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="dollar-sign" size={16} color="#1a3b2d" />
            <Text style={styles.sumText}>{property.rent}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="calendar" size={16} color="#1a3b2d" />
            <Text style={styles.sumText}>Lease ends –</Text>
          </View>
        </View>

        {/* TABS */}
        <View style={styles.tabRow}>
          <TouchableOpacity onPress={() => setActiveTab('details')}>
            <Text
              style={[styles.tab, activeTab === 'details' && styles.activeTab]}
            >
              Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('rent')}>
            <Text
              style={[styles.tab, activeTab === 'rent' && styles.activeTab]}
            >
              Rent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('documents')}>
            <Text
              style={[
                styles.tab,
                activeTab === 'documents' && styles.activeTab,
              ]}
            >
              Documents
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONTENT SECTIONS */}
        {activeTab === 'details' && (
          <View>
            {/* FLAT INFORMATION */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Flat Information</Text>

              <View style={styles.itemRow}>
                <Text style={styles.label}>Unit Type:</Text>
                <Text style={styles.value}>{property.type}</Text>
              </View>

              <View style={styles.itemRow}>
                <Text style={styles.label}>Floor Area:</Text>
                <Text style={styles.value}>-</Text>
              </View>

              <View style={styles.itemRow}>
                <Text style={styles.label}>Lease Start:</Text>
                <Text style={styles.value}>{property.leaseStart}</Text>
              </View>

              <View style={styles.itemRow}>
                <Text style={styles.label}>Lease End:</Text>
                <Text style={styles.value}>{property.leaseEnd}</Text>
              </View>

              <View style={styles.itemRow}>
                <Text style={styles.label}>Caution Deposit:</Text>
                <Text style={styles.value}>{property.caution}</Text>
              </View>
            </View>

            {/* AMENITIES */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Amenities</Text>
              {property.amenities.map((item, i) => (
                <Text key={i} style={styles.bullet}>
                  • {item}
                </Text>
              ))}
            </View>

            {/* HOUSE RULES */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>House Rules</Text>
              {property.rules.map((item, i) => (
                <Text key={i} style={styles.bullet}>
                  • {item}
                </Text>
              ))}
            </View>

            {/* LANDLORD */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Landlord Information</Text>
              <Text style={styles.itemRow}>Property: {property.landlord}</Text>
              <Text style={styles.itemRow}>Manager: {property.manager}</Text>
            </View>

            {/* ACTION BUTTONS */}
            <TouchableOpacity style={styles.mainBtn}>
              <Text style={styles.btnText}>Request Maintenance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.btnTextDark}>Contact Management</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* RENT TAB */}
        {activeTab === 'rent' && (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Rent Overview</Text>
              <Text style={styles.rentAmount}>₦500,000 annual payment</Text>
              <TouchableOpacity style={styles.payBtn}>
                <Text style={styles.payText}>Pay Rent Now</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Payment History</Text>

              <View style={styles.tableRow}>
                <Text>2024</Text>
                <Text>₦500,000</Text>
                <Text>Jan 15, 2024</Text>
                <TouchableOpacity>
                  <Text style={styles.link}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lease Documents</Text>
            <Text>No documents available</Text>
          </View>
        )}
      </ScrollView>
    </TenantMenu>
  );
};

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fdf8',
  },

  headerImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },

  unitBadge: {
    position: 'absolute',
    top: 155,
    left: 20,
    backgroundColor: '#4A72FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  unitText: { color: '#fff', fontWeight: '700' },

  summaryBox: { padding: 15 },
  name: { fontSize: 20, fontWeight: '700', marginBottom: 6 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  sumText: { marginLeft: 6, color: '#1a3b2d' },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  tab: { fontSize: 16, color: '#999' },
  activeTab: { color: '#4A72FF', fontWeight: '700', borderBottomWidth: 2 },

  card: {
    backgroundColor: '#fff',
    margin: 12,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },

  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: 10 },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  label: { fontWeight: '700' },
  value: { color: '#333' },

  bullet: { marginLeft: 10, marginBottom: 4 },

  mainBtn: {
    backgroundColor: '#4A72FF',
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  secondaryBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4A72FF',
    padding: 13,
    borderRadius: 8,
    marginHorizontal: 12,
    alignItems: 'center',
  },

  btnText: { color: '#fff', fontWeight: '700' },
  btnTextDark: { color: '#4A72FF', fontWeight: '700' },

  rentAmount: { fontSize: 18, marginBottom: 10 },
  payBtn: {
    backgroundColor: '#4A72FF',
    padding: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  payText: { color: '#fff', fontWeight: '700' },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  link: { color: '#4A72FF' },
});
