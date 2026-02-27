import * as admin from 'firebase-admin';

const initFirebase = () => {
    if (!admin.apps.length && process.env.FIREBASE_PROJECT_ID) {
        let privateKey = process.env.FIREBASE_PRIVATE_KEY;
        // Clean up surrounding quotes if user accidentally pasted them into Vercel
        if (privateKey?.startsWith('"') && privateKey?.endsWith('"')) {
            privateKey = privateKey.slice(1, -1);
        }
        // Clean up surrounding apostrophes
        if (privateKey?.startsWith("'") && privateKey?.endsWith("'")) {
            privateKey = privateKey.slice(1, -1);
        }

        try {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: privateKey?.replace(/\\n/g, '\n'),
                }),
            });
            console.log("Firebase Admin Initialized successfully.");
        } catch (error: any) {
            console.error("Firebase Admin Initialization error:", error.message);
            throw error;
        }
    }
};

// Attempt to initialize quietly on import (won't crash if env missing due to the condition inside)
try { initFirebase(); } catch (e) { }

const db = new Proxy({}, {
    get(target, prop) {
        if (!admin.apps.length) {
            initFirebase(); // Try again when a request actually needs DB
        }
        if (!admin.apps.length) {
            throw new Error(`Firebase not initialized. Vercel Env Vars are missing. (PROJECT: ${process.env.FIREBASE_PROJECT_ID})`);
        }
        return (admin.firestore() as any)[prop];
    }
}) as admin.firestore.Firestore;

export { admin, db };
