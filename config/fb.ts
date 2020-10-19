
import admin, {ServiceAccount} from "firebase-admin";
import serviceAccount from "../fb-conf.json"


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: "https://mph-web-site.firebaseio.com"
});

// export type FirestoreCollectionReference = admin.firestore.CollectionReference;
export default admin.firestore().collection("posts");