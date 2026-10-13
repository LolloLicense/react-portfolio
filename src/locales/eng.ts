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
  cv: {
    role: 'Junior Web Developer | Web Designer | Copywriter',

    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Web Editor & Project Manager',
          workplace: 'Visit Västkusten / formerly Södra Bohuslän Turism',
          dates: 'March 2022 - August 2024',
        },
        {
          role: 'Head Chef',
          workplace: 'Björholmens Hotell & Restaurang',
          dates: 'January 2019 - August 2021',
        },
        {
          role: 'Sous Chef & Chef',
          workplace: 'Bergabo Hotell, Gamla Brogatan, Happy Belly and others',
          dates: '2009 - 2019',
        },
      ],
    },

    about: {
      title: 'About me',
      text: 'Positive, driven and creative with several years of experience in the hospitality and tourism industry, where I developed a strong sense of service and effective problem-solving. My background combines creativity, communication and structure. I am used to organising, prioritising and packaging ideas, whether for public events, editorial content or digital projects. I am curious, solution-oriented and happy to get stuck in when needed.',
    },

    info: {
      title: 'Other info',
      drivingLicense: 'Driving licence: B',
      languages: 'Languages: Swedish | English',
      references:
        'References? Of course. Get in touch and I’ll send them over.',
      contact: 'Contact me',
      github: 'My GitHub',
    },

    education: {
      title: 'Education',
      items: [
        {
          dates: '2025 - 2027',
          school: 'Medieinstitutet',
          education: 'Front End Developer',
          details: [
            'Frontend development with HTML, CSS, Tailwind, JS, TS & React',
            'APIs, Node.js, Express & databases',
            'UX/UI design, Figma & responsive development',
            'Git, GitHub & version control',
          ],
        },
        {
          dates: '2024 - 2025',
          school: 'Karlskoga folkhögskola',
          education: 'Web Design & Web Development',
          details: [
            'Frontend development with HTML, CSS, Tailwind & JavaScript',
            'UX/UI design in Figma with a focus on accessibility',
            'Graphic design and production',
          ],
        },
        {
          dates: 'Autumn 2022',
          school: 'Berghs School of Communication',
          education: 'Digital Copywriting',
          details: [
            'Digital copy and tone of voice across different channels',
            'SEO, UX copy and content strategy',
            'Writing for blogs, social media, newsletters and websites',
          ],
        },
        {
          dates: '2008 - 2009',
          school: 'Higher Vocational Education',
          education: 'Maritime Gastronomy',
          details: [],
        },
        {
          dates: '2004 - 2007',
          school: 'Uddevalla Gymnasieskola',
          education: 'Media Programme',
          details: [],
        },
      ],
    },
  },
};
export type Locale = typeof eng;
