import { useState } from 'react';
import Header from './components/Header';
import { eng } from './locales/eng';
import { sv } from './locales/sv';

function App() {
  const [language, setLanguage] = useState('sv');
  const text = language === 'eng' ? sv : eng;
  return (
    <>
      <Header nav={text.nav} />
    </>
  );
}

export default App;
