export const generateRandomNumberAsync = async () => {
  return new Promise((resolve, reject) => {
    // resolve 70% of the time and reject 30% of the time use set timeout of 1.5 seconds
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(Math.floor(Math.random() * 100));
      } else {
        reject("Error: Random number generation failed");
      }
    }, 1500);
  });
};
