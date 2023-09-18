import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Chidi Resume',
  description: 'Personal portfolio website for Chidi Bede',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chidi Bede Enwereji.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Lagos based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Safeguard Global UK</strong> helping build the future of work
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me experimenting <strong className="text-stone-100">with AI</strong>,
        building productivity softwares <strong className="text-stone-100">Nextrend</strong>, or exploring{' '}
        <strong className="text-stone-100">my gaming passion</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced Fullstack Developer with 5+ years of hands-on expertise in designing, developing, and 
  implementing diverse applications and solutions across various technologies, tools, and programming languages. 
  Proficient in solving complex challenges 
  collaboratively, ensuring user satisfaction, and delivering customer-centric websites.`,
  aboutItems: [
    {label: 'Location', text: 'Lagos', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Nigeria', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Research, Teaching', Icon: SparklesIcon},
    {label: 'Study', text: 'Federal University of Technology Owerri', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Safeguard Global UK', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 2,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Nextjs',
        level: 9,
      },
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'Tailwind UI',
        level: 9,
      },
      {
        name: 'Chakra UI',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Cloud',
    skills: [
      {
        name: 'AWS Services',
        level: 9,
      },
      {
        name: 'Terraform IAAC',
        level: 8,
      },
      {
        name: 'SAM',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Resume website',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Retail Point of sale system',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Movie Database',
    description: 'Database of movies',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'AI Productivity',
    description: 'Productivity services utilizing artificial intelligence',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Live voice translator',
    description: 'Live language translator',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2014',
    location: 'Federal University of Technology',
    title: 'Bachelors in Chemical Engineering',
    content: <p>Bachelord degree in checmical engineering</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'Safeguard Global UK',
    title: 'Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'November 2021 - November 2022',
    location: 'GitStartHQ (YC S19), California USA',
    title: 'Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'October 2020 - December 2021',
    location: 'Tuteria',
    title: 'Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'June 2018 - December 2021',
    location: 'Emedia Bay',
    title: 'Website Developer/Cofounder',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'June 2020 - October 2020',
    location: 'Sharpstudy Vancouver',
    title: 'Software Developer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'October 2015 - July 2019',
    location: 'Oris Educational Centre',
    title: 'Science Instructor/Computer Coordinator',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I have a moderate social media presence, so you can get in touch with me through them as listed or you can send me a mail',
  items: [
    {
      type: ContactType.Email,
      text: 'chidibede@gmail.com',
      href: 'mailto:chidibede@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lagos, Nigeria',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/chidibede',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/chidibede'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/chidibede/'},
];
