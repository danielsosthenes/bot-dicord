const { default: axios } = require("axios");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  name: "hab",
  async execute(message) {
    let champ = message.content.replace("*hab ", "").trim();
    let names = require("../util/json/nameslol.json");
    let x = names[champ]; //Alguns champs possuem nome diferentes foi criado um JSON para isso

    if (x) {
      champ = x;
    }
    champ = champ[0].toUpperCase() + champ.substr(1); //Substitui primeira letra por maiuscula
    let version = await axios.get(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    let json = `http://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/data/pt_BR/champion/${champ}.json`;

    let response = await axios.get(json);
    let teste = response["data"];

    let icone = `http://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/champion/${champ}.png`;

    let imageP = teste["data"][`${champ}`]["passive"]["image"]["full"];
    imageP = `https://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/passive/${imageP}`;
    let passive = teste["data"][`${champ}`]["passive"]["description"];
    let passiveN = teste["data"][`${champ}`]["passive"]["name"];

    let imageQ = teste["data"][`${champ}`]["spells"][0]["id"];
    imageQ = `https://ddragon.leagueoflegends.com/cdn/${version["data"][0]}img/spell/${imageQ}.png`;
    let champQ = teste["data"][`${champ}`]["spells"][0]["description"];
    let nameQ = teste["data"][`${champ}`]["spells"][0]["name"];

    let imageW = teste["data"][`${champ}`]["spells"][1]["id"];
    imageW = `https://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/spell/${imageW}.png`;
    let champW = teste["data"][`${champ}`]["spells"][1]["description"];
    let nameW = teste["data"][`${champ}`]["spells"][1]["name"];

    let imageE = teste["data"][`${champ}`]["spells"][2]["id"];
    imageE = `https://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/spell/${imageE}.png`;
    let champE = teste["data"][`${champ}`]["spells"][2]["description"];
    let nameE = teste["data"][`${champ}`]["spells"][2]["name"];

    let imageR = teste["data"][`${champ}`]["spells"][3]["id"];
    imageR = `https://ddragon.leagueoflegends.com/cdn/${version["data"][0]}/img/spell/${imageR}.png`;
    let champR = teste["data"][`${champ}`]["spells"][3]["description"];
    let nameR = teste["data"][`${champ}`]["spells"][3]["name"];

    message.channel.send({
      embeds: [
        getEmbed(
          `**PASSIVA** do ${champ}`,
          `***${passiveN}***
        -------------------
        ${passive}
        -------------------
        `,
          icone,
          champ,
          imageP,
          imageP
        ),
      ],
    });

    message.channel.send({
      embeds: [
        getEmbed(
          `**HABILIDADE Q** do ${champ}`,
          `***${nameQ}***
        -------------------
        ${champQ}
        -------------------
        `,
          icone,
          champ,
          imageQ,
          imageQ
        ),
      ],
    });

    message.channel.send({
      embeds: [
        getEmbed(
          `**HABILIDADE W** do ${champ}`,
          `***${nameW}***
        -------------------
        ${champW}
        -------------------
        `,
          icone,
          champ,
          imageW,
          imageW
        ),
      ],
    });

    message.channel.send({
      embeds: [
        getEmbed(
          `**HABILIDADE E** do ${champ}`,
          `***${nameE}***
        -------------------
        ${champE}
        -------------------
        `,
          icone,
          champ,
          imageE,
          imageE
        ),
      ],
    });

    message.channel.send({
      embeds: [
        getEmbed(
          `**HABILIDADE ULTIMATE** do ${champ}`,
          `***${nameR}***
        -------------------
        ${champR}
        -------------------
        `,
          icone,
          champ,
          imageR,
          imageR
        ),
      ],
    });
  },
};
