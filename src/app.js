window.onload = function() {
  let pronoun = ["el", "la"];
  let adj = ["maquina", "codigo"];
  let noun = ["java", "phyton"];
  let dtl = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dtl.length; l++) {
          document.querySelector("#domain_name").innerHTML +=
            '<p class="text-secondary"><h3> www.' +
            pronoun[i] +
            adj[j] +
            noun[k] +
            dtl[l] +
            " </h3></p> <hr>";
        }
      }
    }
  }
};
