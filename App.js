import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen';
import CocktailDetailScreen from './screens/CocktailDetailScreen';
import CocktailsOverviewScreen from './screens/CocktailsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen 
            name="CocktailsCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'Kokteilių kategorijos'
            }}
          />
          <Stack.Screen name="CocktailsOverview" component={CocktailsOverviewScreen} />
          <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
