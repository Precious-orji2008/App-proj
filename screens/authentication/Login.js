import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Landlord');
  const [currentImage, setCurrentImage] = useState(0);

  // handle image slideshow
  useEffect(() => {
    const total = 3; // we get 3 images
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % total);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      <Text style={styles.subtitle}>
        Enter your credentials to access your dashboard
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="gray"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="gray"
      />

      {/* Role selection without external library */}
      <View style={styles.radioGroup}>
        <TouchableOpacity
          onPress={() => setUserType('Landlord')}
          style={styles.radioItem}
        >
          <View
            style={[
              styles.radioCircle,
              userType === 'Landlord' && styles.radioChecked,
            ]}
          />
          <Text style={styles.radioText}>Landlord</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setUserType('Tenant')}
          style={styles.radioItem}
        >
          <View
            style={[
              styles.radioCircle,
              userType === 'Tenant' && styles.radioChecked,
            ]}
          />
          <Text style={styles.radioText}>Tenant</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Dashboard')}>
        <Text
          style={styles.loginText}
        >
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Rotating Images */}
      {currentImage === 0 && (
        <Image
          source={require('../../assests/Images/Image1.jpg')}
          style={styles.image}
        />
      )}
      {currentImage === 1 && (
        <Image
          source={require('../../assests/Images/Image2.jpg')}
          style={styles.image}
        />
      )}
      {currentImage === 2 && (
        <Image
          source={require('../../assests/Images/Image3.jpg')}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#e6f2ec',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'green',
    marginRight: 6,
  },
  radioChecked: {
    backgroundColor: 'green',
  },
  radioText: {
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
});
