const Hamburger = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <defs>
        <path
          id="hamline"
          d="M10 0 H90"
          stroke="black"
          strokeWidth={20}
          strokeLinecap="round"
        />
      </defs>
      <use href="#hamline" x="0" y="10" />
      <use href="#hamline" x="0" y="50" />
      <use href="#hamline" x="0" y="90" />
    </svg>
  );
};

export default Hamburger;
