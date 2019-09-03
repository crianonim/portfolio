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
      
      }
];
