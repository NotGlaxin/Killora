const config = require('../../boconfig.json');
const Discord = require('discord.js');
const prefix = require('../../Database/models/prefix.js');

module.exports = async (client, message) => {
    if (message.author.bot) return;

    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    //If there was a data, use the database prefix BUT if there is no data, use the default prefix which you have to set!
    if(data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    } else if (!data) {
        //set the default prefix here
        const prefix = config.Prefix;
        
        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    }
};
