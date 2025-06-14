import '../global.css';

import { Redirect, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { useColorScheme, Appearance, StatusBar } from 'react-native';
import { fontList } from '~/constants/fonts';
import { SQLiteProvider } from 'expo-sqlite';
import { migrateDbIfNeeded } from '../db/migrations';
import ActivitiesProvider from '~/context/ActivitiesContext';
import { GluestackUIProvider } from '~/components/ui/gluestack-ui-provider';
import FiresProvider from '~/context/FiresContext';
import AssetsProvider from '~/context/ImagesContext';

export default function Layout() {

  // Appearance.setColorScheme('light'); 
  const colorScheme = useColorScheme();

  const [loaded] = useFonts(fontList);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SQLiteProvider databaseName="mydb.db" onInit={migrateDbIfNeeded}>
      <ActivitiesProvider>
        <FiresProvider>
          <AssetsProvider>
            <GluestackUIProvider>
              <StatusBar barStyle={'dark-content'} />

              {/* <Redirect href="/activity/1/finish" /> */}

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
          </AssetsProvider>
        </FiresProvider>
      </ActivitiesProvider>
    </SQLiteProvider>
  );
}
