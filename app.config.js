// app.config.js
module.exports = ({ config }) => ({
  ...config,
  expo: {
    name: "money-tracker",
    slug: "money-tracker",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "moneytracker",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: { supportsTablet: true },

    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.dogscriptdev.moneytracker",
    },

    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splashImage.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],

    experiments: { typedRoutes: true },

    extra: {
      router: {},
      eas: { projectId: "2d7f9157-35b2-4205-a778-1f9ff85d70e1" },

      firebase: {
        apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
      },
      cloudinary: {
        cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      },
    },
  },
});
