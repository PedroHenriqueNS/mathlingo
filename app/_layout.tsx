import '../global.css';

import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { useColorScheme, Appearance, Text } from 'react-native';
import { fontList } from '~/constants/fonts';
import { SQLiteProvider } from 'expo-sqlite';
import { migrateDbIfNeeded } from '../db/migrations';
import ActivitiesProvider from '~/context/ActivitiesContext';
import { GluestackUIProvider } from '~/components/ui/gluestack-ui-provider';

export default function Layout() {

  // Appearance.setColorScheme('light'); 
  const colorScheme = useColorScheme();

  const [loaded] = useFonts(fontList);

  // useEffect(() => {
  //   initDatabase().then(async (db) => {
  //     const result = await db.getAllAsync('SELECT * FROM activities');
  //     console.log(result)
  //   });
  // }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SQLiteProvider databaseName="mydb.db" onInit={migrateDbIfNeeded}>
      <ActivitiesProvider>
        <GluestackUIProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: colorScheme === "dark" ? "#131e24" : "#F1F1F1",
              },
              gestureEnabled: true
            }}
          />
        </GluestackUIProvider>
      </ActivitiesProvider>
    </SQLiteProvider>
  );
}
