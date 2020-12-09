
import admin from "firebase-admin";
// import serviceAccount from "../fb-conf.json"
import { ServiceAccount } from 'firebase-admin'

const serviceAccount = {
  'type': process.env.type,
  "project_id": process.env["project_id"],
  "private_key_id": process.env["private_key_id"],
  "private_key": process.env["private_key"],
  "client_email": process.env["client_email"],
  "client_id": process.env["client_id"],
  "auth_uri": process.env["auth_uri"],
  "token_uri": process.env["token_uri"],
  "auth_provider_x509_cert_url": process.env["auth_provider_x509_cert_url"],
  "client_x509_cert_url": process.env["client_x509_cert_url"]
}


if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: "https://mph-web-site.firebaseio.com"
  });
}

export const toDate = (seconds: number, nanoseconds: number) => new admin.firestore.Timestamp(seconds, nanoseconds).toDate()

// export type FirestoreCollectionReference = admin.firestore.CollectionReference;
export const posts =  admin.firestore().collection("posts");
export const comments = admin.firestore().collection("comments")
export {admin}