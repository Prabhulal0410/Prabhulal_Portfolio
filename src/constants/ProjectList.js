import matecap from "@/assets/projects/matecap.png"
import pokemon from "@/assets/projects/pokemon.png"
import netflixgpt from "@/assets/projects/netflixgpt.png"
import numbergame from "@/assets/projects/numbergame.png"
import gemini from "@/assets/projects/gemini.png" 

export const ProjectList = [
  {
    id: 1,
    name: "NetflixGPT",
    description: [
      "Developed an AI-powered movie discovery web app using React, Vite, and Tailwind CSS for a fast and responsive UI.",
      "Integrated Google Gemini to provide intelligent movie search and recommendations based on natural language input.",
      "Implemented Firebase Authentication for secure user login and multi-language support for a personalized experience.",
      "Connected TMDB API to fetch real-time movie data (Now Playing, Popular, Top Rated, Upcoming) for dynamic content browsing."
    ],
    img: netflixgpt,
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Google Gemini", "TMDB API"],
    source: "https://github.com/Prabhulal0410/NetfilxGPT",
    demo: "https://netfilx-gpt-project.vercel.app/"
  },

  {
  id: 2,
  name: "Google Gemini AI",
  description: [
    "Engineered an AI-driven conversational web application leveraging the Google Gemini API to generate real-time responses from natural language prompts.",
    "Designed and implemented prompt-processing logic and conversation state management to maintain coherent multi-turn AI interactions.",
    "Built a high-performance frontend using React and Vite, ensuring low-latency AI responses and a smooth, responsive user experience."
  ],
  img: gemini,
  tech: ["React", "Vite", "JavaScript", "Google Gemini API"],
  source: "https://github.com/Prabhulal0410/Google-Gemini",
  demo: "https://google-gemini-ai-api.vercel.app/"
},

  {
    id: 3,
    name: "PokemonApp",
    description: [
      "Built a dynamic Pokémon explorer app using React, Vite, and Tailwind CSS, leveraging the PokéAPI to fetch and display data in real time.",
      "Implemented search and filter functionality to help users easily find Pokémon by name and type.",
      "Designed a responsive and engaging UI with smooth animations and interactive elements to enhance user experience."
    ],
    img: pokemon,
    tech: ["React", "Tailwind CSS", "JavaScript", "PokéAPI", "Vite"],
    source: "https://github.com/Prabhulal0410/PokemonApp",
    demo: "https://reactpokemonappcards.netlify.app/"
  },

  {
    id: 4,
    name: "MateCap",
    description: [
      "Built a modern and responsive landing page using HTML, CSS, and JavaScript with a strong focus on clean UI and smooth user experience.",
      "Integrated Slick Slider to create interactive and responsive carousels, improving visual engagement and content presentation.",
      "Optimized layouts for multiple screen sizes to ensure consistent performance across devices."
    ],
    img: matecap,
    tech: ["HTML", "CSS", "JavaScript", "Slick Slider", "Responsive Design"],
    source: "https://github.com/Prabhulal0410/MateCap",
    demo: "https://prabhulalmatecapproject.netlify.app/"
  },

  {
    id: 5,
    name: "Number Guessing Game",
    description: [
      "Developed an interactive and modern number guessing game using vanilla JavaScript, HTML, and CSS with smooth animations and real-time feedback.",
      "Implemented game logic with attempt tracking, input validation, keyboard support, and dynamic messages for correct and incorrect guesses.",
      "Enhanced user experience with dark mode, micro-interactions such as shake animation on errors, and confetti effects on successful guesses."
    ],
    img: numbergame,
    tech: ["HTML", "CSS", "JavaScript", "UI Animations", "Netlify"],
    source: "https://github.com/Prabhulal0410/Number-Guessing-Game",
    demo: "https://number-guessing-game-prabhulal.netlify.app/"
  }
]
