import { useState, useEffect } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import CustomCursor from './components/CustomCursor';
import { eng } from './locales/eng';
import { sv } from './locales/sv';
import Hero from './components/Hero';
import CaseSection from './components/case/CaseSection';

function App() {
  const [language, setLanguage] = useState<'sv' | 'eng'>('sv');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const text = language === 'sv' ? sv : eng;

  return (
    <>
      <CustomCursor />
      <Header nav={text.nav} />
      <Aside
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero />
      <CaseSection />
    </>
  );
}

export default App;
