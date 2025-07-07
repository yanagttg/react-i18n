import { useState } from 'react';
import './App.css'
import { LanguageSwitch } from './components/LanguageSwitch/LanguageSwitch';
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [language, setLanguage] = useState('de');
  return (
  <div class="app">
    <Header language={language} />
    <Main />
    <Footer />
  </div>
);
};

export default App
