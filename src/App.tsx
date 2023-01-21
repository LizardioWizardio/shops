import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import Navigation from "./components/Navigation";
import ShopDetailPage from "./pages/ShopDetailPage";

function App() {
  return (
    <>
        <Navigation />
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/auth" element={<AuthPage />}/>
            <Route path="/shop/:id" element={<ShopDetailPage /> }/>
        </Routes>
    </>
  );
}

export default App;
