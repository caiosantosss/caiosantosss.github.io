import type { ImageMetadata } from 'astro';
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
  featured?: boolean;
}

export const projects: Project[] = [
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
