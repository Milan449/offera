const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Een titel')
            .setDescription("Zet de beschrijving")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setThumbnail('https://cdn.discordapp.com/attachments/754731057445863464/780442719222759434/image0.jpg')
            .setImage('https://cdn.discordapp.com/attachments/754731057445863464/780442719222759434/image0.jpg')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://cdn.discordapp.com/attachments/754731057445863464/780442719222759434/image0.jpg');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}