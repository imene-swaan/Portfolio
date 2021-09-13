const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Imene KOLLI | Portfolio",
  description:
    "A Data Scientist with a Master's degree in Applied Statistics who thrives to create AI-based solutions using machine learning along with Natural Language Processing",
  og: {
    title: "Imene Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Imene KOLLI",
  logo_name: "Imene KOLLI",
  resumeLink: "https://drive.google.com/file/d/19Y6VqLjncHbmL8nfNFqTkD9rA6uYfaei/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/imenekolli/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/imene-swaan",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/imene0swaaaan",
    },
    {
      siteName: "Sololearn",
      iconifyClassname: "simple-icons:sololearn",
      style: {
        color: "white",
      },
      profileLink: "https://www.sololearn.com/profile/16182357",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.hackerrank.com/imenekolli",
    },
    {
      siteName: "Datacamp",
      iconifyClassname: "simple-icons:datacamp",
      style: {
        color: "white",
      },
      profileLink: "https://datacamp.com/profile/imenekolli"
    }
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable Machine learning & Deep learning models",
        "⚡ Experience in working with NLP & Sentiment analysis projects",
        "⚡ Hands-on experience with Data cleaning, processing, & analysing ",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          icon_url: "tensorflow.png",
          
        },
        {
          skillName: "Python",
          icon_url: "python.png",
        },
        {
          skillName: "Jupyter Notebooks",
          icon_url: "jupyter.png",
        },
        {
          skillName: "Pandas",
          icon_url: "pandas.png",
        },
        {
          skillName: "NumPy",
          icon_url: "numpy.png",
        },
        {
          skillName: "Genism",
          icon_url: "genism.png",
        },
        {
          skillName: "SciPy",
          icon_url: "scipy.png",
        },
      ],
    },
    {
      title: "Econometrics and Statistics",
      fileName: "FullStackImg",
      skills: [
        "⚡ Strong background in statistical and econometric modeling along with time series forecasting",
        "⚡ High analytic capabilities to interpret results and derive insight ",
        "⚡ Use of visualization tools to report and communicate findings",
      ],
      softwareSkills: [
        {
          skillName: "SPSS",
          icon_url: "spss3.png",
        },
        {
          skillName: "Postgresql",
          icon_url: "postgresql.png",
        },
    
        {
          skillName: "Octave",
          icon_url: "octave.png",
        },
        {
          skillName: "Seaborn",
          icon_url: "seaborn.png",
        },
        {
          skillName: "Matplotlib",
          icon_url: "matplotlib.png",
        },
        {
          skillName: "Tableau",
          icon_url: "tableau.png",
        },

      ],
    },
  ],
};


const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master of Science in Applied Statistics",
          subtitle: "Ecole nationale superieure de statistique et d'economie appliquee - ENSSEA, Alger",
          date: "2018 - 2021",
          content: [],
          
        },
        {
          title: "Nanodegree Program, Data Analyst",
          subtitle: "Udacity, Online",
          date: "2020",
          content: [],
        },
        {
          title: "Preparatory Class in Business/Managerial Economics",
          subtitle: "Ecole preparatoire en sciences economiques,commerciales et de gestion, Alger",
          date: "2016 - 2018",
          content: [],
          
        },
      ],
    },
    {
      title: ["Honors and Achivements"],
      data: [
        {
          title: "Honors and Awards",
          content: [
            "Top of class student award 2020 - ENSSEA",
            "Ambassador Award of Excellence 2019 - IYMC",
          ],
        },
        {
          title: "Achievements",
          content: [
            "#24/8000 Global Finalist of JTI Make It Bright Challenge 2020",
            "National Winner of JTI Make IT Bright Challenge 2020.",
            "International Youth Math Challenge successful participant.",
            "#1/3 Innovation camp winner 2020 by MEPI"
          ],
        },
      ],
    },
    {
      title: ["Volunteer Experience"],
      data: [
        {
          title: "Embassador",
          subtitle: "International Youth Math Challenge",
          content: [
          ],
        },
        {
          title: "Embassador",
          subtitle: "WomenTech Network",
          content: [
          ],
        },
        {
          title: "Data Collector",
          subtitle: "CoronaTracker",
          content: [
          ],
        },
        {
          title: "Fundraiser",
          subtitle: "Economic Ingenious Club",
          content: [
          ],
        },
      ],
    },
    {
      title: ["Freelance Experience"],
      data: [
        {
          title: "Mobile UX Design",
          subtitle: "Dirassa Tech",
          content: ["E-learning app for teachers to interact with students during the Covid-19 pandemic"],
        },
        {
          title: "Mobile UX Design",
          subtitle: "TrocINI",
          content: ["E-commerce and Barter App designed for a friend during a hackathon"],
        },
        {
          title: "Mobile UX Design",
          subtitle: "Akhbar'i",
          content: ["News app that connects the government authorities with citizens"],
        },
        {
          title: "Website UX Design",
          subtitle: "The Gate",
          content: ["Website that connects students with companies for virtual internship programs"],
        },
      ],
    },
  ],
};



export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
