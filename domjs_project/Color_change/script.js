const btn = document.getElementById("button");

const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

//  explain for loop method math.floor decimal value not consider
// and math.random consider random value and *16 then
// show uneder 16  number and easly consider to hex value
  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random()*16)];
  }
//   + sign oertaor using in concate to #
  return cons;
};

const changeRandomColor = () => {
  document.body.style.backgroundColor = randomColor();
};

btn.addEventListener("click", changeRandomColor);
