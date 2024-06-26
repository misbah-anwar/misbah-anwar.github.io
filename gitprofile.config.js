// gitprofile.config.js

const config = {
  github: {
    username: 'misbah-anwar', // Your GitHub org/user name. (Required)
     automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
     exclude: {
       forks: true, // Forked projects will not be displayed if set to true.
       projects: ['misbah-anwar.github.io','sangamone-java','misbah-anwar','my-portfolio',
                  'sangamone-python','smartinternz-ai-ml','customer-churn','githubtest','frontend-webdev','litcoder','worldclock1-app','task-master-app-using-flask'
                 ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
     },
  },
  },
  social: {
    linkedin: 'misbah-anwar',
    medium: 'misbah.anwar',
    phone: '+91 9741546360',
    email: 'misbahanwar0471@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/10MQrK8dJl5C1H4X86DJ5RrFKWMDySITg/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Flutter',
    'Java',
    'Python',
    'C++',
    'SQL',
    'LLMs',
    'HTML',
    'CSS',
    'JavaScript',
    'Postman'
  ],
  experiences: [
        {
      company: 'VIT Chennai',
      position: 'Summer Research Intern',
      from: 'May 2024',
      to: 'Present',
      companyLink: 'https://vit.ac.in',
    },
        {
      company: 'SangamOne Connected Services',
      position: 'Intern',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://sangamone.com',
    },
    {
      company: 'SmartInternz',
      position: 'AI and ML Intern',
      from: 'August 2023',
      to: 'November 2024',
      companyLink: 'https://smartinternz.com',
    },
    {
      company: 'Google Developer Student Club',
      position: 'Data Science Member',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://gdsc.community.dev/vellore-institute-of-technology-vit-chennai',
    },
    {
      company: 'Association for Computing Machinery',
      position: 'Technical Club Member',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://vitchennai.acm.org',
    },
  ],
  certifications: [
    {
      name: 'AZ-104: Microsoft Certified: Azure Administrator Associate',
      body: 'Azure ∙ Cloud ∙ User Services',
      year: 'Dec 2023',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/MisbahAnwar-2581/EF3D85BE25816A58?sharingId=176194A02BE2E349'
    },
    {
      name: 'Object Localization with TensorFlow',
      body: 'Machine Learning ∙ Python ∙ TensorFlow',
      year: 'August 2023',
      link: 'https://www.coursera.org/account/accomplishments/verify/7K2BTKKR35JA'
    },
  ], 
  education: [
    {
      institution: 'Vellore Institute of Technology',
      degree: 'B.Tech Computer Science Engineering (Spl. in AI and ML)',
      from: '2021',
      to: '2025',
      gpa: 8.25
    },
    {
      institution: 'Sri Chaitanya College of Education',
      degree: 'Pre-University, CBSE',
      from: '2019',
      to: '2021',
      agg: 89.8
    },
    {
      institution: 'Mitra Academy',
      degree: 'High School, ICSE',
      from: '2006',
      to: '2019',
      agg: 91.5
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: 'Word Game',
  //     description:
  //       'Created a simple word game for kids using flutter',
  //     //imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://github.com/misbah-anwar/wordgame-app',
  //   },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
   googleAnalytics: {
     id: 'G-BN1LSBK5DR',
   },// GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
   
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3701134',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
       'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,
 };

export default config;
