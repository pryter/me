import admin from "firebase-admin"

const initialiseDB = (): FirebaseFirestore.Firestore => {
  try {
    return admin.firestore()
  } catch {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FB_PROJECT_ID,
        privateKey: process.env.FB_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        clientEmail: process.env.FB_CLIENT_EMAIL,
      }),
    })
    return admin.firestore()
  }
}

export { initialiseDB }
