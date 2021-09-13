  const prefixModel = require("../../Database/models/prefix.js");

module.exports = {
    config: {
        name: 'setprefix',
        description: 'Sets Bot Prefix!',
        aliases: ["newprefix", "setnewprefix"],
    },
    run: async (bot, message, args) => {
        const data = await prefixModel.findOne({
            GuildID: message.guild.id
        });
    
        if (!args[0]) return message.channel.send('You Must Provide **New Prefix**!');
    
        if (args[0].length > 5) return message.channel.send('Your New Prefix Must Be Under \`5\` Characters!')
    
        if (data) {
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
            
            message.channel.send(`The New Prefix Is Now **\`${args[0]}\`**`);
    
            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        } else if (!data) {
            message.channel.send(`The New Prefix Is Now **\`${args[0]}\`**`);
    
            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        }
    
    }
}