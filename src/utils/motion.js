export const slideIn = (direction, type, delay, duration) => {
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
      },
    },
  };
};
