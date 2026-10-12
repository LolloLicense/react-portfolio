export const sv = {
  nav: {
    case: 'Case',
    skills: 'Skills',
    bingo: 'Bingo',
    contact: 'Kontakt',
  },
  bingo: {
    winTitle: 'Kul',
    winMessage: 'Du har fattat min vibe',
    playAgain: 'Spela igen',
    contact: 'Kontakta mig',

    items: [
      {
        id: 1,
        text: 'Starka känslor för typografi',
      },

      {
        id: 2,
        text: '2px off känns i själen',
      },

      {
        id: 3,
        text: 'Ctrl + Z är life',
      },
      {
        id: 4,
        text: 'Biome över ESLint & Prettier',
      },
      {
        id: 5,
        text: 'Spacing ska absolut petas i',
      },
      {
        id: 6,
        text: 'Bra copy gör mig knäsvag',
      },
      {
        id: 7,
        text: 'React är stairway to heaven',
      },
      {
        id: 8,
        text: 'Alt-texter ska också ha kärlek',
      },
      {
        id: 9,
        text: 'Bilder ska lira med brand',
      },
      {
        id: 10,
        text: 'Älskar inte grova box-shadows',
      },
      {
        id: 11,
        text: 'En tab till skadar ingen',
      },
      {
        id: 12,
        text: 'Älskar beanies & solbrillor',
      },
      {
        id: 13,
        text: 'En sucker för Mac',
      },
      {
        id: 14,
        text: 'TODO-listor är dunder',
      },
      {
        id: 15,
        text: 'Grid ska sitta som en smäck',
      },
      {
        id: 16,
        text: 'Rätt ikon = guld',
      },
    ],
  },
  contact: {
    close: 'Stäng',
    title: 'Säg hej!',
    text: 'Har du ett projekt, en idé eller bara något kul att berätta?',
    name: 'Namn',
    email: 'E-post',
    phone: 'Telefon',
    message: 'Meddelande',
    send: 'Skicka',

    subject: 'Vibe',
    subjects: {
      business: 'Jobbsnack',
      plotTwist: 'Slumpmässigt',
    },

    placeholders: {
      name: 'Ditt namn',
      email: 'din@email.se',
      phone: '070-123 45 67',
      message: 'Skriv ett meddelande...',
    },
    errors: {
      name: 'Jag behöver minst två bokstäver att jobba med.',
      email: 'Hmm, den där mejladressen ser inte riktigt rätt ut.',
      phone: 'Jag behöver ett telefonnummer också.',
      subject: 'Välj en vibe först.',
      message: 'Du glömde själva meddelandet.',
    },
    success: {
      title: 'Tack!',
      text: 'Du har officiellt gjort min inkorg lite roligare. Nu är bollen hos mig, återkommer inom kort.',
    },
  },
};
export type Locale = typeof sv;
