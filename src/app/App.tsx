import React from 'react';
import './global.scss';
import { Route, Routes } from 'react-router-dom';
import { Hidden } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import NavBar from "../components/layout/ui/navigation/NavBar";
import InfoPage from "./info-page/InfoPage";
import LanguagePage from "./language-page/LanguagePage";
import NotFoundPage from "./not-found-page/NotFoundPage";
import LangId from "./language-page/lang-id/LangId";
import BottomNav from "../components/layout/ui/navigation/bottom-nav/BottomNav";
import ToastMessage from "../components/layout/common/alerts/toast-message/ToastMessage";
import HomePage from "./home-page/HomePage";

function App() {
  return (
      <div className="App">
        <NavBar>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'information'} element={<InfoPage />} />
            <Route path={'languages'} element={<LanguagePage />} />
            <Route
                path={'languages/:lang'}
                element={<LangId />}
            />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
          <Hidden mdUp>
            <Toolbar />
            <BottomNav />
          </Hidden>
        </NavBar>
        <ToastMessage />
      </div>
  );
}

export default App;
