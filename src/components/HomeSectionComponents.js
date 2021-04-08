import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  LogBox
} from 'react-native';
import SQlite from 'react-native-sqlite-storage';
var db;
const { width } = Dimensions.get('window');
const section_banner = require('../assets/section_banner.png');
const HomeSectionComponent = () => {
  db = SQlite.openDatabase({ name: 'iphone.db', createFromLocation: '~iphone.db' });
  let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM SanPham',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };
  let listItemView = (item) => {
    return (
      <View
        key={item.SanPham}
        style={{ backgroundColor: 'white', padding: 20, }}>
        <TouchableOpacity>
        <Image source={require('../assets/item_image_1.png')} style={styles.itemImage} />
        <Text style={styles.txtsp}> {item.tenSP} </Text>
        <Text style={styles.txtgia}>{item.gia}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMua}>
          <Text style={styles.txtten}>BUY</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
      {/*  */}
      <Image source={section_banner} style={styles.sectionImage} />
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {[
            'Tất cả',
            'Điện thoại SmartPhone',
            'Máy tính bảng',
          ].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }>
                {e}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <ScrollView horizontal={true}>
        <View>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
            numColumns={2}/>
        </View>
      </ScrollView>
      {/*  */}
    </View>
  );
};
export default HomeSectionComponent;
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
  txtgia: {
    color: '#D30000'
  },
  btnMua: {
    height: 20,
    width: 50,
    backgroundColor: '#1e88e5',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 4,
    borderColor: '#000000'
  },
  txtten: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  txtsp:{
    width:150
  }
});
