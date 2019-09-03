export const projects = [
    { 
      name: "BusLonBus" ,
      description:"Simple and efficient London Bus app written in pure vanilla JavaScript using lastest features.",
      github:"https://github.com/crianonim/buslonbus",
      live:"https://crianonim.github.io/buslonbus/",
      screenshot:"https://camo.githubusercontent.com/f2e6ffdb23601b6f87f402c887167ebc9e6aaf74/68747470733a2f2f692e696d6775722e636f6d2f5376786f5153452e706e67",
      problem:`I want to be quickly find next arrivals at selected bus stop, chosen based on my location or code displayed at the stop.
       I would like to bookmark selected stops and fetch fresh predictions when I want.
      I need this app to be fast and lightweight, working with and without GPS and even poor internet access.`,
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
        problem:`I want to be able to test API endpoints. I don't want to run a heavy, feature rich app like postman as I need basic functionality.
        I need to be able to make request easily, selecting a HTTP method, pass parameters and set headers. I would like Authorisation to be easy to set up.`,
        tech:[
            "Express.js to deal with routing to endpoints",
            "Vue.js frontend",
            "Vuetify component library"
        ],
        learning:[
            "Dealing with API calls",
            "Vue.js framework",
            "Using a component library to create a consistent and professional look",
        ]
      
      }
];
