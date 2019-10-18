export const projects = [
  { 
    name: "SVaroG" ,
    type:"personal",
    description:"SVG editor and generator focused on precision and manually updating the shape properties",
    github:"https://github.com/crianonim/svarog",
    live:"https://crianonim.github.io/svarog/",
    screenshot:["img/svarog/svarog1.webp","img/svarog/svarog2.webp","img/svarog/svarog_mobile.webp",],
    cardimage:"img/svarog/_svarog1.webp",
    stack:["react","svg","sass","bulma","jest"],
    problem:[
     `create and edit a SVG`,
     `work offline if needed`,
     `being able to save current work locally`,
     `import existing SVG`
    ],
    tech:[
        "React with hooks",
        "SVG",
        "Sass",
        "Jest and Enzyme",
        "Bulma"
    ],
    learning:[
        "Creating, displaying, parsing and manipulating SVG and their child element using code",
        "Using Bulma css library for consistent look",
        "Use React with hooks (including custom hooks) to manage the UI",
        "Testing React components with Enzyme",
    ]
  
  },
  { 
    name: "BusLonBus" ,
    type:"personal",
    description:"Simple and efficient London Bus app written in pure vanilla JavaScript using lastest features.",
    github:"https://github.com/crianonim/buslonbus",
    live:"https://crianonim.github.io/buslonbus/",
    screenshot:["img/buslonbus/img1.webp","img/buslonbus/img2.webp","img/buslonbus/img3.webp","img/buslonbus/BusLonBus.webm"],
    cardimage:"img/buslonbus/_img1.webp",
    stack:["js","html","pwa"],
    problem:[
      `quickly find next arrivals at selected bus stop, chosen based on my location or code displayed at the stop`,
      `bookmark selected stops`,
      `update/fetch fresh predictions when I want`,
      `have an app that is fast and lightweight, working with and without GPS and even poor internet access`
    ],
    tech:[
        "Plain vanilla js, not meant to be comapatible with all browsers but to utilise the latest in web technologies"
    ],
    
    learning:[
        "HTML template element",
        "Custom elements",
        "It is not always easy to style custom elements protected with shadow root",
        "Using TFL Api",
        "Utilising Location Web API",
        "Installable Progressive Web App",
    ]
  
  },
  { 
    name: "Autsera" ,
    type:"team",
    description:"Game for children with highly functioning autism, PWS in React for Autsera charity as part of Tech For Better programme",
    github:"https://github.com/fac-17/Autsera",
    live:"https://autsera.netlify.com/",
    screenshot:["img/autsera/autsera0.webp","img/autsera/autsera1.webp","img/autsera/autsera2.webp","img/autsera/autsera3.webp","img/autsera/AutseraHelpFinal.mp4"],
    cardimage:"img/autsera/_autsera0.webp",
    stack:["react","pwa"],
    problem:[
      "play a game that is suitable for children with autism",
      "install game on my device and play offline",
      "automatically save my progress on the device"
    ],
    tech:[
        "React",
        "React Router",
        "PWA",
        "Jest and react testing library",
        "Sass",
        "Netlify"
    ],
    learning:[
        "Setting up a React app with installable PWA",
        "Caching dynamic content for offline use",
        "Collaboration with the Product Owner",
        "Integrating Github, Netlify, Travis and CodeCov to work together",
      ]
  
  },


  { 
      name: "Listonosz" ,
      type:"personal",
      description:"Postman clone run as a web app either locally or hosted in the cloud.",
      github:"https://github.com/crianonim/listonosz",
      live:"https://listonosz-postman.herokuapp.com/",
      screenshot:["img/listonosz/listonosz1.webp","img/listonosz/listonosz2.webp","img/listonosz/listonosz3.webp","img/listonosz/listonosz4.webp"],
      cardimage:"img/listonosz/_listonosz1.webp",
      stack:[
        "vue","vuetify","express"
      ],
      problem:[
       `be able to test API endpoints`,
       `be able to make request easily, selecting a HTTP method, url, pass parameters and set headers`,
       `have an easy way to set up Authorisation if needed`,
       `have an lightweight web app that covers my basic needs as opposed to heavy and feature rich app like postman`   
      ],
      tech:[
          "Express.js to deal with routing to endpoints",
          "Vue.js frontend",
          "Vuetify component library"
      ],
      learning:[
          "Dealing with API calls",
          "Vue.js framework",
          "Using a component library to create a consistent and professional look",
          "Working with docker, creating and running containers, uploading images to DockerHub"
      ]
    
    },
    { 
      name: "FoodMiles" ,
      type:"team",
      description:"Check how far your shopping travels from the place it was produced until it reaches your supermarket. Make informed decision where to shop.",
      github:"https://github.com/crianonim/FoodMiles",
      live:"https://foodmiles.herokuapp.com",
      screenshot:["img/foodmiles/food1.webp","img/foodmiles/food2.webp","img/foodmiles/food3.webp","img/foodmiles/food4.webp"],
      cardimage:"img/foodmiles/_food1.webp",
      stack:["node","express","handlebars","pg"],
      problem:[
        "select my shopping items",
        "see overview of supermarkets and how they fare as it comes to local produce",
        "see origins of all the produce I want to buy and how they contribute to the score"
      ],
      tech:[
          "Node.js",
          "Express.js",
          "Handlebars",
          "PostgreSQL",
          "Tape"
      ],
      learning:[
          "Moving business logic to database",
          "Unit and integration testing",
          "Design sprint",
          "User testing",
          "Scrum master duties (my role in the team) "
        ]
    
    },
    { 
      name: "Tytubka" ,
      type:"personal",
      description:"Web app to store and download Youtube videos to watch offline.",
      github:"https://github.com/crianonim/tytubka",
      live:"https://tytubka.jans.site/#/",
      screenshot:["img/tytubka/tytubka0.webp"],
      cardimage:["img/tytubka/_tytubka0.webp"],

      stack:["vue","express"],
      problem:[
       `find a video if youtube link is entered`,
       `choose format and quality from the available for a given video`,
       `download directly a video file to my device even if I'm not logged in`,
       `be able to log into my account using my Google account`,
       `store the video on the server on my account and retrieve later (when on wifi)`,
       `delete stored videos from my account`,   
      ],
      tech:[
          "Vue.js frontend",
          "Youtube API",
          "Google Authorisation mechanism",
          "Express.js"
      ],
      learning:[
          "Vue.js framework",
          "Working with complex API like Youtube and using libraries to help with that",
          "Using Google Authorisation both on the frontend but also verifying it and using it to manage users account",
          "Effectively working with filesystem with node.js"
      ]
    
    },
    { 
      name: "BELO News" ,
      type:"team",
      description:"Web app that delivers you news according to your choice.",
      github:"https://github.com/crianonim/Belo-News",
      live:"https://belo.jans.site",
      screenshot:["img/belo/belo1.webp","img/belo/belo2.webp","img/belo/belo3.webp"],
      cardimage:"img/belo/_belo1.webp",
      stack:["node","express"],
      problem:[
        "provide a way to input search term",
        "display news fetched from an external API ",
      ],
      tech:[
          "Express.js",
          "Node.js"
      ],
      learning:[
          "Using external API service to feed data to an app",
          "Integrating Github, Travis, CodeCov and Heroku",
          "Testing routes with supertest",
          "Mocking responses with Nock"
        ]
    
    },{ 
      name: "Trainspiration" ,
      type:"team",
      description:"London is one of the world's leading business centres with a public transport network to match. Business and travel, trains and inspiration; get a daily dose of wisdom live from trainspiration",
      github:"https://github.com/crianonim/trainspiration",
      live:"https://trainspiration.netlify.com/",
      screenshot:["img/trainspiration/trainspiration1.webp","img/trainspiration/trainspiration2.webp","img/trainspiration/trainspiration3.webp"],
      cardimage:"img/trainspiration/_trainspiration1.webp",
      stack:["js","html"],
      problem:[
        "show current tube status using TFL public API",
        "provide an inspiration quote from an external API",
        "show random inspirational picture from an external API"
      ],
      tech:[
          "JS",
          "HTML"
      ],
      learning:[
          "Using three different external API calls, and combine them in our app",
          "Understanding CORS policy and handle problems with it using proxy"
        ]
    
    },
    { 
      name: "Flee your followers!" ,
      type:"team",
      description:"Arcade Game in React",
      github:"https://github.com/crianonim/flee-your-followers",
      live:"https://fyf-react.netlify.com/",
      screenshot:["img/fyf/fyf0.webp","img/fyf/fyf1.webp","img/fyf/fyf2.webp","img/fyf/fyf3.webp"],
      cardimage:"img/fyf/_fyf0.webp",
      stack:["react"],
      problem:[
       `play an arcade game where I have to avoid collision with enemies`,
       `get player and enemies data from Github API `,
       `store high scores in localstorage`
      ],
      tech:[
          "React",
          "react testing library",
      ],
      learning:[
          "Using React with async functionality (setInterval)",
          "Storing data in localstorage",
          "Integrate API calls in React app",
          "Testing components using react testing library"
      ]
    
    },
    
   { 
      name: "No Man's Sky Directory" ,
      type:"personal",
      description:"Companion app to No Man's Sky video game helping to plan crafting and trading aspect of the game.",
      github:"https://github.com/crianonim/nms-directory",
      live:"https://crianonim.github.io/nms-directory",
      screenshot:["img/nms/nms1.webp","img/nms/nms2.webp","img/nms/nms3.webp"],
      cardimage:"img/nms/_nms1.webp",
      stack:["react","sass"],
      problem:[
        `see details of all materials available in the game`,
        `learn what recipes there are to craft/refine given material`,
        `check what a given material is used for`,
        `sort and filter material list using various criteria`
      ],
      tech:[
          "React","Sass"
      ],
      learning:[
          "React with hooks",
          "Scraping the outside sources (game wikipedia pages) to obtain data",
          "Process different data sources in various formats into usable data model object"
      ]
    
    },
    { 
      name: "Echoserver" ,
      type:"personal",
      description:"Highly customisable web service to genrate responses to API calls, CORS proxy service, and radnom content generator in one",
      github:"https://github.com/crianonim/echoserver",
      live:"https://echo-express.herokuapp.com/",
      screenshot:["img/echoserver/echo1.webp","img/echoserver/echo2.webp"],
      cardimage:"img/echoserver/_echo1.webp",
      stack:["node","express"],
      problem:[
        "test api calls from the app I'm working on currently",
        "make api calls with predictable responses so I my app can react accordingly",
        "mock responses with specific status codes and delays so my app is more robust"
      ],
      tech:[
          "Express.js",
          "Node.js"
      ],
      learning:[
          "Designing an API",
          "Responding to different kinds of requests (HTTPS Methods, Accept Headers) with suitable responses",
          "Generating different types of content for API caller consumption"
        ]
    
    },
    // { 
    //   name: "Text-game" ,
    //   type:"personal",
    //   description:"Text based adventure game with crafting and survival and rich dialogs and story.",
    //   github:"https://github.com/crianonim/text-game",
    //   live:"https://crianonim.github.io/text-game/dist/",
    //   screenshot:["img/text_game.webp"],
    //   stack:["vue"],
    //   problem:[
    //    `play a dialog based game both on mobile and desktop`,
    //    `deploy it without a need for the server, just frontend`,
    //    `be able do create, modify and deploy my own scenario without writing code, just json files`,
    //    `save and load game so I can continue playing with no progress loss`,
    //    `have at least one playable game`   
    //   ],
    //   tech:[
    //       "Vue.js frontend",
    //   ],
    //   learning:[
    //       "Vue.js framework",
    //       "Using complex JSON files to create and configure games, scenarios as not hard-coded",
    //       "Create a custimisable and expandable product without knowing how to code"
    //   ]
    
    // },  
    
];
