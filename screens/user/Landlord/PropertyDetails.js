// PropertyDetails.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker

export const PropertyDetails = ({ navigation, route }) => {
  const { propertyId } = route.params;
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [activeTab, setActiveTab] = useState('maintenance'); // maintenance | eviction | increment

  // form states
  const [maintenanceForm, setMaintenanceForm] = useState({
    subject: '',
    unit: '',
    description: '',
  });

  const [evictionForm, setEvictionForm] = useState({
    tenant: '',
    reason: '',
  });

  const [incrementForm, setIncrementForm] = useState({
    tenant: '',
    currentRent: '',
    newRent: '',
    effectiveDate: '',
    reason: '',
  });

  // All property data (mock)
  const allProperties = [
    {
      id: 1,
      name: 'Kai Mathews',
      address: 'No. 3 Nyeche Close, Port Harcourt, Rivers',
      type: 'Apartment Complex',
      totalUnits: 3,
      occupancyRate: '66%',
      occupiedUnits: 2,
      annualIncome: '₦3,000,000',
      avgRent: '₦1,000,000 avg/unit',
      activeMaintenance: 1,
      maintenanceNote: 'Ongoing repairs in Unit 2',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      tenants: [
        {
          id: 1,
          name: 'Blessing David',
          unit: 'Unit 1',
          rent: '₦1,000,000',
          start: 'Jan 2025',
          end: 'Dec 2025',
        },
        {
          id: 2,
          name: 'Tope Lawson',
          unit: 'Unit 3',
          rent: '₦2,000,000',
          start: 'Feb 2025',
          end: 'Jan 2026',
        },
      ],
      vacantFlats: [
        {
          id: 1,
          propertyName: 'Kai Mathews',
          unit: 'Unit 2',
          annualRent: '₦600,000',
          leaseEnd: 'N/A',
        },
      ],
    },
    {
      id: 2,
      name: 'Scarlett Boyd',
      address: 'No. 3 Okocha street, Badagry, Lagos',
      type: 'Mini Estate',
      totalUnits: 2,
      occupancyRate: '100%',
      occupiedUnits: 2,
      annualIncome: '₦2,200,000',
      avgRent: '₦0 avg/unit',
      activeMaintenance: 0,
      maintenanceNote: 'All clear',
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
      tenants: [
        {
          id: 1,
          name: 'Hanae Hendricks',
          unit: 'Unit 1',
          rent: '₦1,000,000',
          start: 'N/A',
          end: 'N/A',
        },
        {
          id: 2,
          name: 'Timothy Lawrence',
          unit: 'Unit 2',
          rent: '₦1,200,000',
          start: 'N/A',
          end: 'N/A',
        },
      ],
      vacantFlats: [
        {
          id: 1,
          propertyName: 'Scarlett Boyd',
          unit: 'Unit 2',
          annualRent: '₦100,000',
          leaseEnd: 'N/A',
        },
      ],
    },
  ];

  const property =
    allProperties.find(p => p.id === propertyId) || allProperties[0];

  // helpers
  const resetForms = () => {
    setMaintenanceForm({ subject: '', unit: '', description: '' });
    setEvictionForm({ tenant: '', reason: '' });
    setIncrementForm({
      tenant: '',
      currentRent: '',
      newRent: '',
      effectiveDate: '',
      reason: '',
    });
    setActiveTab('maintenance');
  };

  const openRequestModal = () => {
    setShowRequestModal(true);
    resetForms();
  };

  const closeRequestModal = () => {
    setShowRequestModal(false);
    resetForms();
  };

  // submit handlers (basic validation)
  const submitMaintenance = () => {
    if (
      !maintenanceForm.subject.trim() ||
      !maintenanceForm.unit.trim() ||
      !maintenanceForm.description.trim()
    ) {
      Alert.alert('Error', 'Please fill subject, unit and description.');
      return;
    }
    // TODO: send to backend
    Alert.alert('Success', 'Maintenance request submitted.');
    closeRequestModal();
  };

  const submitEviction = () => {
    if (!evictionForm.tenant || !evictionForm.reason.trim()) {
      Alert.alert('Error', 'Please select tenant and state reason.');
      return;
    }
    Alert.alert('Success', 'Eviction request submitted.');
    closeRequestModal();
  };

  const submitIncrement = () => {
    if (
      !incrementForm.tenant ||
      !incrementForm.newRent.trim() ||
      !incrementForm.effectiveDate.trim() ||
      !incrementForm.reason.trim()
    ) {
      Alert.alert(
        'Error',
        'Please fill tenant, new rent, effective date and reason.',
      );
      return;
    }
    Alert.alert('Success', 'Rent increase request submitted.');
    closeRequestModal();
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Back */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={18} color="#ff7b00" />
          <Text style={styles.backText}>Back to Properties</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.headerSection}>
          <Image
            source={{ uri: property.image }}
            style={styles.propertyImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.propertyName}>{property.name}</Text>
            <Text style={styles.propertyAddress}>{property.address}</Text>
            <View style={styles.typeRow}>
              <Text style={styles.propertyType}>{property.type}</Text>
              <Text style={styles.unitCount}>
                {property.totalUnits} units total
              </Text>
            </View>
          </View>
        </View>

        {/* Stats */}
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

        {/* Tenants */}
        <View style={styles.tableSection}>
          <Text style={styles.sectionTitle}>Current Tenants</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1.5 }]}>
              Name
            </Text>
            <Text style={[styles.cell, styles.headerCell]}>Unit</Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1.2 }]}>
              Annual Rent
            </Text>
            <Text style={[styles.cell, styles.headerCell]}>Lease Start</Text>
            <Text style={[styles.cell, styles.headerCell]}>Lease End</Text>
          </View>

          {property.tenants.map(tenant => (
            <View key={tenant.id} style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 1.5, color: '#ff7b00' }]}>
                {tenant.name}
              </Text>
              <Text style={styles.cell}>{tenant.unit}</Text>
              <Text style={[styles.cell, { flex: 1.2 }]}>{tenant.rent}</Text>
              <Text style={styles.cell}>{tenant.start}</Text>
              <Text style={styles.cell}>{tenant.end}</Text>
            </View>
          ))}
        </View>

        {/* Vacant Flats */}
        <View style={styles.tableSection}>
          <Text style={styles.sectionTitle}>Vacant Flats</Text>

          {property.vacantFlats && property.vacantFlats.length > 0 ? (
            <>
              <View style={styles.tableHeader}>
                <Text style={[styles.cell, styles.headerCell, { flex: 1.5 }]}>
                  Property Name
                </Text>
                <Text style={[styles.cell, styles.headerCell]}>Unit</Text>
                <Text style={[styles.cell, styles.headerCell]}>
                  Annual Rent
                </Text>
                <Text style={[styles.cell, styles.headerCell]}>Lease End</Text>
                <Text style={[styles.cell, styles.headerCell]}>Actions</Text>
              </View>

              {property.vacantFlats.map(flat => (
                <View key={flat.id} style={styles.tableRow}>
                  <Text style={[styles.cell, { flex: 1.5, color: '#ff7b00' }]}>
                    {flat.propertyName}
                  </Text>
                  <Text style={styles.cell}>{flat.unit}</Text>
                  <Text style={styles.cell}>{flat.annualRent}</Text>
                  <Text style={styles.cell}>{flat.leaseEnd}</Text>
                  <TouchableOpacity>
                    <Icon name="create-outline" size={16} color="#ff7b00" />
                  </TouchableOpacity>
                </View>
              ))}
            </>
          ) : (
            <View style={styles.vacantBox}>
              <Text style={{ color: '#666' }}>No vacant flats</Text>
            </View>
          )}
        </View>

        {/* Make Request Button */}
        <TouchableOpacity
          style={styles.requestButton}
          onPress={openRequestModal}
        >
          <Text style={styles.requestText}>Make Request</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* REQUEST MODAL */}
      <Modal
        visible={showRequestModal}
        animationType="slide"
        transparent
        onRequestClose={closeRequestModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name={
                    activeTab === 'maintenance'
                      ? 'construct'
                      : activeTab === 'eviction'
                      ? 'person-remove'
                      : 'cash'
                  }
                  size={18}
                  color="#064420"
                />
                <Text style={styles.modalTitle}>
                  {activeTab === 'maintenance'
                    ? ' Maintenance Request'
                    : activeTab === 'eviction'
                    ? ' Eviction Request'
                    : ' Increment Request'}
                </Text>
              </View>
              <TouchableOpacity onPress={closeRequestModal}>
                <Icon name="close" size={20} color="#064420" />
              </TouchableOpacity>
            </View>

            {/* Tabs */}
            <View style={styles.tabRow}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === 'maintenance' && styles.tabActive,
                ]}
                onPress={() => setActiveTab('maintenance')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'maintenance' && styles.tabTextActive,
                  ]}
                >
                  Maintenance
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === 'eviction' && styles.tabActive,
                ]}
                onPress={() => setActiveTab('eviction')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'eviction' && styles.tabTextActive,
                  ]}
                >
                  Eviction
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === 'increment' && styles.tabActive,
                ]}
                onPress={() => setActiveTab('increment')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'increment' && styles.tabTextActive,
                  ]}
                >
                  Rent Increase
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.formScroll}
              showsVerticalScrollIndicator={false}
            >
              {/* Maintenance Form */}
              {activeTab === 'maintenance' && (
                <View>
                  <Text style={styles.formLabel}>Property</Text>
                  <TextInput
                    style={[styles.input, { backgroundColor: '#f0f0f0' }]}
                    value={property.name}
                    editable={false}
                  />

                  <Text style={styles.formLabel}>Subject *</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Brief description of the issue"
                    value={maintenanceForm.subject}
                    onChangeText={t =>
                      setMaintenanceForm({ ...maintenanceForm, subject: t })
                    }
                  />

                  <Text style={styles.formLabel}>Flat/Unit</Text>
                  <View style={styles.pickerWrap}>
                    <Picker
                      selectedValue={maintenanceForm.unit}
                      onValueChange={v =>
                        setMaintenanceForm({ ...maintenanceForm, unit: v })
                      }
                    >
                      <Picker.Item label="Select Flat/Unit" value="" />
                      {property.tenants.map(t => (
                        <Picker.Item key={t.id} label={t.unit} value={t.unit} />
                      ))}
                      {/* also list vacant units if you want */}
                    </Picker>
                  </View>

                  <Text style={styles.formLabel}>Detailed Description *</Text>
                  <TextInput
                    multiline
                    numberOfLines={5}
                    style={[styles.input, styles.textArea]}
                    placeholder="Describe the maintenance issue in detail..."
                    value={maintenanceForm.description}
                    onChangeText={t =>
                      setMaintenanceForm({ ...maintenanceForm, description: t })
                    }
                  />

                  <View style={styles.modalActionsRow}>
                    <TouchableOpacity
                      style={styles.cancelBtn}
                      onPress={closeRequestModal}
                    >
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.submitBtn}
                      onPress={submitMaintenance}
                    >
                      <Text style={styles.submitText}>Submit Request</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Eviction Form */}
              {activeTab === 'eviction' && (
                <View>
                  <Text style={styles.formLabel}>Property</Text>
                  <TextInput
                    style={[styles.input, { backgroundColor: '#f0f0f0' }]}
                    value={property.name}
                    editable={false}
                  />

                  <Text style={styles.formLabel}>Tenant *</Text>
                  <View style={styles.pickerWrap}>
                    <Picker
                      selectedValue={evictionForm.tenant}
                      onValueChange={v =>
                        setEvictionForm({ ...evictionForm, tenant: v })
                      }
                    >
                      <Picker.Item label="Select Tenant" value="" />
                      {property.tenants.map(t => (
                        <Picker.Item key={t.id} label={t.name} value={t.name} />
                      ))}
                    </Picker>
                  </View>

                  <Text style={styles.formLabel}>Reason for Eviction *</Text>
                  <TextInput
                    multiline
                    numberOfLines={5}
                    style={[styles.input, styles.textArea]}
                    placeholder="State reason for eviction..."
                    value={evictionForm.reason}
                    onChangeText={t =>
                      setEvictionForm({ ...evictionForm, reason: t })
                    }
                  />

                  <View style={styles.modalActionsRow}>
                    <TouchableOpacity
                      style={styles.cancelBtn}
                      onPress={closeRequestModal}
                    >
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.submitBtn}
                      onPress={submitEviction}
                    >
                      <Text style={styles.submitText}>Submit Request</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Increment Form */}
              {activeTab === 'increment' && (
                <View>
                  <Text style={styles.formLabel}>Property</Text>
                  <TextInput
                    style={[styles.input, { backgroundColor: '#f0f0f0' }]}
                    value={property.name}
                    editable={false}
                  />

                  <Text style={styles.formLabel}>Tenant</Text>
                  <View style={styles.pickerWrap}>
                    <Picker
                      selectedValue={incrementForm.tenant}
                      onValueChange={v =>
                        setIncrementForm({ ...incrementForm, tenant: v })
                      }
                    >
                      <Picker.Item label="Select Tenant" value="" />
                      {property.tenants.map(t => (
                        <Picker.Item key={t.id} label={t.name} value={t.name} />
                      ))}
                    </Picker>
                  </View>

                  <Text style={styles.formLabel}>Current Rent</Text>
                  <TextInput
                    style={[styles.input, { backgroundColor: '#f8f8f8' }]}
                    value={incrementForm.currentRent || ''}
                    placeholder={
                      property.tenants.length ? property.tenants[0].rent : '₦0'
                    }
                    editable={false}
                  />

                  <Text style={styles.formLabel}>New Rent Amount *</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter new rent amount"
                    keyboardType="numeric"
                    value={incrementForm.newRent}
                    onChangeText={t =>
                      setIncrementForm({ ...incrementForm, newRent: t })
                    }
                  />

                  <Text style={styles.formLabel}>Effective Date *</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="mm/dd/yyyy"
                    value={incrementForm.effectiveDate}
                    onChangeText={t =>
                      setIncrementForm({ ...incrementForm, effectiveDate: t })
                    }
                  />

                  <Text style={styles.formLabel}>Reason for Increment *</Text>
                  <TextInput
                    multiline
                    numberOfLines={5}
                    style={[styles.input, styles.textArea]}
                    placeholder="Explain reason for rent increase..."
                    value={incrementForm.reason}
                    onChangeText={t =>
                      setIncrementForm({ ...incrementForm, reason: t })
                    }
                  />

                  <View style={styles.modalActionsRow}>
                    <TouchableOpacity
                      style={styles.cancelBtn}
                      onPress={closeRequestModal}
                    >
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.submitBtn}
                      onPress={submitIncrement}
                    >
                      <Text style={styles.submitText}>Submit Request</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f0eb',
    paddingHorizontal: 18,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  backText: { color: '#ff7b00', fontSize: 14, marginLeft: 4 },
  headerSection: {
    flexDirection: 'row',
    backgroundColor: '#d9ebe3',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  propertyImage: { width: 120, height: 100, borderRadius: 8, marginRight: 12 },
  propertyName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#064420',
    marginBottom: 4,
  },
  propertyAddress: { fontSize: 14, color: '#064420', marginBottom: 6 },
  typeRow: { flexDirection: 'row', alignItems: 'center' },
  propertyType: { color: '#064420', marginRight: 16 },
  unitCount: { color: '#064420' },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '32%',
    paddingVertical: 14,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  statLabel: { fontWeight: '700', color: '#064420', marginBottom: 6 },
  statValue: { fontWeight: '700', fontSize: 18, color: '#064420' },
  statSub: { fontSize: 12, color: '#064420', marginTop: 4 },
  tableSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#064420',
    fontSize: 16,
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#d9ebe3',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  cell: { flex: 1, fontSize: 13, color: '#064420', paddingHorizontal: 3 },
  headerCell: { fontWeight: '700' },
  vacantBox: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  requestButton: {
    backgroundColor: '#ff7b00',
    alignSelf: 'flex-start',
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  requestText: { color: '#fff', fontWeight: '600' },

  // modal styles
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '92%',
    maxHeight: '90%',
    padding: 12,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#064420',
    marginLeft: 8,
  },

  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ececec',
    marginBottom: 8,
  },
  tabButton: { flex: 1, alignItems: 'center', paddingVertical: 10 },
  tabActive: { borderBottomWidth: 3, borderBottomColor: '#4b6bff' },
  tabText: { color: '#6b6b6b', fontWeight: '600' },
  tabTextActive: { color: '#2649ff' },

  formScroll: { paddingHorizontal: 6, paddingBottom: 8 },
  formLabel: {
    color: '#064420',
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  textArea: { height: 110, textAlignVertical: 'top' },
  pickerWrap: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 8,
  },

  modalActionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    marginBottom: 6,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  cancelText: { color: '#333', fontWeight: '600' },
  submitBtn: {
    backgroundColor: '#3b5cff',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  submitText: { color: '#fff', fontWeight: '700' },
});
