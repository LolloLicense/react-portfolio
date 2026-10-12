// Header navbar
export const eng = {
  nav: {
    case: 'Case',
    skills: 'Skills',
    bingo: 'Bingo',
    contact: 'Contact',
  },
  bingo: {
    winTitle: 'Great',
    winMessage: 'You are my kind of people!',
    playAgain: 'Play again',
    contact: 'Contact me',
    items: [
      {
        id: 1,
        text: 'Strong feelings about typography',
      },

      {
        id: 2,
        text: '2px off hurts my soul',
      },

      {
        id: 3,
        text: 'Ctrl + Z is life',
      },

      {
        id: 4,
        text: 'Biome over ESLint & Prettier',
      },

      {
        id: 5,
        text: 'Spacing always needs tweaking',
      },

      {
        id: 6,
        text: 'Good copy makes me weak',
      },

      {
        id: 7,
        text: 'React is stairway to heaven',
      },

      {
        id: 8,
        text: 'Alt text deserves some love too',
      },

      {
        id: 9,
        text: 'Images need to match the brand',
      },

      {
        id: 10,
        text: 'Not a fan of heavy box shadows',
      },

      {
        id: 11,
        text: 'One more tab never hurt anyone',
      },

      {
        id: 12,
        text: 'Love beanies & sunglasses',
      },

      {
        id: 13,
        text: 'A sucker for Mac',
      },

      {
        id: 14,
        text: 'TODO lists are the best',
      },

      {
        id: 15,
        text: 'Grid needs to fit just right',
      },

      {
        id: 16,
        text: 'The right icon = gold',
      },
    ],
  },
  contact: {
    close: 'Close',
    title: 'Say Hey!',
    text: 'Got a project, an idea, or just something fun to share?',
    name: 'Name',
    email: 'E-mail',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',

    subject: 'Vibe?',
    subjects: {
      business: 'Workstuff',
      plotTwist: 'Randome',
    },

    placeholders: {
      name: 'Your name',
      email: 'you@email.com',
      phone: '+46 70 123 45 67',
      message: 'Write a message...',
    },

    errors: {
      name: 'Give me at least two letters to work with.',
      email: "Hmm, that email address doesn't look quite right.",
      phone: 'I need a phone number too.',
      subject: 'Pick a vibe first.',
      message: 'You forgot the actual message.',
    },
    success: {
      title: 'Thanks!',
      text: "You've officially made my inbox a little more fun. The ball's in my court now, I'll get back to you soon.",
    },
    section: {
      title: 'Contact',
      intro: 'Got something fun in the works?',
      text: "Maybe your website needs some work, you're building something completely new, or you've got a digital idea that's been sitting around for a little too long. Big, small, half-finished or still just a thought. I'm always curious.",
      button: 'Say hey!?',
    },
  },
};
export type Locale = typeof eng;
