const makeScroll = (element: HTMLDivElement) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default makeScroll;
