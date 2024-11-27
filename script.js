// Clear Function
document.querySelector("#clearB").addEventListener("click", () => {
  location.reload();
});
// Add Function
let players = [];
document.querySelector("#addB").addEventListener("click", () => {
  try{
    let playerName = document.querySelector("#name").value;
    let score = document.querySelector("#score").value;
    let player = { name: playerName, score: score };
    players.push(player);
    document.querySelector("#name").value = "";
    document.querySelector("#score").value = "";
  }catch(e){alert(e)}
});
// Generate Function
document.querySelector("#genB").addEventListener("click", () => {
  try {
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
  } catch (e) {
    alert(e);
  }
});
