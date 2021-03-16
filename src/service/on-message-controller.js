const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");
const diceController = require("../controllers/dice-controller");
const prefix = "*";
global.bot.on("message", (msg) => {
  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();
    const ifs = [
      { text: "hora", f: () => hourController.currentTime(msg) },
      { text: "ajuda", f: () => helpController.help(msg) },
      {
        text: "avatar",
        f: () =>
          msg.reply(`O seu avatar é esse:\n` + msg.author.displayAvatarURL()),
      },
      {
        text: "salve",
        f: () =>
          msg.reply(
            "Auuuuuuuuuuuuuuuuuuuuuu:wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:"
          ),
      },
    ];

    for (const myIf of ifs) {
      if (myIf.text === text) {
        myIf.f();
        break;
      }
    }
    if (text.includes("*d")) {
      diceController.dice(msg); //Dice roll
    }

    if (text.includes("-cargo")) {
      const rText = text.replace("-cargo", "").trim();
      var rolere = msg.member.guild.roles.cache.find(
        (role) => role.id === "707012360367505480"
      );
      if (rText === "games") {
        var role = msg.member.guild.roles.cache.find(
          (role) => role.id === "818235836206153768"
        );
        msg.member.roles.add(role);
        msg.reply(
          `Seu cargo foi atualizado com liberação de Gamer, boa partida até\n:`
        );
        msg.member.roles.remove(rolere);
      } else if (rText === "dev") {
        var role = msg.member.guild.roles.cache.find(
          (role) => role.id === "818235920448487464"
        );
        msg.member.roles.add(role);
        msg.reply(
          `Seu cargo foi atualizado com liberação de Dev, bom estudo até\n`
        );
        msg.member.roles.remove(rolere);
      } else {
        const informacoes = msg.member.guild.channels.cache.find((channel) =>
          channel.name.includes("informações")
        );
        msg.reply(
          `:wolf:Por favor verique se digitou certo o cargo de desejado no ${informacoes}:wolf:`
        );
      }
    }
    if (msg.author.id === "409772439137026050" || text.includes("corvo")) {
      const reactionEmoji = msg.guild.emojis.cache.find(
        (emoji) => emoji.name === "corvo_itachi"
      );
      msg.react(reactionEmoji);
    }
  }
});
