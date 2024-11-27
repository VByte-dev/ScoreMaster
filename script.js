// Clear Function
document.querySelector("#clearB").addEventListener("click", () => {
  location.reload();
});
// Add Function
let players = [];
document.querySelector("#addB").addEventListener("click", () => {
  let playerName = document.querySelector("#name").value;
  let score = document.querySelector("#score").value;
  let player = { name: playerName, score: score };
  players.push(player);
  document.querySelector("#name").value = "";
  document.querySelector("#score").value = "";
});
// Generate Function
document.querySelector("#genB").addEventListener("click", () => {
  document.querySelector("#lb").innerHTML = "";
  players.sort((a, b) => b.score - a.score);
  players.forEach((player) => {
    let html = `
    <div id="lb1" class="flex justify-between px-8">
      <h2>${player.name}</h2>
      <h2>${player.score}</h2>
    </div>`;
    document.querySelector("#lb").innerHTML += html;
  });
});
