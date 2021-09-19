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

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Research Intern",
        image: "bp.png",
        subtitle: "Ecole Nationale Superieure de Statistique et d'Economie Appliquee",
        date: "Mar 2021 - Jul 2021",
        content: [
          "Graduation thesis title: Predictive sentiment analysis of tweets using natural language processing techniques. Case Study: Arabic Twittersphere. Grade: 18/20",
          
          "Project: Research on sentiment analysis is used to classify tweets from the Twitter social media platform based on the Hate sentiment. Two techniques were used : Natural Language Processing and Machine Learning Classifiers",
          "The goal is to Automatically Detect Hate Speech in the Tweets from the Arabic Twittersphere written in the Arabic language, in order to reduce the spread of Hate crimes in social media.",
          
        ],
      },
      {
        title: "Business Data Analyst Intern",
        image: "nactus.png",
        subtitle: "SAA Societe Nationale d'Assurance",
        date: "Dec 2020 - Jan 2021",
        content: [
          "As a Business data analyst intern, I actively worked to plan, develop, and execute analyses that support the increasing need for data-driven insights. I learned to deliver meaningful insights, strategic perspectives, and impactful recommendations. My Day-to-Day tasks:",
          "Identifying, cleaning, and validating data",
          "Analyzing data to answer questions, identify trends, and find compelling stories within",
          "Providing insights and recommendations through reports, presentations, and data visualizations",
          "Working closely with other BI and Data team members to set requirements and tackle problems across a variety of projects and properties",
        ],
      },
      {
        title: "Data Science Intern",
        image: "listnr.jpeg",
        subtitle: "Deakin University",
        date: "Sep 2020 - Dec 2020",
        content: [
          "Online Data Science Internship offered by an Artificial Intelligence professor at Deakin University. ",
          "During this internship, I implemented Machine learning and Deep Learning techniques. I worked on projects in collaboration with other companies and laboratories to collect and pre-process data for modelling and deployment."
        ],
      },
      {
        title: "Global Finalist of JTI Make It Bright Challenge 2020",
        image: "ineuron.png",
        subtitle: "JTI Japan Tobacco International",
        date: "Jun 2020 - Dec 2021",
        content: [
          "Once-in-a-lifetime Opportunity to be one of the 24 teams out of 8000, to reach the finals of the Make It Bright Challenge 2020 and represent my country ALGERIA.",
        ],
      },
      {
        title: "Data Analytics Consulting - KPMG Virtual Internship",
        subtitle: "KPMG",
        image: "iitg.svg",
        date: "Jul 2020 - Oct 2020",
        content: [
          "Data Quality Assessment",
          "Data Insights",
          "Data Presentation",
        ],
      },
      {
        title: "Data Analyst - Data@ANZ Virtual Internship",
        subtitle: "ANZ",
        image: "iitg.svg",
        date: "Jul 2020 - Sep 2020",
        content: [
          "Exploratory Data Analysis : Segment the dataset and draw unique insights, including visualization of the transaction volume and assessing the effect of any outliers.",
        ],
      },
      {
        title: "Summer Intern",
        subtitle: "ATM Mobilis",
        image: "iitg.svg",
        date: "Sep 2019 - Oct 2019",
        content: [
          "Creating customer files",
          "Collection and treatment of Sales Data",
          "Creating summary reports",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master of Science - Applied Statistics",
          subtitle: "Ecole nationale superieure de statistique et d'economie appliquee - ENSSEA, Alger",
          date: "2018 - 2021",
          content: [],
          
        },
        {
          title: "Preparatory Class - Business/Managerial Economics",
          subtitle: "Ecole preparatoire en sciences economiques,commerciales et de gestion, Alger",
          date: "2016 - 2018",
          content: [],
        },
        {
          title: "Secondary School Baccalaureate - Experimental Sciences",
          subtitle: "Loulo Ali secondary school, Setif",
          date: "2016",
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
            "NASA Space App Challenge 2020 Galactic Problem-Solver",
            "International Youth Math Challenge successful participant.",
            "#1/3 Innovation camp winner 2020 by MEPI",
          ],
        },
      ],
    },
    {
      title: ["Volunteer Experience"],
      data: [
        {
          title: "Embassador",
          subtitle: "International Youth Math Challenge - IYMC",
          content: ["I provide information about the activity of IYMC, as well as motivate students about joining the competition. Also, I conduct training sessions and workshops to prepare students for the competition."
          ],
        },
        {
          title: "Embassador",
          subtitle: "WomenTech Network",
          content: ["To Inspire 1 000 000 Women in Tech to Drive Change with Purpose and Impact."
          ],
        },
        {
          title: "Data Collector",
          subtitle: "CoronaTracker.com",
          content: ["Collecting data and statistics about Coronavirus spread in my country Algeria and its different cities in order to implement them into the Coronatracker online platform."
          ],
        },
        {
          title: "Fundraiser",
          subtitle: "Economic Ingenious Club - EIC",
          content: ["As a member of the Economic Ingenious Club, my school's student club, I helped in the fundraising and sponsorship of many events organized by the club."
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

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Data Analyst Nanodegree",
      subtitle: "Udacity",
      logo_path: "udacity-01.png",
      certificate_link:
        "https://confirm.udacity.com/WZHANPHH",
      alt_name: "Udacity",
      color_code: "#000000",
    },
    {
      title: "Tableau",
      subtitle: "365 Data Science",
      logo_path: "365-01.png",
      certificate_link:
        "https://learn.365datascience.com/c/7ece3bf7de",
      alt_name: "365 Data Science",
      color_code: "#000000",
    },
    {
      title: "Python for Everybody Specialization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link: "https://coursera.org/share/181def8c0d5dad547b430ca534b05166",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/9f99a222f0103debd9fbd583271419ca",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Analyst Track",
      subtitle: "One million arab coders",
      logo_path: "mac-01.png",
      certificate_link:
        "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/4dcfe80c-85c6-456b-b763-1215e15d1ed9.pdf",
      alt_name: "1mac",
      color_code: "#000000",
    },
    {
      title: "AWS Machine Learning Scholarship",
      subtitle: "Amazon",
      logo_path: "amazon-01.png",
      certificate_link:
        "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/e6b317b3-873b-41b5-861c-e96151a81e92.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&utm_content=sch_600_auto_ndxxx_aws-ml-complet",
      alt_name: "Amazon",
      color_code: "#000000",
    },
    {
      title: "Python 3",
      subtitle: "SoloLearn",
      logo_path: "sololearn-01.png",
      certificate_link:
        "https://www.sololearn.com/Certificate/1073-16182357/jpg/",
      alt_name: "SoloLearn",
      color_code: "#000000",
    },
    {
      title: "AI for Everyone",
      subtitle: "DeepLearning.ai",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/08d6eeb425a3c64fd5a0358a335e6194",
      alt_name: "DeepLearning.ai",
      color_code: "#000000",
    },
    {
      title: "Crash Course on Python",
      subtitle: "Google",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/8052c7e9b44c5b35d7cc9198e58b9010",
      alt_name: "Google",
      color_code: "#000000",
    },
    {
      title: "NASA Space App Challenge",
      subtitle: "NASA",
      logo_path: "nasa-01.png",
      certificate_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:6722172534705545216/",
      alt_name: "NASA",
      color_code: "#000000",
    },
    {
      title: "Data Analytics Virtuel Internship",
      subtitle: "KPMG",
      logo_path: "forage-012.png",
      certificate_link:
        "https://github.com/imene-swaan/KPMG-virtual-internship",
      alt_name: "KPMG",
      color_code: "#000000",
    },
    {
      title: "DATA @ ANZ Program",
      subtitle: "ANZ",
      logo_path: "forage-012.png",
      certificate_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:6710763842772832256/",
      alt_name: "ANZ",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Prabhadevi, Mumbai-400025",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9022817659",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://www.github.com/rohankokkula/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohankokkula/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:rohankokkula01@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soberohan/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

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
