import { useState, useEffect } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import CustomCursor from './components/CustomCursor';
import { eng } from './locales/eng';
import { sv } from './locales/sv';
import Hero from './components/Hero';
import CaseSection from './components/case/CaseSection';
import Skills from './components/skills/Skills';
import Bingo from './components/bingo/Bingo';
import ContactModal from './components/contact/ContactModal';

function App() {
  const [language, setLanguage] = useState<'sv' | 'eng'>('sv');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const text = language === 'sv' ? sv : eng;
  const [isContactOpen, setIsContactOpen] = useState(false);
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
      <Skills />
      <Bingo bingo={text.bingo} onContactClick={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        contact={text.contact}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}

export default App;
