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
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  title: "Chidi's Resume",
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
    title: 'Language Voice Translator',
    description:
      'An app that helps tourists with translations, you record what you want to say and translate to the language of choice',
    url: 'https://main.d38cfn0l66nvp2.amplifyapp.com/',
    image: porfolioImage1,
  },
  {
    title: 'Retail Point of sale system',
    description: 'Give a short description of your project here.',
    url: 'https://main.d2gj5j6qt1l9nb.amplifyapp.com/',
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
    url: '',
    image: porfolioImage4,
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
    content: <p>Bachelors degree in Chemical engineering</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'Safeguard Global UK',
    title: 'Software Engineer',
    content: (
      <p>
        <li>
          Led the building of the AWS Data Sync Infrastructure as a code service that leverages the power of AWS Glue to
          catalogue data from the Monolith data source to the microservices database as a way of decoupling the
          dependence on the source database
        </li>
        <li>
          {' '}
          Conceptualized the data transformation AWS Lambda Service built using Python for maintaining data integrity.
        </li>
        <li>
          {' '}
          Drove the pixel-perfect translation of the mocks from the UI/UX Engineer to Performant React Components.
        </li>
        <li>
          {' '}
          Part of the team employing the powers of AWS and React to power the payroll tasks and approvals utility
          software of the company.
        </li>
        <li> Employed BroswerStack's UI Test Automation techniques to maintain the quality of the UI</li>
        <li> Responsible for automating AWS services deployment using Circle CI.</li>
        <li>
          Built extensive test coverage for all new features using the Jest testing framework which reduced user
          complaints.
        </li>
      </p>
    ),
  },
  {
    date: 'November 2021 - November 2022',
    location: 'GitStartHQ (YC S19), California USA',
    title: 'Software Engineer',
    content: (
      <p>
        <li>
          Direct and Design Software solutions for a financial technology company in the Philippines while remaining
          focused on the client's need.
        </li>
        <li> Developed and maintained a web-based application using React, and Node.js</li>
        <li> Improved the performance of the application by implementing efficient algorithms and data structures</li>
        <li> Collaborated with the team to design and implement new features and improve the user experience</li>
      </p>
    ),
  },
  {
    date: 'October 2020 - December 2021',
    location: 'Tuteria',
    title: 'Software Engineer',
    content: (
      <p>
        <li>
          Worked closely with the product team in building user-friendly and accessible interfaces using typescript and
          React.js frontend library.
        </li>
        <li>
          {' '}
          Responsible for building a cloudinary service in Node.js that was utilized by the company in handling all
          forms of media from the company platforms.
        </li>
        <li>
          {' '}
          Responsible for building the full frontend application for the tutor's application, working closely with the
          CEO in designing a smooth user experience for the tutors and a great onboarding experience for new tutors.
        </li>
        <li>
          {' '}
          Built extensive test coverage for all new features using the uvu testing framework which reduced user
          complaints.
        </li>
        <li>
          {' '}
          Worked within an agile team that revamped the company's platform automating client requests for tutors,
          utilizing the powers of typescript and the full-stack javascript framework, Next.js. Worked within an agile
          team maintaining the legacy codebase written in Django python framework.
        </li>
        <li> Team lead for maintaining the python microservices in the starlette ASGI framework.</li>
      </p>
    ),
  },
  {
    date: 'June 2018 - December 2021',
    location: 'Emedia Bay',
    title: 'Website Developer/Cofounder',
    content: (
      <p>
        <li>
          Handling all verbal and written communications between hosting companies, clients, and vendors. Meeting with
          the prospective clients to review website, and gather the client’s specifications for new or existing
          websites.
        </li>
        <li> Designing, coding a new website for the eagle project using CSS, HTML, javascript, jquery.</li>
        <li> Built designed and maintained a website for emediabay.com using wordpress and php.</li>
        <li> Built, designed and maintained the website for zuritek.com using HTML, CSS and Javascript</li>
        <li> Designing and implementing the front-end using HTML5, CSS3, Javascript</li>
        <li> Built custom websites using Bootstrap and WordPress.</li>
        <li> Preparing multiple designs and wireframes for clients approval before proceeding with development.</li>
      </p>
    ),
  },
  {
    date: 'June 2020 - October 2020',
    location: 'Sharpstudy Vancouver',
    title: 'Software Developer',
    content: (
      <p>
        <li> Responsible for building the backend of the courses feature using GraphQL</li>
        <li> Worked within an agile team that developed an adaptive education roadmap feature for students</li>
        <li> Responsible for building the GraphQL APIs for the dashboard of the students</li>
        <li>
          {' '}
          Worked closely with the lead engineer in onboarding new interns and helped them understand the existing
          codebase.
        </li>
        <li>
          {' '}
          Utilized the power of Javascript to create APIs for internal use thereby reducing the time to ship frontend
          features and increasing productivity.
        </li>
        <li>
          {' '}
          Responsible for hosting the backend development APIs on Heroku (PAAS) which was utilized by the frontend team.
        </li>
      </p>
    ),
  },
  {
    date: 'October 2015 - July 2019',
    location: 'Oris Educational Centre',
    title: 'Science Instructor/Computer Coordinator',
    content: (
      <p>
        <li>
          Utilized various tools such as lucid chart, and scratch to build a solid foundation for web development for my
          students
        </li>
        <li>
          {' '}
          Prepared students in Physics and Chemistry for the Cambridge International General Certificate for Secondary
          Education with an 88% pass rate.
        </li>
        <li>
          {' '}
          Prepared students for the Advanced level Cambridge International General Certificate for Secondary Education
          with a 72% pass rate.
        </li>
        <li>
          {' '}
          Lead for managing and maintaining school data using various tools such as SQL Databases and microsoft excel
        </li>
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
      name: 'Malik Teniola',
      text: 'A creative and amazing engineer, always the last to go. His work ethic is a thing of marvel',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Usman Abdulrahman',
      text: 'Chidi is someone that no matter the design from the UI designers, he has the ability to replicate it with a pixel perfect frontend development',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Peter Ibe',
      text: 'As cofounder and CTO of Emedia Bay, he had the ability to cater for any customer request no matter how ridiculous they might sound',
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
      text: 'chidibede',
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
