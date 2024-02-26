import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

const HALF_SCREEN_WIDTH = Dimensions.get('screen').height / 2;

const HEADER_IMAGE_URL =
  'https://static.thuisbezorgd.nl/images/generic/categories/1_gemuese/gemuese_gemuese.png';

const LOGO_URL =
  'https://static.lieferando.de/images/restaurants/de/OO1PP1PN/logo_465x320.png';

const HeaderContent = () => {
  return (
    <>
      <View
        style={{
          position: 'relative',
        }}
      >
        <Image
          source={{
            uri: HEADER_IMAGE_URL,
          }}
          style={{
            height: (35 / 100) * HALF_SCREEN_WIDTH,
          }}
          resizeMode="cover"
        />
        <View style={styles.circularImageContainer}>
          <Image
            source={{
              uri: LOGO_URL,
            }}
            style={styles.circularImage}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            ARIANA SUSHI UND CHINA THAI HAUSE
          </Text>
        </View>

        <Text>
          This restaurant participates in our stampcard Programme simplly
          subscribe to discounts, new restaurants and special offers at the
          checkout and receive your very first stamp right away
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            marginBottom: 10,
            marginTop: 15,
          }}
        >
          Offers
        </Text>

        <View style={styles.discountContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 5,
            }}
          >
            Pick-UpDiscount !
          </Text>
          <Text>You'll receive 10% discount on entire pick-up orders!</Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
            }}
          >
            Pickup only
          </Text>
        </View>
      </View>
    </>
  );
};

export default HeaderContent;

const styles = StyleSheet.create({
  circularImageContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -25 }],
    bottom: '-50%',
    borderRadius: 100,
    height: 100,
    width: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circularImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },

  contentContainer: {
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 10,
  },

  discountContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: '#fcc419',
    borderRadius: 5,
  },
});
