let count = 0;
const heartCount = document.getElementById("count-heart");
const heartButtons = document.querySelectorAll(".heart");

for (const btn of heartButtons) {
  btn.addEventListener("click", function () {
    count++;
    heartCount.innerText = count;
  });
}

let copy = 0;
const copyCount = document.getElementById("count-copy");

function copyNum(button) {
  const value = button.parentNode.previousElementSibling.children[0].innerText;
  navigator.clipboard.writeText(value);

  copy++;
  copyCount.innerText = copy;

  alert("Copied: " + value);
}

let coin = 100;
const currentCoins = document.getElementById("coin");
const callButtons = document.querySelectorAll(".call-button");
const callHistory = document.getElementById("call-history");
const clearButton = document.getElementById("clear-history");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    if (coin < 20) {
      alert("You do not have enough coins to make a call!");
      return;
    }

    coin -= 20;
    currentCoins.innerText = coin;

    const parent = btn.parentNode.parentNode;
    const text = parent.querySelector("h1").innerText;
    const num = parent.querySelector("h3").innerText;

    alert("Calling " + text + " " + num);

    const newHistory = document.createElement("p");
    newHistory.innerHTML = `
      <div class="flex justify-between items-center p-4 my-4 bg-[#FAFAFA] rounded-xl border shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)]">
        <div>
          <h3 class="font-normal text-[#111111] text-[15px]">${text}</h3>
          <p class="text-[#000000] text-base">${num}</p>
        </div>
        <p class="text-sm text-[#000000]">${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    callHistory.appendChild(newHistory);
  });
}

clearButton.addEventListener("click", function () {
  callHistory.innerHTML = "";
});
