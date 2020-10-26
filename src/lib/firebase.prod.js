import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) Uncomment to push data to firebase
import { seedDatabase } from '../seed';

const config = {};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) Re-comment this after pushing data

export { firebase };
