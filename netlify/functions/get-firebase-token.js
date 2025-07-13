// netlify/functions/get-firebase-token.js
const admin = require("firebase-admin");
require("dotenv").config();
// Securely initialize Firebase Admin SDK from environment variables
// These will be set in the Netlify UI, NOT here in the code.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

exports.handler = async function (event, context) {
  // Generate a unique ID for an anonymous user
  const uid = crypto.randomUUID();

  try {
    // Create a custom token for the user
    const customToken = await admin.auth().createCustomToken(uid);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: customToken }),
    };
  } catch (error) {
    console.error("Error creating custom token:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create custom token." }),
    };
  }
};
