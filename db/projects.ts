// Image dimension ratios => 1.75
const projects = [
  {
    title: 'Jarvis AI',
    note: 'Implemented real-time chatbot capabilities, integrated with speech recognition and text-to-speech Python-based voice and text assistant capable of real-time interaction and performing automated tasks like web search, file operations, YouTube search, and weather/news updates, Image generation,',
    imgDims: { width: '2496 ', height: '1427' },
    description:'Implemented real-time chatbot capabilities, integrated with speech recognition and text-to-speech Python-based voice and text assistant capable of real-time interaction and performing automated tasks',
    image: '/projects/jarvis.jpg',
    // stack: ['python', 'OpenAI', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/Yashu6826/JarvisAI',
      // live: 'https://buggo.vercel.app',
    },
  },
  {
    title: 'QuickBlog - AI',
    note: 'Integrated Google’s Gemini API to auto-generate SEO-friendly blog titles and descriptions based on the user’s content, reducing manual effort and improving content quality.',
    image: '/projects/blog.png',
    imgDims: { width: '1380', height: '788.5' },
    description: 'Integrated Google’s Gemini API to auto-generate SEO-friendly blog titles and descriptions based on the user’s content, reducing manual effort and improving content quality Enabled real-time content suggestions using AI, enhancing user creativity and speeding up the writing process.',
    // stack: ['React', 'Express',"GenAI","Gemini" ,"Redux","Mongodb"],
    links: {
      github: 'https://github.com/Yashu6826/Blog-AI',
      live: 'https://blog-ai-3m6a.vercel.app/',
    },
  },
  {
    title: 'Airbnb Clone',
    note: '',
    image: '/projects/airbnb.jpg',
    imgDims: {
      width: '2377',
      height: '1358',
    },
    description: 'Developed a full-stack Airbnb clone from scratch using Next.js for the front end, Prisma for database management, and MongoDB for data storage. Designed and implemented a user-friendly interface replicating key features of Airbnb, including property listings, search functionality, booking system, user authentication.',
    // stack: ['React', 'Redux', 'TypeScript'],
    links: {
      github: 'https://github.com/Yashu6826/Airbnb-clone',
      live: 'https://airbnb-clone-je6y.vercel.app/',
    }
  },
  {
    title: 'CryptoCurrencies Tracker',
    note: 'An informational movie website. A categorised grid of movie titles, ratings, descriptions, and more.',
    image: '/projects/cryptocurrency.jpg',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'Real-time cryptocurrency dashboard providing live prices, interactive chart analysis (candlestick, line, volume), historical data with custom time ranges, and technical indicators (SMA, EMA, RSI). Includes market metrics (market cap, 24h volume, % change), portfolio tracking, price alerts, and low-latency updates.',
    // stack: ['Webpack', 'JavaScript', 'TV Maze API'],
    links: {
      github: 'https://github.com/Yashu6826/cryptocurrencies',
      live: 'https://fafinc.netlify.app/',
    },
  },
  {
    title: 'Algorithm Visualiser',
    note: 'A project built on the theme of supporting children around the world. Children who have suffered injuries, diseases, and poverty.',
    image: '/projects/algorithm.jpg',
    imgDims: {
      width: '2337',
      height: '1335',
    },
     description: 'Interactive algorithm visualizer that animates common sorting algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap) and graph algorithms (BFS, DFS, Dijkstra, A*). Features adjustable speed and input size, step/rewind controls, real-time metrics (comparisons, swaps, visited nodes, distances), pseudocode synchronization, and visual highlights for pivots, swaps, and shortest paths — designed as an educational tool for learning and debugging algorithms.',
    // stack: ['Webpack', 'JavaScript'],
    links: {
      github: 'https://github.com/Yashu6826/Algorithm_visualizer',
      live: 'https://algorithm-visualizer-one-theta.vercel.app/',
    },
  },
  {
    title: 'Fullstack Chat app',
    note: 'A fully functional to-do list. It utilises local storage, and the drag-and-drop API in saving, and reordering todos.',
    image: '/projects/chat.jpg',
    imgDims: {
      width: '2345',
      height: '1340',
    },
    description: 'Real-time full-stack chat application powered by WebSockets (e.g., Socket.IO). Supports one-on-one and group chats, typing indicators, read receipts, message history persistence, media/file sharing, user presence/online status, and authentication. Features optimistic UI updates, message delivery confirmations, searchable conversation history, and a responsive interface designed for scalability and low-latency messaging.',
    // stack: ['JavaScript', 'HTML5'],
    links: {
      // github: 'https://github.com/okoyecharles/Todo-List',
      live: 'https://thriving-stroopwafel-fac534.netlify.app/',
    },
  },
  {
    title: 'Cpu scheduling visualizer',
    note: 'My first portfolio.',
    image: '/projects/cpu.jpg',
    imgDims: {
      width: '2751 ',
      height: '1572',
    },
     description: 'Interactive CPU scheduling visualizer demonstrating common scheduling algorithms (FCFS, SJF, SRTF, Priority, Round Robin). Allows custom process input (arrival/burst/priority), adjustable quantum, and step-through execution with animated Gantt chart updates. Displays per-process metrics (waiting time, turnaround time, response time), aggregate statistics, and side-by-side algorithm comparisons — useful for learning and teaching OS scheduling concepts.',
    // stack: ['React', 'TypeScript', 'Sass'],
    links: {
      github: 'https://github.com/Yashu6826/cpu-scheduling',
      live: 'https://cpu-scheduler-checker.netlify.app/'
    }
  },
  {
    title: 'Linked list visualizer',
    note: 'A web application that provides commercial and scientific space travel services.',
    image: '/projects/linkedlist.jpg',
    imgDims: {
      width: '2835',
      height: '1620'
    },
    description: 'Interactive linked-list visualizer supporting singly, doubly, and circular lists. Visualizes operations such as insert, delete, search, reverse, and traversal with animated pointer movements and node highlighting. Includes step/auto-play modes, index/value based operations, complexity indicators, and synchronized pseudocode to help users understand pointer manipulation and list invariants.',
    // stack: ['React', 'Redux', 'SpaceX API'],
    links: {
      github: 'https://github.com/Yashu6826/LinkedList',
      live: 'https://linked-list-indol.vercel.app/'
    }
  },
  
];

export type projectType = typeof projects[0];

export default projects
