import * as admin from 'firebase-admin';

if (!admin.apps.length && process.env.FIREBASE_PROJECT_ID) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // Replace literal \n with actual newlines in env variables
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
        console.log("Firebase Admin Initialized successfully.");
    } catch (error: any) {
        console.error("Firebase Admin Initialization error", error.message);
        // Do not crash server on init error if developing locally without keys
    }
}

const db = admin.apps.length ? admin.firestore() : null as any;

export { admin, db };
