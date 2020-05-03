//require('dotenv').config();
const Discord = require('discord.js');
const bot=new Discord.Client();
const token='NzAzMTQwMzIxMjk4NjEyMzE0.Xq7Iog.OFJUgN3x8f8QJAkLRaFsFBgc7G0';


bot.on('ready',()=>{
    console.log('bot Is Online now');
})
bot.on('guildMemberAdd',member=>{
    var Channel =member.guild.channels.cache.find(channel=>channel.name=='welcome');
    if(!Channel) return;
    Channel.send(`welcome to our server,${member} please read the rules and regulation`);
})
bot.login(token);