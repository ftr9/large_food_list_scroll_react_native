import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ICategoryButton {
  categoryName: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryButton = ({
  categoryName,
  isActive,
  onClick,
}: ICategoryButton) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.6}
      style={[
        styles.btnContainer,
        { backgroundColor: isActive ? '#fd7e14' : 'white' },
      ]}
    >
      <Text
        style={{
          color: isActive ? 'white' : 'black',
        }}
      >
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    borderRadius: 100,
  },
});
