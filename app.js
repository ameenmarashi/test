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
    label: "Ugh, really!"
  },
  {
    setup: "Why did the student eat his homework?",
Rune: "Because the teacher told him it was a piece of cake!",
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
  },
  {
    setup: "What do you call a boomerang that won't come back?",
    punchline: "A stick!",
    emoji: "🤣",
    label: "Lost cause!"
  },
  {
    setup: "Why are ghosts so bad at lying?",
    punchline: "Because you can see right through them!",
    emoji: "👻",
    label: "Transparent truth!"
  },
  {
    setup: "What do you call a sad strawberry?",
    punchline: "A blueberry!",
    emoji: "🍓",
    label: "Berry sad!"
  },
  {
    setup: "What do you call a lazy kangaroo?",
    punchline: "Pouch potato!",
    emoji: "🥔",
    label: "Couch potato!"
  },
  {
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged!",
    emoji: "☕",
    label: "Mug life!"
  },
  {
    setup: "What's a vampire's favorite fruit?",
    punchline: "A neck-tarine!",
    emoji: "🧛",
    label: "Bloody good!"
  },
  {
    setup: "Why don't secrets last long in a cornfield?",
    punchline: "Because there are too many ears!",
    emoji: "🌽",
    label: "Corny but true!"
  },
  {
    setup: "What do you call a bear that falls from the sky?",
    punchline: "A raindrop bear!",
    emoji: "☔",
    label: "Bear-y wet!"
  },
  {
    setup: "Why did the computer go to the doctor?",
    punchline: "Because it had a virus!",
    emoji: "💻",
    label: "Sick byte!"
  },
  {
    setup: "What's a robot's favorite type of music?",
    punchline: "Heavy metal!",
    emoji: "🤖",
    label: "Rock on!"
  },
  {
    setup: "Why did the tomato turn red?",
    punchline: "Because it saw the salad dressing!",
    emoji: "🍅",
    label: "Blushing veggie!"
  },
  {
    setup: "What do you call a fish wearing a bowtie?",
    punchline: "Sofishticated!",
    emoji: "🐠",
    label: "Fancy fin!"
  },
  {
    setup: "How do you make a tissue dance?",
    punchline: "Put a little boogie in it!",
    emoji: "🤧",
    label: "Gesundheit!"
  },
  {
    setup: "What's an alien's favorite part of a computer?",
    punchline: "The space bar!",
    emoji: "👽",
    label: "Out of this world!"
  },
  {
    setup: "Why did the cookie go to the hospital?",
    punchline: "Because it felt crummy!",
    emoji: "🍪",
    label: "Sweet misery!"
  },
  {
    setup: "What did one ocean say to the other ocean?",
    punchline: "Nothing, they just waved!",
    emoji: "🌊",
    label: "Sea what I mean?"
  },
  {
    setup: "Why can't you give a computer pizza?",
    punchline: "Because it's a hard drive!",
    emoji: "🍕",
    label: "No bytes for you!"
  },
  {
    setup: "What do you call a snowman with a six-pack?",
    punchline: "An abdominal snowman!",
    emoji: "☃️",
    label: "Chilly gains!"
  },
  {
    setup: "What do you call a group of musical whales?",
    punchline: "An orca-stra!",
    emoji: "🐳",
    label: "Whale done!"
  },
  {
    setup: "Why did the skeleton go to the party alone?",
    punchline: "Because he had no body to go with him!",
    emoji: "💀",
    label: "Bone-ly!"
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