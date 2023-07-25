let name = document.createElement("h3");
name.innerHTML = "click and Show the Mr.been";
document.querySelector("body").append(name);

name.addEventListener("click", function () {
  let a = document.createElement("img");
  a.style.width = "200px";
  a.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXyUWXXwVS8XT0qMsb2vF5w_ugyj0A_mqhq-8cUBgKQ&usqp=CAU&ec=48665698";
  document.querySelector("body").append(a);

  a.setAttribute("id", "image");
  let namste = document.createElement("h3");
  namste.innerHTML = "lagta he kuch to gadbad he daya";
  document.querySelector("body").append(namste);
});