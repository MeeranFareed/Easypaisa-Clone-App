

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const actions = [
  { id: '1', title: 'Edit Profile', icon: 'user' },
  { id: '2', title: 'Settings', icon: 'gear' },
  { id: '3', title: 'Logout', icon: 'sign-out' },
];

const MyProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <EvilIcons name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/100' }}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profilePhone}>+1234567890</Text>
      </View>
      <View style={styles.actionsContainer}>
        <FlatList
          data={actions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.actionItem}>
              <EvilIcons name={item.icon} size={28} color="#01BD60" />
              <Text style={styles.actionText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#01BD60',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profilePhone: {
    fontSize: 18,
    color: '#777',
    marginTop: 5,
  },
  actionsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MyProfile;
