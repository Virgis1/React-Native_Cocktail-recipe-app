import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CocktailItem from "../components/CocktailItem";
import { categories } from "../data/categories";
import { cocktails } from '../data/cocktails'

function CocktailsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedCocktails = cocktails.filter((cocktailItem) => {
        return cocktailItem.categoryId === catId;
    });

    useLayoutEffect(() => {
        const categoryTitle = categories.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    function renderCocktailItem(itemData) {
        const cocktailItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            info: itemData.item.info
        }

        return <CocktailItem {...cocktailItemProps} />
    }

    return (
        <View style={styles.container}>
            {/* <Text>Cocktails Screen - {catId}</Text> */}
            <FlatList 
                data={displayedCocktails} 
                keyExtractor={(item) => item.id} 
                renderItem={renderCocktailItem}
            />
        </View>
    )
};

export default CocktailsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})