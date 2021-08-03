import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cullen | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Cullen Wenzlick Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is ',
  name: 'Cullen Wenzlick',
  subtitle: 'Python Enthusiast // Software Developer // Game Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Coding Temple Graduate, Columbus State Community College Associate of Computer Science Student with a Game Developer Track.I'm a Python enthusiast with a passion for learning more languages. The more I learn, the more I can do. C# is next on my 'To Learn' list. Currently learning Godot Game Engine, and have experience using the Unity Game Engine",
  paragraphTwo:
    "My hobbies include music (I'm currently learning guitar/bass), playing video games (currently playing Halo: Master Chief Collection, Halo 5, Age of Empires 2, and Dark Souls 2.), and making video games (some nice people in my college class and I made a game called 'Gooey G'. Read on for more information!).",
  paragraphThree: 'Located in Columbus, Ohio, United States',
  resume: 'https://drive.google.com/file/d/1lzOTPN99wWd7q_MRs_GnYKW8UkbvbuAg/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'superherocreator.jpg',
  //   title: 'Super Hero Creator (WIP)',
  //   info: 'Using React and Javascript, all users will be able to search for one hero, all heroes, or villans or heroes.',
  //   info2: 'Users will need to be authenticated and authorized in order to Create, Update, and Delete the hereos that they make',
  //   url: '',
  //   repo: 'https://github.com/Raenllanthos/superherocreator', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'drone.jpg',
    title: 'Drone Inventory',
    info: 'Using React, Flask, REST, and API calls, we are able to create new drones with information, update them, and delete them. You have to be signed-in in order to view any of the drones (and wait for the information to call and deliver).',
    info2:
      "This website is live on using Google's Firebase. Getting the API Key, comes from another week project that was uploaded to Heroku and uses a different folder of work (a different repo too).",
    url: 'https://drone-inventory-r63-cw.firebaseapp.com/',
    repo: 'https://github.com/Raenllanthos/drones_firebase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gooey.jpg',
    title: 'Gooey G - Lead Programmer',
    info: "A CSCC Game Project for students in their last semester of Spring 2021. A group of about 11 students created this story of a slime named Gooey G who has to escape a tower he's trapped in.",
    info2:
      'Being Lead Programmer, my role was to make sure all of the programmers were doing their job and to make sure of all of the necessary script pieces fit where they needed to be.',
    url: 'https://cscc-game-projects.itch.io/gooey-g-sp2021',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Interested? Coffee's on me.",
  btn: "Let's Talk",
  email: 'cullen.wenzlick@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https:twitter.com/_cullenoscopy_',
    },
    {
      id: nanoid(),
      name: 'itch-io',
      url: 'https://raenllanthos.itch.io',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cullen-wenzlick',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Raenllanthos',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
