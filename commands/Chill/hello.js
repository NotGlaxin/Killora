module.exports = {
    config: {
        name: 'hello',
        description: 'Says Hello',
        aliases: ["hi"],
    },
    run: async (bot, message, args) => {
        message.channel.send("HI!");
    }
}