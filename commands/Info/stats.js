Discord = require('discord.js');
const config = require('../../boconfig.json');
const moment = require('moment')

const { MessageEmbed } = require('discord.js');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
    config: {
        name: 'stats',
        description: 'Shows Bot Stats!',
        aliases: ["botinfo"]
    },
    run: async (client, message, args) => {
    
        const d = moment.duration(message.client.uptime);
        const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
        const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
        const clientStats = stripIndent`
          Servers   :: ${message.client.guilds.cache.size}
          Users     :: ${message.client.users.cache.size}
          Channels  :: ${message.client.channels.cache.size}
          WS Ping   :: ${Math.round(message.client.ws.ping)}ms
          Uptime    :: ${days} and ${hours}
          Cores     :: ${cpu.count()}
        `;
        const embed = new MessageEmbed()
          .setTitle(' KILORA STATS')
          .addField('Client Stats', `\`\`\`asciidoc\n${clientStats}\`\`\``)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('PURPLE');
        message.channel.send({ embeds: [embed] });
      
    
          }
}