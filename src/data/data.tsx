import {
  DownloadIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/Publication/publication-1.jpg';
import porfolioImage2 from '../images/Publication/publication-2.jpg';
import porfolioImage3 from '../images/Publication/publication-3.jpg';
import porfolioImage4 from '../images/Publication/publication-4.jpg';
import teachingImage1 from '../images/python.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PublicationItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  TeachingItem,

} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Publication: 'Publication',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Teaching: 'Teaching',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Fatima Bagheri`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">NSF-Ascend Postdoctoral Fellow</strong>, currently working
        at <strong className="text-stone-100">The University of Texas at Arlington</strong> 
      </p>
    </>
  ),
  actions: [
    {
      href: './resume',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  description: `I'm a physicist studying extra-solar planets, trying to find aliens or new planets to live on, with a great passion for art and philosophy. Call me Fatima!`,
  aboutItems: [
    {label: 'Interests', text: 'Exoplanets Detection and Formation, Planetary Magnetic Field, Astrobiology, Habitable Planets, Radio Astronomy, Cosmology', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Coding',
    skills: [
      {
        name: 'python',
        level: 10,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Fortran',
        level: 5,
      },
    ],
  },
  
];

/**
 * Publication section
 */
export const PublicationItems: PublicationItem[] = [
  {
    title: 'Solar wind magnetosonic mach number as a control variable for energy dissipation during magnetic storms',
    description: 'During the main phase of many magnetic storms the solar wind Mach number is low and IMF magnitude is large. Under these conditions, the ionospheric potential saturates, and it becomes relatively insensitive to further increases in the IMF magnitude. On the other hand, the dayside merging rate and the potential become sensitive to the solar wind density. This should result in a correlation between the intensity of the auroral electrojets and the solar wind density. In this study we provide a sample of 314 moderate to strong storms and investigate the correlation between Dst index and the energy dissipated in the ionosphere. We show that for lower Mach numbers, this correlation decreases. We also show that the ionospheric indices of the storms with the lower Mach number are less correlated to the geoeffectiveness of the solar wind during these storms.',
    url: 'https://www.frontiersin.org/articles/10.3389/fspas.2022.960535/full',
    image: porfolioImage1,
  },

  {
    title: 'Detection of exoplanet as a binary source of microlensing events in WFIRST survey',
    description: 'We investigate the possibility of exoplanet detection orbiting source stars in microlensing events through WFIRST observations. We perform a Monte Carlo simulation on the detection rate of exoplanets via microlensing, assuming that each source star has at least one exoplanet. The exoplanet can reflect part of the light from the parent star or emit internal thermal radiation. In this new detection channel, we use microlensing as an amplifier to magnify the reflection light from the planet. In the literature, this mode of detecting exoplanets has been investigated much less than the usual mode in which the exoplanets are considered as one companion in binary-lens events. Assuming 72 d of observation per season with the cadence of 15 min, we find the probability of rocky planet detection with this method to be virtually zero. However, there is non-zero probability, for the detection of Jovian planets. We estimate the detection rates of the exoplanets by this method, using WFIRST observation to be 0.012 per cent in single-lens events and 0.9 per cent in the binary-lens events.',
    url: 'https://academic.oup.com/mnras/article/490/2/1581/5579035',
    image: porfolioImage2,
  },
  {
    title: 'The symmetry of the energy momentum tensor does not necessarily reflect the space-time symmetry: a viscous axially symmetric cosmological solution',
    description: 'Applying the method of conformal metric to a given static axially symmetric vacuum solution of the Einstein equations, we have shown that there is no solution representing a cosmic ideal fluid which is asymtotically FLRW. Letting the cosmic fluid to be imperfect there are axially symmetric solutions tending to FLRW at space infinity. The solution we have found represents an axially symmetric spacetime leading to a spherically symmetric Einstein tensor. Therefore, we have found a solution of Einstein equations representing a spherically symmetric matter distribution corresponding to a spacetime which does not reflect the same symmetry. We have also found another solution of Einstein equation corresponding to the same energy tensor with spherical symmetry.',
    url: 'https://arxiv.org/abs/1408.0516',
    image: porfolioImage3,
  },
  {
    title: 'Bayesian Methods for Inferring Missing Data in the BATSE Catalog of Short Gamma-Ray Bursts',
    description: 'The knowledge of the redshifts of Short-duration Gamma-Ray Bursts (SGRBs) is essential for constraining their cosmic rates and thereby the rates of related astrophysical phenomena, particularly Gravitational Wave Radiation (GWR) events. Many of the events detected by gamma-ray observatories (e.g., BATSE, Fermi, and Swift) lack experimentally measured redshifts. To remedy this, we present and discuss a generic data-driven probabilistic modeling framework to infer the unknown redshifts of SGRBs in the BATSE catalog. We further explain how the proposed probabilistic modeling technique can be applied to newer catalogs of SGRBs and other astronomical surveys to infer the missing data in the catalogs.',
    url: 'https://www.mdpi.com/2218-1997/8/5/267',
    image: porfolioImage4,
  },
  
];

/**
 * Teaching section
 */
export const TeachingItems: TeachingItem[] = [
  {
    title: 'Introduction to Python',
    description: '',
    url: 'https://www.cdslab.org/python/',
    image: teachingImage1,
  },
 
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020-2021',
    location: 'The University of Texas at Arlington',
    title: 'Ph.D. in Space Science',
    content: <p></p>,
  },
  {
    date: '2014-2021',
    location: 'Sharif University of Technology',
    title: 'Ph.D. in Astrophysics/Exoplanet Science',
    content: <p></p>,
  },
  {
    date: '2012-2014',
    location: 'Sharif University of Technology',
    title: 'M.Sc. in Gravitation and Cosmology',
    content: <p></p>,
  },
  {
    date: '2007-2012',
    location: 'Sharif University of Technology',
    title: 'B.Sc. in Physics',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'The University of Texas at Arlington',
    title: 'NSF Postdoctoral Fellow',
    content: (
      <p>
       
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
      name: 'Carl Sagan',
      text: 'We are a way for the cosmos to know itself',
    },
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'fxb1495@mavs.uta.edu',
      href: 'mailto:fxb1495@mavs.uta.edu',
    },
    {
      type: ContactType.Location,
      text: 'Physics Department-The University of Texas at Arlington',
    },
    {
      type: ContactType.Github,
      text: 'fagheri',
      href: 'https://github.com/fagheri',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/fagheri'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/fbagheri/'},
  {label: 'Google Scholar', Icon: TwitterIcon, href: 'https://scholar.google.com/citations?user=p3P8_B4AAAAJ&hl=en'},
];


