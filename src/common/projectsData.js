import estate from "../assets/estate.png";
import weather from "../assets/weather.jpeg";
import notes from "../assets/notes.jpg";
import converter from "../assets/converter.jpeg";
import todo from "../assets/todo.jpeg";
import spotify from "../assets/spotify.png";
import scribe from "../assets/scribe.jpg";
import food_del from "../assets/food-del.png";
import lms from "../assets/lms.jpg";

export const projectsData = [
  {
    title: "MERN Stack LMS Application",
    image: lms,
    link: "https://ii-lms-frontend.vercel.app/",
    description:
      "A full-stack LMS web application built with the MERN stack. The platform includes secure payment processing with Stripe, allowing students to enroll in courses. Educators can add courses and access a dedicated dashboard to review enrolled students, added courses, and earnings. Students benefit from a progress tracking feature and can rate courses to enhance learning quality.",
  },
  {
    title: "Food Ordering App",
    image: food_del,
    link: "https://ii-food-del-frontend.vercel.app/",
    description:
      "A full-stack MERN food ordering web application featuring an intuitive cart management, payment integration with Stripe, real-time order tracking, and an admin dashboard for managing orders and products. The platform ensures a smooth user experience with a responsive design and authentication system for secure access.",
  },
  {
    title: "Spotify Clone",
    image: spotify,
    link: "https://ii-spotify-clone.vercel.app/",
    description:
      "A simple and responsive front-end Spotify clone built with React and Tailwind CSS. This app replicates core Spotify features such as playlists, album displays, and a modern user interface for an immersive music browsing experience.",
  },
  {
    title: "Free - Scribe",
    image: scribe,
    link: "https://ii-free-scribe.vercel.app/",
    description:
      "A simple and responsive transcription application built with React and Tailwind CSS, leveraging the browser's Web Speech API to transcribe user speech from any language. It also includes a feature to translate transcriptions into any language.",
  },
  {
    title: "Estate Website",
    image: estate,
    link: "https://r-e-w.vercel.app/",
    description:
      "A single-page, responsive real estate website built with React and Tailwind CSS, featuring Web3Form API integration for receiving user messages.",
  },
  {
    title: "Weather App",
    image: weather,
    link: "https://imanuelchibuzor.github.io/weather-report/",
    description:
      "A weather-report app built with HTML, CSS, and JavaScript, utilizing the OpenWeather API to provide accurate weather reports for any country in the world.",
  },
  {
    title: "Currency Converter",
    image: converter,
    link: "https://imanuelchibuzor.github.io/currency-converter/",
    description:
      "An easy-to-use currency converter built with HTML, CSS, and JavaScript, featuring both direct conversion (powered by the ExchangeRate API) and PPP conversion (utilizing World Bank PPP data).",
  },
  {
    title: "Notes App",
    image: notes,
    link: "https://imanuelchibuzor.github.io/notes-app/",
    description:
      "A user-friendly notes app built with HTML, CSS, and JavaScript, that allows users to save important information and document their personal experiences efficiently.",
  },
  {
    title: "Todo App",
    image: todo,
    link: "https://imanuelchibuzor.github.io/todo-app/",
    description:
      "A simple and efficient to-do app built using HTML, CSS, and JavaScript, designed to help users organize and manage their tasks effectively.",
  },
];
