import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ViewToken,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { FlashList } from '@shopify/flash-list';
import ListItem from './components/FootListItem';

import { foods, ICategory } from './data/foods';

import CategoryButton from './components/CategoryButton';
import HeaderContent from './components/HeaderContent';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const MainApp = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default MainApp;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  //used for scrolling programatically
  const flatListTitleRef = useRef<FlatList<ICategory>>(null);
  const flashListRef = useRef<FlashList<ICategory>>(null);

  //used for debouncing purpose
  const scrollStateRef = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout>();

  //used for storing the height of listHeader and listTitle
  const headerHeightRef = useRef<number>(0);
  const flatListHeightRef = useRef<number>(0);

  const safeAreaInsets = useSafeAreaInsets();

  const flatListOpacitySharedValue = useSharedValue(0);
  const flatListOpacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: flatListOpacitySharedValue.value,
    };
  });

  const flashListViewableItemChangeHandle:
    | ((info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void)
    | null
    | undefined = ({ viewableItems }) => {
    //if i am scrolling programatically i dont want this function to execute
    if (!viewableItems[0] || scrollStateRef.current) {
      return 0;
    }

    //scroll flatlisttitle when ever category section is changed
    flatListTitleRef.current?.scrollToIndex({
      animated: true,
      index: viewableItems[0].index as number,
    });

    //used for setting active background whose category section is on view
    setActiveIndex(viewableItems[0].index as number);
  };

  const flashListScrollHandle = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    //for showing another flatListTitle to have a sense of sticky position
    if (
      e.nativeEvent.contentOffset.y >
      headerHeightRef.current - flatListHeightRef.current
    ) {
      flatListOpacitySharedValue.value = 1;
    } else {
      flatListOpacitySharedValue.value = 0;
    }
  };

  const categoryClickHandle = (categoryListIndex: number) => {
    return () => {
      //if this is set true flashListViewableItemChangeHandle function is not executed
      scrollStateRef.current = true;
      setActiveIndex(categoryListIndex);

      //scrolling programatically
      flatListTitleRef.current?.scrollToIndex({
        animated: true,
        index: categoryListIndex,
      });

      flashListRef.current?.scrollToIndex({
        animated: true,
        index: categoryListIndex,
        viewOffset: flatListHeightRef.current,
      });

      //debouncing here to prevent from calling flashListViewableItemChangeHandle function
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        scrollStateRef.current = false;
      }, 1000);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: safeAreaInsets.top,
            left: 0,
            zIndex: 1000,
            backgroundColor: 'white',
          },
          flatListOpacityAnimated,
        ]}
      >
        <FlatList
          ref={flatListTitleRef}
          horizontal
          data={foods}
          contentContainerStyle={{
            paddingVertical: 10,
          }}
          keyExtractor={item => `${item.category}`}
          onScrollToIndexFailed={({ index }) => {
            //console.log('scroll to index has failed for some reason');
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: 10,
              }}
            ></View>
          )}
          renderItem={({ item, index }) => (
            <CategoryButton
              categoryName={item.category}
              isActive={activeIndex === index}
              onClick={categoryClickHandle(index)}
            />
          )}
        />
      </Animated.View>

      <FlashList
        showsVerticalScrollIndicator={false}
        onScroll={flashListScrollHandle}
        ref={flashListRef}
        ListHeaderComponent={() => {
          return (
            <View
              onLayout={e => {
                headerHeightRef.current = e.nativeEvent.layout.height;
              }}
            >
              <HeaderContent />
              <View>
                <FlatList
                  onLayout={e =>
                    (flatListHeightRef.current = e.nativeEvent.layout.height)
                  }
                  contentContainerStyle={{
                    paddingVertical: 10,
                  }}
                  horizontal
                  data={foods}
                  keyExtractor={item => `${item.category}`}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 10,
                      }}
                    ></View>
                  )}
                  renderItem={({ item, index }) => (
                    <CategoryButton
                      categoryName={item.category}
                      isActive={activeIndex === index}
                      onClick={categoryClickHandle(index)}
                    />
                  )}
                />
              </View>
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: 10,
              }}
            ></View>
          );
        }}
        onViewableItemsChanged={flashListViewableItemChangeHandle}
        data={foods}
        renderItem={({ item }) => <ListItem foodItem={item} />}
        estimatedItemSize={Dimensions.get('screen').height * 2}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
