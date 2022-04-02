$(document).ready(() => {
  const buscar = $("#buscar");
  const input = $("#supeheroId");
  const superHeroDisplay = $("#superhero-data");
  const superHeroStats = $("#superhero-stats");

  const SuperHeroImg = $("#superhero-details #superhero-img");
  const Name = $("#superhero-details .name");
  const Connections = $("#superhero-details .connections");
  const Publisher = $("#superhero-details .publisher");
  const FirstAppearance = $("#superhero-details .first-appearance");
  const Height = $("#superhero-details .height");
  const Weight = $("#superhero-details .weight");
  const Aliases = $("#superhero-details .aliases");

  buscar.click(() => {
    const superId = input.val();
    console.log(superId);
    if(isNaN(superId)){
      alert("No es un numero");
    }
    $.ajax(
      `https://www.superheroapi.com/api.php/503190218081610/${superId}`
    ).done((data) => {
      SuperHeroImg.attr(`src`, data.image.url);
      Name.html(data.name);
      Connections.html(data.connections["group-affiliation"]);
      Publisher.html(data.biography.publisher);
      FirstAppearance.html(data.biography["first-appearance"]);
      Height.html(data.appearance.height[1]);
      Weight.html(data.appearance.weight[1]);
      Aliases.html(data.biography.aliases);
      
      let options = {
        title: {
          text: "Desktop OS Market Share in 2017"
        },
        subtitles: [{
          text: "As of November, 2017"
        }],
        animationEnabled: true,
        data: [{
          type: "pie",
          startAngle: 40,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: data.powerstats.intelligence, label: "Inteligencia" },
            { y: data.powerstats.strength, label: "Fuerza" },
            { y: data.powerstats.speed, label: "Velocidad" },
            { y: data.powerstats.durability, label: "Resistenci" },
            { y: data.powerstats.power, label: "Poder" },
            { y: data.powerstats.combat, label: "Combate" },
          ]
        }]
      };
      $("#superhero-stats").CanvasJSChart(options);
    });
  });
});
