import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB0ND_kw9Pokm8kGYd090tVip7dc_1J1Os",
    authDomain: "appforme-5d1c0.firebaseapp.com",
    databaseURL: "https://appforme-5d1c0-default-rtdb.firebaseio.com",
    projectId: "appforme-5d1c0",
    storageBucket: "appforme-5d1c0.appspot.com",
    messagingSenderId: "993775658421",
    appId: "1:993775658421:web:b8c32b7a8efb53de3365fc"
};

const firebase = initializeApp(firebaseConfig);

export default firebase