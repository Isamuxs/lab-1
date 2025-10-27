// Уникаємо глобальної області видимості
(function () {
  const names = ["John", "Jane", "Paul", "Jack", "Kate", "Mike", "jessica", "Bob"];

  // Основний функціонал: Hello або Goodbye
  for (let i = 0; i < names.length; i++) {
    const firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  console.log("\n=== Додатковий функціонал ===");

  // Додатковий варіант: вибір імен, де сума ASCII-кодів > 500
  console.log("Імена, сума ASCII-кодів яких > 500:");

  const selected = names.filter(name => {
    const sum = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return sum > 500;
  });

  selected.forEach(name => console.log(`→ ${name}`));
})();
