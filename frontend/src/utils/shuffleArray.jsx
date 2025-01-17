// export const shuffleArray = (array) => {
//     return array
//       .map((item) => ({ item, sort: Math.random() }))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({ item }) => item);
//   };


export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };