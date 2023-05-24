import { useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView, Button } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/List";
import { cocktails } from '../data/cocktails'

function CocktailDetailScreen({ route, navigation }) {
    const cocktailId = route.params.cocktailId;

    const selectedCocktail = cocktails.find((cocktail) => cocktail.id === cocktailId)
    
    function headerButtonPressHandler() {
        console.log('Pressed')
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
            },
            title: selectedCocktail.title
        })
    }, [navigation, headerButtonPressHandler])
    
    return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={ {uri: selectedCocktail.imageUrl} } />
        <Text style={styles.title}>{selectedCocktail.title}</Text>
        <Text style={styles.info}>{selectedCocktail.info}</Text>
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingridientai:</Text>
                </View>
                <List data={selectedCocktail.ingredients}/>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Žingsniai:</Text>
                </View>
                <List data={selectedCocktail.steps} />
            </View>
        </View>
    </ScrollView>
}

export default CocktailDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    info: {
        color: 'white',
        textAlign: 'center',
    },
    subtitle: {
        color: '#e2b497',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 6,
    },
    subtitleContainer: {
        margin: 8,
        padding: 6,
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
})
