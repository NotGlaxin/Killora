const prefixModel = require("../../Database/models/prefix.js");

module.exports = {
    config: {
        name: 'resetprefix',
        description: 'Resets Bot Prefix!',
        aliases: ["resetoldprefix", "resetnewprefix"],
    },
    run: async (bot, message, args) => {
        const data = await prefixModel.findOne({
            GuildID: message.guild.id
        });
        
        if (data) {
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
        }

            let newData = new prefixModel({
                Prefix: ';',
                GuildID: message.guild.id
            })
            newData.save();
            message.reply("The Prefix Is Reseted To The Default Prefix!")
        }    
}