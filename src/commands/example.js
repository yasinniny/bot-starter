const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Bot will say pong!"),
    async execute() {
        interaction.reply("Pong!");
        setTimeout(() => interaction.deleteReply(), 5000);
    }
}
