console.log("Teen Joke Generator ready!");

const jokes = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    emoji: "🤯",
    label: "Mind = Blown!"
  },
  {
    setup: "I told my parents I wanted to be a comedian...",
    punchline: "They laughed at me. Good start, I guess.",
    emoji: "😂",
    label: "LOL so true!"
  },
  {
    setup: "Why did the math book look so stressed?",
    punchline: "It had too many problems!",
    emoji: "😩",
    label: "Relatable..."
  },
  {
    setup: "What do you call a fake noodle?",
    punchline: "An IMPASTA!",
    emoji: "🙄",
    label: "Ugh, really?"
  },
  {
    setup: "Why did the student eat his homework?",
    punchline: "Because the teacher told him it was a piece of cake!",
    emoji: "🤣",
    label: "Haha no way!"
  },
  {
    setup: "I asked my dog what two minus two is...",
    punchline: "He said nothing.",
    emoji: "💀",
    label: "I'm dead"
  },
  {
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
    emoji: "😭",
    label: "That's terrible!"
  },
  {
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!",
    emoji: "😉",
    label: "Sneaky!"
  },
  {
    setup: "Why can't Elsa have a balloon?",
    punchline: "Because she'll let it go!",
    emoji: "🤦‍♀️",
    label: "I can't even..."
  },
  {
    setup: "What do you call a sleeping dinosaur?",
    punchline: "A dino-snore!",
    emoji: "😴",
    label: "ZZZtastic!"
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    emoji: "👍",
    label: "Outstanding!"
  },
  {
    setup: "What do you get when you cross a snowman and a vampire?",
    punchline: "Frostbite!",
    emoji: "🧛",
    label: "Spooky good!"
  },
  {
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up!",
    emoji: "😂",
    label: "Cracking up!"
  },
  {
    setup: "What did one wall say to the other wall?",
    punchline: "I'll meet you at the corner!",
    emoji: "😐",
    label: "...okay then."
  },
  {
    setup: "Why did the golfer bring extra socks?",
    punchline: "In case he got a hole in one!",
    emoji: "😏",
    label: "Smooth move!"
  },
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    emoji: "🐻",
    label: "Aww so cute!"
  },
  {
    setup: "I tried to write a joke about pizza...",
    punchline: "But it was too cheesy.",
    emoji: "🧀",
    label: "Extra cheesy!"
  },
  {
    setup: "Why did the phone go to school?",
    punchline: "To improve its cell-f esteem!",
    emoji: "🤓",
    label: "Nerd alert!"
  },
  {
    setup: "What do you call a fish without eyes?",
    punchline: "A fsh!",
    emoji: "🤨",
    label: "Wait... what?!"
  },
  {
    setup: "Why did the kid put sugar under their pillow?",
    punchline: "To have sweet dreams!",
    emoji: "😊",
    label: "That's adorable!"
  }
];

let currentJoke = null;
let punchlineShown = false;

const emojiFace     = document.getElementById("emojiFace");
const emojiLabel    = document.getElementById("emojiLabel");
const jokeSetup     = document.getElementById("jokeSetup");
const jokePunchline = document.getElementById("jokePunchline");
const punchlineBtn  = document.getElementById("punchlineBtn");
const nextJokeBtn   = document.getElementById("nextJokeBtn");
const reactionRow   = document.getElementById("reactionRow");

function getRandomJoke() {
  let next;
  do {
    next = jokes[Math.floor(Math.random() * jokes.length)];
  } while (next === currentJoke && jokes.length > 1);
  return next;
}

function animateEmoji(type) {
  emojiFace.classList.remove("bounce", "spin");
  void emojiFace.offsetWidth;
  emojiFace.classList.add(type);
  emojiFace.addEventListener("animationend", () => {
    emojiFace.classList.remove(type);
  }, { once: true });
}

function loadNewJoke() {
  currentJoke = getRandomJoke();
  punchlineShown = false;

  jokeSetup.textContent = currentJoke.setup;
  jokePunchline.textContent = "";
  jokePunchline.classList.add("hidden");

  emojiFace.textContent = "🤔";
  emojiLabel.textContent = "Hmm, what's the punchline?";
  animateEmoji("bounce");

  punchlineBtn.disabled = false;
  nextJokeBtn.textContent = "➡️ Next Joke!";
}

function revealPunchline() {
  if (!currentJoke || punchlineShown) return;
  punchlineShown = true;

  jokePunchline.textContent = currentJoke.punchline;
  jokePunchline.classList.remove("hidden");

  emojiFace.textContent = currentJoke.emoji;
  emojiLabel.textContent = currentJoke.label;
  animateEmoji("spin");

  punchlineBtn.disabled = true;
}

function handleReaction(e) {
  const span = e.target.closest("span");
  if (!span) return;

  emojiFace.textContent = span.textContent;
  emojiLabel.textContent = span.title || "Reacting!";
  animateEmoji("bounce");
}

nextJokeBtn.addEventListener("click", loadNewJoke);
punchlineBtn.addEventListener("click", revealPunchline);
reactionRow.addEventListener("click", handleReaction);

// Init
loadNewJoke();