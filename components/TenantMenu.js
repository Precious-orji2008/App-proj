import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather"; 
import { useNavigation, useRoute } from "@react-navigation/native";

export const TenantMenu = ({ children }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const menuItems = [
    { label: "Dashboard", screen: "TenantDashboard", icon: "home" },
    { label: "Profile", screen: "TenantProfile", icon: "user" },
    { label: "Settings", screen: "TenantSettings", icon: "settings" },
    { label: "My Property", screen: "TenantProperty", icon: "file-text" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>

      <View style={styles.bottomMenu}>
        {menuItems.map((item) => {
          const isActive = route.name === item.screen;
          return (
            <TouchableOpacity
              key={item.screen}
              onPress={() => navigation.navigate(item.screen)}
              style={styles.menuBtn}
            >
              <Icon
                name={item.icon}
                size={22}
                color={isActive ? "#e67e22" : "#333"}
              />
              <Text style={[styles.menuItem, isActive && styles.activeMenuItem]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
  menuBtn: { flex: 1, alignItems: "center" },
  menuItem: { fontSize: 12, color: "#333", marginTop: 3 },
  activeMenuItem: { color: "#e67e22", fontWeight: "bold" },
});
