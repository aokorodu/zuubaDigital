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
};
