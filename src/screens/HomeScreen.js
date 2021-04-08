import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import HomeSectionComponent from '../components/HomeSectionComponents';
import SQlite from 'react-native-sqlite-storage';
var db;

function HomeScreen() {
  return (
    
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/menu.png')} resizeMode='contain' style={styles.imagemenu} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search" style={styles.inputText}></TextInput>
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/buying.png')} resizeMode='contain' style={styles.imagebuying} />
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  imagemenu: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 8
  },
  imagebuying: {
    width: 30,
    height: 30,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
    width: 200
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
