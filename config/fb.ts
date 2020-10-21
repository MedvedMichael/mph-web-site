
import admin from "firebase-admin";
import serviceAccount from "../fb-conf.json"
import {ServiceAccount} from 'firebase-admin'
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: "https://mph-web-site.firebaseio.com"
  });
}


// export type FirestoreCollectionReference = admin.firestore.CollectionReference;
export default admin.firestore().collection("posts");