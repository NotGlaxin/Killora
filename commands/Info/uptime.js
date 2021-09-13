const Discord = require('discord.js');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
    config: {
        name: 'uptime',
        description: 'Shows bot uptime',
        aliases: ["startfrom"],
    },
    run: async (bot, message, args) => {
        let uptime = moment.duration(bot.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL()
    const botembed = new Discord.MessageEmbed()
        .setTitle("Killora Uptime")
        .setColor('PURPLE')
        .setDescription(`**Killora Is Active From** \`${uptime}\`. \n  ❗  **__Attention!__** **Killora Will Restart After Every 10 Hours**`)
        .setTimestamp()
        .setFooter('Killora')
        .setThumbnail(bicon);
    message.channel.send({ embeds: [botembed] });
    }
}