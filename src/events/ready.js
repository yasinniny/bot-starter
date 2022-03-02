module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`The bot is on you are currently using ${client.user.id}`);
    }
}
