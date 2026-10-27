import type { ImageMetadata } from 'astro';
import yotei from '../assets/projects/yotei.jpg';
import farewatch from '../assets/projects/farewatch.jpg';
import pricetracker from '../assets/projects/pricetracker1.png';
import hlj from '../assets/projects/hlj.png';
import kikoe from '../assets/projects/kikoe.png';
import barter from '../assets/projects/barter.png';
import csv from '../assets/projects/csv.png';
import exercises from '../assets/projects/exercises.png';
import crypto from '../assets/projects/crypto.png';

export interface Project {
  title: string;
  kind: string;
  description: string;
  stack: string[];
  image: ImageMetadata;
  alt: string;
  links: { label: string; href: string }[];
  /** Shown instead of links, e.g. for projects not public yet */
  status?: string;
  /** Optional demo video (files in /public) opened in a pop-up player */
  video?: { src: string; poster?: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Yotei 予定',
    kind: 'iOS app · Side project',
    description:
      'Group event planning for my Tokyo friend group: turn the group chat into a plan, see who’s in at a glance, and get daily café, lunch and dinner picks.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
    image: yotei,
    alt: 'Yotei app screens: group chat, event RSVPs and daily picks',
    links: [],
    status: 'In development · not public yet',
    video: { src: '/media/yotei-demo.mp4', poster: '/media/yotei-poster.jpg' },
    featured: true,
  },
  {
    title: 'Fare Watch',
    kind: 'Web app · Side project',
    description:
      'Tracks the cheapest flights from Tokyo to the places I want to go. An hourly job refreshes each search and keeps price history, so I can see whether fares are rising or falling.',
    stack: ['Cloudflare Workers', 'KV', 'JavaScript', 'Travelpayouts API'],
    image: farewatch,
    alt: 'Fare Watch screens: tracked routes with prices and monthly price bars',
    links: [],
    status: 'Personal tool · not public yet',
    featured: true,
  },
  {
    title: 'Price Tracker',
    kind: 'Full-stack web app',
    description:
      'Tracks a product’s price on a website and sends an email alert when the price drops. Scrapes product pages and stores price history.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Nodemailer', 'Cheerio'],
    image: pricetracker,
    alt: 'Price Tracker home page',
    links: [
      { label: 'Live', href: 'https://pricetracker-tau.vercel.app/' },
      { label: 'Source', href: 'https://github.com/caiosantosss/pricetracker' },
    ],
    featured: true,
  },
  {
    title: 'HLJ.com',
    kind: 'E-commerce · Professional work',
    description:
      'Re-architected the HobbyLink Japan platform to serve international customers, delivering features from back-end logic to storefront UI.',
    stack: ['Python', 'Django', 'Wagtail', 'Docker', 'AWS', 'REST'],
    image: hlj,
    alt: 'HLJ.com storefront',
    links: [{ label: 'Visit site', href: 'https://www.hlj.com/' }],
    featured: true,
  },
  {
    title: 'Kikoe+',
    kind: 'Team project · Web app',
    description:
      'A platform promoting high school students’ mental well-being. Built as a team; I focused on the back end and on infrastructure and delivery.',
    stack: ['Back end', 'Cloudinary', 'Heroku', 'GitHub'],
    image: kikoe,
    alt: 'Kikoe+ app screens',
    links: [{ label: 'Source', href: 'https://github.com/caiosantosss/kikoemas' }],
  },
  {
    title: 'Barter',
    kind: 'Web app',
    description:
      'A platform for exchanging belongings, built for people who couldn’t leave their communities during Covid-19 restrictions.',
    stack: ['Heroku'],
    image: barter,
    alt: 'Barter home page',
    links: [{ label: 'Source', href: 'https://github.com/caiosantosss/BARTER' }],
  },
  {
    title: 'Caio Video Share',
    kind: 'Web app',
    description: 'Upload and share videos with other users. Built to deepen my React knowledge.',
    stack: ['React', 'Sanity', 'Google Cloud'],
    image: csv,
    alt: 'Caio Video Share feed',
    links: [
      { label: 'Live', href: 'https://caiovideoshare.vercel.app/' },
      { label: 'Source', href: 'https://github.com/caiosantosss/caiovideoshare' },
    ],
  },
  {
    title: 'Gym Exercises',
    kind: 'Web app',
    description: 'Browse exercises with descriptions, images and demo videos, powered by an exercises API.',
    stack: ['React', 'REST API'],
    image: exercises,
    alt: 'Gym exercises browser',
    links: [{ label: 'Source', href: 'https://github.com/caiosantosss/mygymexercises' }],
  },
  {
    title: 'Crypto Checker',
    kind: 'Web app',
    description: 'Check the price of any cryptocurrency, using the CryptoCompare API.',
    stack: ['React', 'CryptoCompare API'],
    image: crypto,
    alt: 'Crypto Checker price view',
    links: [
      { label: 'Live', href: 'https://cryptoreactchecker.netlify.app/' },
      { label: 'Source', href: 'https://github.com/caiosantosss/cryptoapp' },
    ],
  },
];
