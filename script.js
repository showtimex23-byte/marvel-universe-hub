// Data for characters, trivia and news
// Each character entry includes a name, image, biography, abilities list,
// versus insights and citations for footnotes.

const characters = [
  {
    name: 'Spider-Man',
    alias: 'Peter Parker',
    // Use local asset image rather than a truncated base64 string for reliability
    image: 'assets/spider-man.jpg',
    bio:
      'High school student Peter Parker gained spider‑like abilities after being bitten by a radioactive spider. He designed wrist‑mounted web‑shooters and crafted a costume to become Spider‑Man and protect New York. The loss of his Uncle Ben taught him that with great power comes great responsibility.',
    abilities: [
      'Superhuman strength and agility',
      'Precognitive “spider‑sense” warns of danger',
      'Ability to cling to walls and ceilings',
      'Mechanical web‑shooters to swing between buildings',
    ],
    versus:
      'Spider‑Man relies on agility, spider‑sense and webbing to outmaneuver opponents. His strength allows him to lift several tons, and webs can immobilize foes. Against armored adversaries like Iron Man, he attempts to disable critical systems with precision web shots.',
    citations: [1],
  },
  {
    name: 'Iron Man',
    alias: 'Tony Stark',
    // Use local asset image rather than a truncated base64 string for reliability
    image: 'assets/iron-man.jpg',
    bio:
      'Genius inventor Tony Stark inherited Stark Industries and built weapons until a battlefield injury forced him to create a powered suit of armor to save his own life. With engineer Yinsen’s help he escaped captivity and later refined his armor, using it to fight threats as Iron Man. Over the years Stark has built numerous specialized suits equipped with repulsor rays, unibeams, jet propulsion and advanced artificial intelligence. He is a founding member of the Avengers and often funds their missions.',
    abilities: [
      'Powered armor grants superhuman strength and durability',
      'Flight via booster jets and repulsor technology',
      'Repulsor rays and unibeam energy weapons',
      'Advanced heads‑up display and onboard artificial intelligence',
    ],
    versus:
      'Iron Man’s armor provides heavy firepower and protection, allowing him to engage powerful foes. In a matchup with agile heroes like Spider‑Man, Stark relies on targeting systems and adaptability to counter speed. His diverse arsenal means he can switch tactics mid‑battle.',
    citations: [2, 3],
  },
];

// Trivia facts with citations referencing Cinemablend article
const triviaFacts = [
  {
    fact:
      'Iron Man once built an armor powered by artificial intelligence that fell in love with him and sacrificed itself to save his life.',
    citations: [4],
  },
  {
    fact:
      'During a strange 1990s arc, Captain America was transformed into a werewolf but retained control thanks to the super soldier serum before eventually returning to normal.',
    citations: [5],
  },
  {
    fact:
      'After Black Widow was killed in the comics, the Red Room cloned her and returned her to action.',
    citations: [6],
  },
  {
    fact:
      'Hawkeye began his career as a villain, getting wrapped up in the theft of Tony Stark’s technology alongside Black Widow before switching sides.',
    citations: [7],
  },
  {
    fact:
      'Thor was once turned into a frog when Loki used a transmutation spell and Thor unwittingly kissed a transformed woman.',
    citations: [8],
  },
  {
    fact:
      'In his debut, Black Panther lured the Fantastic Four to Wakanda to test himself and defeated all four members single‑handedly.',
    citations: [9],
  },
  {
    fact:
      'Doctor Strange once encountered the ghost of Benjamin Franklin, who held a grudge after Strange time‑traveled and inadvertently angered the founding father.',
    citations: [10],
  },
  {
    fact:
      'Wanda Maximoff’s twin sons were conjured by magic and disappeared when the spell ended, though they later returned in different forms.',
    citations: [11],
  },
];

// News items summarising upcoming comics and events with citations
const newsItems = [
  {
    title: 'Godzilla Destroys the Marvel Universe #1',
    description:
      'A dormant Godzilla awakens and rampages through the Marvel Universe. Earth’s heroes and even villains band together to stop the King of the Monsters, leading to a crossover spanning five issues【428653846599843†L42-L59】.',
    citations: [12],
  },
  {
    title: 'Imperial #2',
    description:
      'With rulers of galactic empires slain, Nova and Star‑Lord travel to the Intergalactic Empire of Wakanda to uncover the culprit in the cosmic series “Imperial”【428653846599843†L66-L71】.',
    citations: [13],
  },
  {
    title: 'Giant‑Size House of M #1',
    description:
      'Kamala Khan experiences a world where mutants rule and must join forces with Kitty Pryde to expose prejudice in this return to the House of M storyline【428653846599843†L80-L88】.',
    citations: [14],
  },
  {
    title: 'New Comics List',
    description:
      'Upcoming releases include Abomination #1, Deadpool/Wolverine #7, Death of the Silver Surfer #2, Exceptional X‑Men #11 and more【428653846599843†L112-L127】.',
    citations: [15],
  },
];

