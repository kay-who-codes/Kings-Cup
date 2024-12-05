const cards = [
  { value: "A", colour: "⚫", action: "Waterfall" },
  { value: "2", colour: "⚫", action: "Take 2 drinks" },
  { value: "3", colour: "⚫", action: "Take 3 drinks" },
  { value: "4", colour: "⚫", action: "Everyone takes a drink" },
  { value: "5", colour: "⚫", action: "The player to your right commences a round of Truth or Dare (or Drink) with you" },
  { value: "6", colour: "⚫", action: "Copy previous card (unless King, in which case, copy the card before that)" },
  { value: "7", colour: "⚫", action: "Wildcard - Player to your right chooses any card effect for you" },
  { value: "8", colour: "⚫", action: "Starts Never Have I Ever - losers drink" },
  { value: "9", colour: "⚫", action: "Start the Rhyming Game - losers drink" },
  { value: "10", colour: "⚫", action: "Start the Number Game - losers drink" },
  { value: "J", colour: "⚫", action: "Take a secret drink" },
  { value: "Q", colour: "⚫", action: "Make a new rule for one other player" },
  { value: "K", colour: "⚫", action: "Add to Kings Cup" },
  { value: "Joker", colour: "⚫", action: "Reverse player order" },
  { value: "Joker", colour: "🔴", action: "Keep on hand as an opt-out card" },
  { value: "A", colour: "🔴", action: "Waterfall" },
  { value: "2", colour: "🔴", action: "Player to your left takes 2 drinks" },
  { value: "3", colour: "🔴", action: "Player to your left takes 3 drinks" },
  { value: "4", colour: "🔴", action: "Everyone takes a drink" },
  { value: "5", colour: "🔴", action: "Commence a Truth or Dare (or Drink) with the player to your right" },
  { value: "6", colour: "🔴", action: "Copy previous card (unless King)" },
  { value: "7", colour: "🔴", action: "Wildcard - Player to your left chooses any card effect for you" },
  { value: "8", colour: "🔴", action: "You start a round of Never Have I Ever" },
  { value: "9", colour: "🔴", action: "Start the Rhyming Game" },
  { value: "10", colour: "🔴", action: "Start the Number Game" },
  { value: "J", colour: "🔴", action: "Take a secret drink" },
  { value: "Q", colour: "🔴", action: "Make a new rule for one other player" },
  { value: "K", colour: "🔴", action: "Add to Kings Cup" },
];

// Handle card flip functionality
function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("flipped");
}

// Dynamically generate a random card effect
function generateCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  document.getElementById("card-back").innerHTML = `<div class="card-symbol">${card.value}</div><div class="card-instruction">${card.action}</div>`;
}

generateCard(); // Call on page load
