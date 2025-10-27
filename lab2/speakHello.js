// Уникаємо глобальної області видимості через IIFE
(function (window) {
  const speakWord = "Hello";

  const helloSpeaker = {
    speak: function (name) {
      console.log(`${speakWord} ${name}`);
    },
  };

  // Експортуємо тільки об'єкт
  window.helloSpeaker = helloSpeaker;
})(window);
