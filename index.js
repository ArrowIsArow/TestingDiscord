const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Loggen in as ${client.user.tag}!`);
});

client.on('message', msg => [
    if (msg.content === 'ping') {
        msg.reply('Pong!')
    }
]);

client.login('NzQ0MzEwNjA3NDIyOTQ3NDI4.XzhXRQ.E45usgJvN35MQ9OVl85MEV2KSq0')
