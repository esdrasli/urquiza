import React from 'react';

import './login.css';


var firebaseConfig = {
  apiKey: "AIzaSyBQWm76nUk7Zh-Atn8QuN9EQqIrXk-SVIQ",
  authDomain: "urquiza-2304f.firebaseapp.com",
  databaseURL: "https://urquiza-2304f.firebaseio.com",
  projectId: "urquiza-2304f",
  storageBucket: "urquiza-2304f.appspot.com",
  messagingSenderId: "564160600882",
  appId: "1:564160600882:web:9201c0f3b2825a1d56552b",
  measurementId: "G-XBGQN258B4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function Login() {
  return (
    <div className="Container">
      <body>
        
      </body>
      <h1>Urquiza</h1>
    </div>
  );
}

export default Login;
