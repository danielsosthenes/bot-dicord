const getEmbed = require('./getEmbed')
module.exports = {
    name: 'ban',
    discription:'Ban member mention',
    execute(message, args){
    if (!message.guild) return;
    if (message.content.startsWith('*ban')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .ban()
                    .then(() => {
                        message.channel.send(getEmbed.getEmbed('BANIDO', `${user.tag}`));
                    })
                    .catch(err => {
                        message.channel.send(getEmbed.getEmbed('ERRO', 'Não posso banir'));
                        console.error(err);
                    });
            } else {
                message.channel.send(getEmbed.getEmbed('ERRO', "Ele tem que estar no servidor!"));
            }
        } else {
            message.channel.send(getEmbed.getEmbed('ERRO', "Você não mencionou o usuário para banir!"));
        }
    }
}};
