function endreVariabel() {
  var variabelen = "Jeg er 100 år";
  document.getElementById("endreText").innerHTML = variabelen;
}

function sjekkAlder(alder) {
  if (alder >= 18 && alder <= 99) {
    document.getElementById("svaret").innerHTML =
      "Du er gammel nok til å kjøre bil";
  } else if (alder >= 16 && alder <= 17) {
    document.getElementById("svaret").innerHTML =
      "Du er gammel nok til å kjøre moped";
  } else if (alder >= 99) {
    document.getElementById("svaret").innerHTML =
      "Du er for gammel til å kjøre bil, hold deg unna trafikken.";
  } else {
    document.getElementById("svaret").innerHTML = "Du er ikke gammel nok";
  }
}

function startPrompt() {
  var alder = prompt("Hvor gammel er du?");
  sjekkAlder(alder);
}

function endreBil() {
  document.getElementById("bil").innerHTML = "Volvo V70";
}

function skrivUtListe() {
  var favorittspill = [
    "valorant",
    "minecraft",
    "valheim",
    "phasmaphobia",
    "sims 4",
  ];

  for (var i = 0; i < favorittspill.length; i++) {
    document.getElementById("favorittspill").innerHTML +=
      "<br/>" + favorittspill[i];
  }
  document.getElementById("favorittspillButton").disabled = true;
}
