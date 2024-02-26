import { ICategory } from '../data/foods';
import { View, Text, Image, StyleSheet } from 'react-native';

interface IListItem {
  foodItem: ICategory;
}

interface ISubListItem {
  name: string;
  description: string;
  price: string;
}

const ListItem = ({ foodItem }: IListItem) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.categoryContainer}>
        <Image
          source={{
            uri: foodItem.image,
          }}
          style={{
            height: 100,
            width: '100%',
          }}
          resizeMode="cover"
        />
        <View
          style={{
            padding: 10,
          }}
        >
          <Text style={styles.categoryHeaderText}>{foodItem.category}</Text>
          <Text>{foodItem.categoryDescription}</Text>
        </View>
      </View>
      {foodItem.products.map((food, index) => (
        <SubListItem
          key={index}
          name={food.productName}
          description={food.productDescription}
          price={food.productPrice}
        />
      ))}
    </View>
  );
};

const SubListItem = ({ name, description, price }: ISubListItem) => {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.categoryHeaderTxt}>{name}</Text>
      {description
        .split('•')
        .filter(text => text)
        .map((text, index) => (
          <Text key={index}>• {text}</Text>
        ))}
      <Text>{description}</Text>
      <Text style={styles.categoryPriceTxt}>{price}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  categoryContainer: {
    backgroundColor: '#F8F5F2',
    marginBottom: 5,
    borderRadius: 3,
  },
  categoryHeaderText: {
    fontSize: 18,
    fontWeight: '500',
  },
  productContainer: {
    padding: 20,
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 3,
    marginBottom: 10,
  },
  categoryHeaderTxt: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 3,
  },
  categoryPriceTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
    color: '#f86600',
  },
});
