import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import "./App.scss";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEryOI9adQ7CLIU7Gk6prejfsViksa6Hg",
  authDomain: "home-chill-app.firebaseapp.com",
  projectId: "home-chill-app",
  storageBucket: "home-chill-app.appspot.com",
  messagingSenderId: "1013967845240",
  appId: "1:1013967845240:web:49a3239a9039651eea3a8d",
  measurementId: "G-J7D26KT2LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
