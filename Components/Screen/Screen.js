import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import data from './feed.json';
import {UseSelector, useSelector} from 'react-redux/es/hooks/useSelector';

export default function Screen() {
  // const data = useSelector(state => state.slice.name);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {data.map((item, id) => (
          <View key={id} style={styles.card}>
            <View style={styles.header}>
              <Image source={{uri: item.avatarurl}} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.id}>@{item.name}</Text>
              </View>
            </View>
            <Text style={styles.text}>{item.text}</Text>
            <Image source={{uri: item.image}} style={styles.image1} />
            <View style={styles.stats}>
              <Text style={styles.statItem}>{item.comment} Comments</Text>
              <Text style={styles.statItem}>{item.retweett} Retweets</Text>
              <Text style={styles.statItem}>{item.like} Likes</Text>
              <Text style={styles.statItem}>{item.view} Views</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 14,
    color: 'gray',
  },
  text: {
    marginBottom: 12,
  },
  image1: {
    width: '100%',
    height: 200,
    marginBottom: 12,
    borderRadius: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 8,
  },
  statItem: {
    color: 'gray',
  },
});
