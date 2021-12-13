const qoutatTxt = document.getElementById("qoutation");
const authortxt = document.getElementById("author");
const tweetbtn = document.querySelector(".tweet");
const randombtn = document.querySelector(".randomQ");
const loader = document.querySelector("#loader");

let qoutes = [];

function Qout() {
  loading();
  const qoutation = qoutes[Math.floor(Math.random() * qoutes.length)];
  if (!qoutation.author) {
    authortxt.textContent = "unknown";
  } else {
    authortxt.textContent = `- ${qoutation.author}`;
  }
  qoutatTxt.textContent = `"${qoutation.text}"`;

  complete();
}

async function genrateQout() {
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    qoutes = await response.json();
    Qout();
  } catch (error) {
    console.log(error);
  }
}

function tweetIt() {
  const url = `https://twitter.com/intent/tweet?text=${qoutatTxt.textContent}-${authortxt.textContent}`;
  window.open(url, (target = "_blank"));
}

randombtn.addEventListener("click", Qout);
tweetbtn.addEventListener("click", tweetIt);

function loading() {
  loader.hidden = false;
  qoutatTxt.hidden = true;
}
function complete() {
  loader.hidden = true;
  qoutatTxt.hidden = false;
}
genrateQout();
