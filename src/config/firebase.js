import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
/* import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from '@env';
 */
const firebaseConfig = {
  apiKey: 'AIzaSyA7muM_UVzD070WRTesbYNq40-Zf6OA4xA',
  authDomain: 'mobsport-3e9e3.firebaseapp.com',
  projectId: 'mobsport-3e9e3',
  storageBucket: 'mobsport-3e9e3.appspot.com',
  messagingSenderId: '209510820464',
  appId: '1:209510820464:web:91417dbefbaab524e8a2b5',
  measurementId: 'G-MDC57DEWSN'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);

export { auth, db };