// Footnote definitions corresponding to the citations used above
const footnotes = {
  1: 'Spider‑Man biography and early life details【747321824015980†screenshot】',
  2: 'Tony Stark’s origin story and escape from captivity【316024491489258†L45-L73】',
  3: 'Iron Man armor capabilities and upgrades【316024491489258†L77-L99】',
  4: 'Iron Man’s sentient armor falls in love【452744762902142†L117-L123】',
  5: 'Captain America becomes a werewolf【452744762902142†L131-L138】',
  6: 'Black Widow revived through cloning【452744762902142†L152-L159】',
  7: 'Hawkeye’s villainous origins【452744762902142†L166-L170】',
  8: 'Thor transformed into a frog【452744762902142†L190-L196】',
  9: 'Black Panther defeats the Fantastic Four to test himself【452744762902142†L236-L242】',
  10: 'Doctor Strange meets Benjamin Franklin’s ghost【452744762902142†L248-L254】',
  11: 'Wanda Maximoff’s children created by magic【452744762902142†L261-L268】',
  12: 'Godzilla attacks the Marvel Universe【428653846599843†L42-L59】',
  13: 'Imperial #2 plot summary【428653846599843†L66-L71】',
  14: 'Giant‑Size House of M #1 synopsis【428653846599843†L80-L88】',
  15: 'List of upcoming comics releases【428653846599843†L112-L127】',
};

// Helper to build citation HTML from an array of citation numbers
function buildCitations(arr) {
  return arr
    .map((num) => `<sup>[${num}]</sup>`) // we will list numbers only; footnotes appear at bottom via footnotes object
    .join(' ');
}

// Select and display today’s character
function displayCharacter() {
  const charIndex = new Date().getDate() % characters.length;
  const character = characters[charIndex];
  document.getElementById('char-image').src = character.image;
  document.getElementById('char-name').textContent = `${character.name} (${character.alias})`;
  document.getElementById('char-bio').textContent = character.bio;
  // Populate abilities
  const abilitiesUl = document.getElementById('char-abilities');
  abilitiesUl.innerHTML = '';
  character.abilities.forEach((ability) => {
    const li = document.createElement('li');
    li.textContent = ability;
    abilitiesUl.appendChild(li);
  });
  document.getElementById('char-vs').textContent = character.versus;
  // Set citations
  document.getElementById('char-citations').innerHTML = buildCitations(character.citations);
}

// Display a random trivia fact
function displayTrivia() {
  const index = Math.floor(Math.random() * triviaFacts.length);
  const trivia = triviaFacts[index];
  document.getElementById('trivia-fact').textContent = trivia.fact;
  document.getElementById('trivia-citations').innerHTML = buildCitations(trivia.citations);
}

// Display news items
function displayNews() {
  const list = document.getElementById('news-list');
  list.innerHTML = '';
  newsItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.title}:</strong> ${item.description}`;
    list.appendChild(li);
  });
  // Collect unique citation numbers from all news items
  const newsCits = Array.from(
    new Set(newsItems.reduce((acc, item) => acc.concat(item.citations), []))
  );
  document.getElementById('news-citations').innerHTML = buildCitations(newsCits);
}

// On page load, initialize sections
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('character-spotlight')) {
    displayCharacter();
    displayTrivia();
    displayNews();
    displayFootnotes();
  }
});

// Display footnotes based on citations used on the page
function displayFootnotes() {
  const footnoteContainer = document.getElementById('footnotes');
  if (!footnoteContainer) return;
  // Gather citations from character, trivia and news sections
  const charSection = characters[new Date().getDate() % characters.length];
  const usedCitations = new Set();
  charSection.citations.forEach((num) => usedCitations.add(num));
  // Trivia citations (random; but we want to display all possible or at least current fact)
  // We'll include all trivia citations so that footnotes cover whichever fact appears
  triviaFacts.forEach((t) => t.citations.forEach((num) => usedCitations.add(num)));
  // News citations
  newsItems.forEach((item) => item.citations.forEach((num) => usedCitations.add(num)));
  // Sort citation numbers
  const sorted = Array.from(usedCitations).sort((a, b) => a - b);
  // Build list items for each citation
  const list = document.createElement('ul');
  list.style.listStyleType = 'none';
  list.style.paddingLeft = '0';
  sorted.forEach((num) => {
    const li = document.createElement('li');
    li.innerHTML = `<sup>[${num}]</sup> ${footnotes[num] || ''}`;
    list.appendChild(li);
  });
  footnoteContainer.innerHTML = '';
  footnoteContainer.appendChild(list);
}