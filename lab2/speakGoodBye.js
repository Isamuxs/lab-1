// Уникаємо глобальної області видимості через IIFE
(function (window) {
  const speakWord = "Goodbye";

  const byeSpeaker = {
    speak: function (name) {
      console.log(`${speakWord} ${name}`);
    },
  };

  window.byeSpeaker = byeSpeaker;
})(window);
