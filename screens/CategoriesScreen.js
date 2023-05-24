import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../data/categories'
import CategoryItem from '../components/CategoryItem'

export default function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate("CocktailsOverview", {
                categoryId: itemData.item.id
            });
        }
    
        return <CategoryItem title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }

  return (
    <FlatList 
        data={categories} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2}
    />
)
}

const styles = StyleSheet.create({})