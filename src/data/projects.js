export const projects = [
    { 
      name: "BusLonBus" ,
      description:"Simple and efficient London Bus app written in pure vanilla JavaScript using lastest features.",
      github:"https://github.com/crianonim/buslonbus",
      live:"https://crianonim.github.io/buslonbus/",
      screenshot:"https://camo.githubusercontent.com/f2e6ffdb23601b6f87f402c887167ebc9e6aaf74/68747470733a2f2f692e696d6775722e636f6d2f5376786f5153452e706e67",
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
          "(progressive web app)",
      ]
    
    },
    { 
        name: "Listonosz" ,
        description:"Postman clone run as a web app either locally or hosted in the cloud.",
        github:"https://github.com/crianonim/listonosz",
        live:"https://listonosz-postman.herokuapp.com/",
        screenshot:"https://camo.githubusercontent.com/5c4b95cc45329b013f26778e14c84a07bd2dff38/68747470733a2f2f692e696d6775722e636f6d2f7072334e364d582e706e67",
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
        name: "Tytubka" ,
        description:"Web app to store and download Youtube videos to watch offline.",
        github:"https://github.com/crianonim/tytubka",
        live:"https://listonosz-postman.herokuapp.com/",
        screenshot:"https://camo.githubusercontent.com/5c4b95cc45329b013f26778e14c84a07bd2dff38/68747470733a2f2f692e696d6775722e636f6d2f7072334e364d582e706e67",
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
        name: "StarTrader" ,
        description:"Space trading game.",
        github:"https://github.com/crianonim/star-trader",
        live:"https://listonosz-postman.herokuapp.com/",
        screenshot:"https://camo.githubusercontent.com/5c4b95cc45329b013f26778e14c84a07bd2dff38/68747470733a2f2f692e696d6775722e636f6d2f7072334e364d582e706e67",
        problem:[
         `play a game in which I am a trader in space!`,
         `travel between trading posts on different planets`,
         `buy and sell goods at changing prices and make profit`
        ],
        tech:[
            "React with hooks",
            "React Material-UI",
            "Redux",
        ],
        learning:[
            "Using React Material-UI component library for a polished look",
            "Customising the app theme",
            "CSS-in-JS and styled components",
            `Using Redux effectively, dealing with the problem of random changes needed for the app
            while keeping the reducers pure and predictable`,
        ]
      
      },
      { 
        name: "SVaroG" ,
        description:"SVG editor",
        github:"https://github.com/crianonim/svarog",
        live:"https://listonosz-postman.herokuapp.com/",
        screenshot:"https://camo.githubusercontent.com/5c4b95cc45329b013f26778e14c84a07bd2dff38/68747470733a2f2f692e696d6775722e636f6d2f7072334e364d582e706e67",
        problem:[
         `create and edit a SVG`,
         `work offline if needed`,
         `being able to save current work locally`,
         `import existing SVG`
        ],
        tech:[
            "React with hooks",
            "SVG",
        ],
        learning:[
            "Creating, displaying, parsing and manipulating SVG and their child element using code",
            "Use React with hooks (including custom hooks) to manage the UI",
        ]
      
      },
      { 
        name: "Text-game" ,
        description:"Text based adventure game with crafting and survival and rich dialogs and story.",
        github:"https://github.com/crianonim/text-game",
        live:"https://crianonim.github.io/text-game/dist/",
        screenshot:"img/text_game.png",
        problem:[
         `play a dialog based game both on mobile and desktop`,
         `deploy it without a need for the server, just frontend`,
         `be able do create, modify and deploy my own scenario without writing code, just json files`,
         `save and load game so I can continue playing with no progress loss`,
         `have at least one playable game`   
        ],
        tech:[
            "Vue.js frontend",
        ],
        learning:[
            "Vue.js framework",
            "Using complex JSON files to create and configure games, scenarios as not hard-coded",
            "Create a custimisable and expandable product without knowing how to code"
        ]
      
      }, { 
        name: "No Man's Sky Directory" ,
        description:"Companion app to No Man's Sky video game helping to plan crafting and trading aspect of the game.",
        github:"https://github.com/crianonim/nms-directory",
        live:"https://crianonim.github.io/nms-directory",
        screenshot:"img/text_game.png",
        problem:[
          `see details of all materials available in the game`,
          `learn what recipes there are to craft/refine given material`,
          `check what a given material is used for`,
          `sort and filter material list using various criteria`
        ],
        tech:[
            "React",
        ],
        learning:[
            "React with hooks",
            "Scraping the outside sources (game wikipedia pages) to obtain data",
            "Process different data sources in various formats into usable data model object"
        ]
      
      },
      { 
        name: "Echoserver" ,
        description:"Highly customisable web service to genrate responses to API calls, CORS proxy service, and radnom content generator in one",
        github:"https://github.com/crianonim/echoserver",
        live:"#",
        screenshot:"img/text_game.png",
        problem:[
        ],
        tech:[
            "Express.js",
            "Node.js"
        ],
        learning:[
            "Designing an API",
            "Responding to different kinds of requests (HTTPS Methods, Accept Headers) with suitable responses",
          ]
      
      },
];
