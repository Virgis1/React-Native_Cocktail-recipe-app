import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CocktailItem({ id, title, imageUrl, info }) {
    
    const navigaltion = useNavigation();

    function selectCocktailItemHandler() {
        navigaltion.navigate('CocktailDetail', {
            cocktailId: id
        });
    }
    
    return <View style={styles.cocktailItem}>
        <Pressable 
            android_ripple={{color: '#ccc'}}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={selectCocktailItemHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.info}>{info}</Text>
            </View>
        </Pressable>
    </View>
}

export default CocktailItem;

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    cocktailItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
      },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        objectFit: 'fill'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    info: {
        textAlign: 'center',
        marginBottom: 10
    }
})