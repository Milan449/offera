const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('wilt u solliciteren')
            .setDescription("bekijk dan de sollicitatie kanalen een van de dingen die we hard nodig hebben is anwb")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setThumbnail('https://cdn.discordapp.com/attachments/754731057445863464/780442719222759434/image0.jpg')
            .setImage('https://cdn.discordapp.com/attachments/754731057445863464/780442719222759434/image0.jpg')
            .setTimestamp()
            .setFooter('Ventix-Roleplay', 'https://cdn.discordapp.com/attachments/754731057445863464/780442719222759434/image0.jpg');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "solliciteer"
}