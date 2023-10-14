export const navConfig = {
  main: [
    { name: "home", link: "/" },
    { name: "portfolio", link: "/portfolio" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ],
  portfolio: [
    { name: "experiments", link: "/portfoliolayout/experiments" },
    { name: "interactive SVGs", link: "/portfoliolayout/intSVGs" },
    { name: "prototypes", link: "/portfoliolayout/prototypes" },
    { name: "applications", link: "/portfoliolayout/applications" },
    { name: "games", link: "/portfoliolayout/games" },
    { name: "gen art", link: "/genart" },
  ],
  slides: [
    { name: "", imagelink: "./gen_art/let_it_flow.png" },
    { name: "", imagelink: "./gen_art/flow_field_3.13.2021.10.49.27.png" },
    { name: "", imagelink: "./gen_art/art_FF_lightning.png" },
    { name: "", imagelink: "./gen_art/art_everGreen_1.jpeg" },
    { name: "", imagelink: "./gen_art/art_everGreen_2.jpeg" },
    { name: "", imagelink: "./gen_art/art_everGreen_3.jpeg" },
    { name: "", imagelink: "./gen_art/art_everGreen_4.jpeg" },
    { name: "", imagelink: "./gen_art/art_everGreen_5.jpeg" },
    { name: "", imagelink: "./gen_art/art_everGreen_6.jpeg" },
    { name: "", imagelink: "./gen_art/art_fourier_1.jpeg" },
    { name: "", imagelink: "./gen_art/art_fourier_2.jpeg" },
    { name: "", imagelink: "./gen_art/art_fractal_trees_3.jpg" },
    { name: "", imagelink: "./gen_art/art_fractal_trees_4.jpeg" },
    { name: "", imagelink: "./gen_art/art_fractal_trees_5.jpeg" },
    { name: "", imagelink: "./gen_art/art_fractal_trees_pink.jpeg" },
    { name: "", imagelink: "./gen_art/art_fractal_trees.png" },
  ],
  prototypes: [
    {
      title: "Xfinity dashboard app platform - (video)",
      description:
        "High-fidelity prototype of Comcast’s “Dashboard” app platform, demonstrated live during Comcast’s Brian Roberts 2013 NCTA (National Cable & Telecommunications Association) keynote address. (The dashboard demo starts at 16:30 and runs through 17:50)",
      links: [{ name: "link", link: "https://youtu.be/1CRjDc_yiBI?t=16m30s" }],
    },
    {
      title: "401k Visualizer",
      description:
        "Interactive SVG demonstrating a 401k visualizer concept (desktop only)",
      tech: "JavaScript, GSAP, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/bench_mo_money/index.html",
        },
      ],
    },
    {
      title: "401k Visualizer - Abstract",
      description:
        "A more abstract, experimental version of the Interactive 401k visualizer with particle effects, built using canvas/PixiJS (desktop only)",
      tech: "PixiJS, GSAP, Canvas.",
      links: [{ name: "link", link: "https://aokorodu.github.io/portfolio/" }],
    },
  ],
  applications: [
    {
      title: "Motion Generator",
      description:
        "Designed to demonstrate various types of CSS/Javascript animations and easing functions (desktop only)",
      tech: "CSS animations, JavaScript, GSAP.",
      links: [
        { name: "link", link: "https://aokorodu.github.io/motion_generator/" },
      ],
    },
    {
      title: "zuubaDigital portfolio",
      description:
        "My online portfolio, built with React. You're looking at it",
      tech: "React, React Router, Framer Motion for page transitions, JavaScript/CSS for particle animations.",
    },
  ],
  experiments: [
    {
      title: "Ripples",
      description:
        "SVG based ripple animation. Generally an animation of this type would be built using the Canvas element.",
      tech: "SVG, JavaScript",
      links: [{ name: "link", link: "https://aokorodu.github.io/ripples/" }],
    },
    {
      title: "DNA Spiral Animation",
      description:
        "I used this as an intro page for my interactive animation talk for the Vanguard design community. ",
      tech: "Canvas, Processing",
      links: [{ name: "link", link: "https://aokorodu.github.io/spiralDNA/" }],
    },
    {
      title: "SVG Sunrise",
      description: "interactive svg.",
      tech: "SVG, GSAP, JavaScript",
      links: [{ name: "link", link: "https://aokorodu.github.io/sunrise/" }],
    },
    {
      title: "Fourier Doughnuts",
      description:
        "Allows for the creation of randomly generated art based upon simple Fourier transforms. Build using Processing. Work in progress.",
      tech: "Canvas, Processing",
      links: [
        { name: "link", link: "https://aokorodu.github.io/fourier_doughnuts/" },
      ],
    },
    {
      title: "Nemo",
      description: "Random movement of fish using perlin noise. ",
      tech: "SVG, JavaScript, Processing (for the Perlin Noise function).",
      links: [{ name: "link", link: "https://aokorodu.github.io/nemo/" }],
    },
    {
      title: "3D Dice",
      description:
        "Proof of concept using ThreeJS. Allows you to select the desired roll amount (the sum of the dice) when one or two dice are thrown. ",
      tech: "React, ThreeJS",
      links: [
        { name: "link", link: "https://aokorodu.github.io/3D_Dice/build/" },
      ],
    },
    {
      title: "Fractal Tree",
      description: "Fractal animation.",
      tech: "Canvas, Processing, JavaScript",
      links: [
        { name: "link", link: "https://aokorodu.github.io/fractalTree/" },
      ],
    },
    {
      title: "Fireworks",
      description:
        "vanilla javascript particle animation using the canvas element",
      tech: "Canvas, JavaScript",
      links: [{ name: "link", link: "https://aokorodu.github.io/fireworks/" }],
    },
  ],
  games: [
    {
      title: "movantik oic challenge (video)",
      description:
        "Interactive HTML5 game utilizing Leap Motion as the primary interface. The game was deployed at the AstraZeneca booth at several major Pharmaceutical Conventions. (Note: skip to 2:50 to view gameplay)",
      tech: "Canvas, HTML, CSS, JavaScript, CreateJS, GSAP, Leap Motion.",
      links: [
        {
          name: "gameplay video",
          link: "https://www.youtube.com/watch?v=l-rUN_-Z6Jg",
        },
      ],
    },
    {
      title: "Matching Game",
      description: "Select matching pairs before the time runs out!",
      tech: "Svelte (prototype), React, GSAP, SVG.",
      links: [
        {
          name: "svelte prototype",
          link: "https://aokorodu.github.io/MatchingGame/public/",
        },
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/matchit/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cataboom-demo-matchit-restaurant-cafe-vegan-01",
        },
        {
          name: "another final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-matchit",
        },
      ],
    },
    {
      title: "Wordle clone",
      description:
        "With the prototype, you can select both the number of letters per word and the number of attemps prototype",
      tech: "React, CSS animations.",
      links: [
        {
          name: "prototype",
          link: "https://aokorodu.github.io/Wordle_DEMO/build/",
        },
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/word-fury/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-wordfury",
        },
      ],
    },
    {
      title: "Spot the Difference",
      description: "Find the differences between two nearly identical images",
      tech: "React, CSS animations, SVG.",
      links: [
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/diss/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-differ",
        },
      ],
    },
    {
      title: "Swipe It Poll",
      description:
        "tinder style poll app. Drag the central image to select or reject",
      tech: "React, GSAP, CSS animations, SVG.",
      links: [
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/swipeit/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-swipeit",
        },
      ],
    },
    {
      title: "Plinko",
      description:
        "Physics based svg plinko game using the MatterJS physics engine",
      tech: "React, MatterJS (physics), GSAP, SVG.",
      links: [
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/dropit/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cataboom-demo-dropin-restaurant-pizza-qsr-01",
        },
      ],
    },
  ],
  interactiveSVGs: [
    {
      title: "particle system",
      description: "change the color palette and the particle motion",
      tech: "JavaScript, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/portfolioSite/svg-animations/particle_animation_deluxe.html",
        },
      ],
    },
    {
      title: "balloon-blimp-plane animation",
      description:
        "this demo contains a mix of css keyframe animations and dynamically drawn background elements (stars, trees, and mountains, which will be different every time)",
      tech: "CSS animations, JavaScript, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/portfolioSite/svg-animations/balloon_blimp_plane_animation.html",
        },
      ],
    },
    {
      title: "interactive bubbles",
      description:
        "change the speed and the zoom level of the bubbles using the provided sliders",
      tech: "Web Components, CSS animations, JavaScript, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/portfolioSite/svg-animations/interactive_bubbles.html",
        },
      ],
    },
    {
      title: "interactive colors",
      description: "change the colors using the provided sliders.",
      tech: "Web Components, CSS animations, JavaScript, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/portfolioSite/svg-animations/interactive_colors.html",
        },
      ],
    },
    {
      title: "parralax animation",
      description: "take a CSS drive on a mountain pass",
      tech: "CSS animations, JavaScript, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/portfolioSite/svg-animations/mountain_parralax.html",
        },
      ],
    },
    {
      title: "waves",
      description: "wave animation",
      tech: "CSS animations, JavaScript, SVG.",
      links: [
        {
          name: "link",
          link: "https://aokorodu.github.io/portfolioSite/svg-animations/waves.html",
        },
      ],
    },
  ],
};
