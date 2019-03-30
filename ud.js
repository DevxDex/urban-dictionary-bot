const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//logs
client.on("ready", () => {
  console.log(`\x1b[33m`, `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
  console.log(`\x1b[32m`, `${client.user.tag} started`);
  console.log(`\x1b[36m%s\x1b[0m`, `Having Issues? Join our Discord!`);
  console.log(`\x1b[36m%s\x1b[0m`, `https://discord.gg/xuaDubj`);
  console.log(`\x1b[33m`, `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
});
client.on("message", message => {
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try{
    console.log(`\x1b[33m`, `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
    console.log(`\x1b[32m`, `${message.author.tag} executed '${command}'`);
    console.log(`\x1b[33m`, `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
      let lecomando = require(`./commands/${command}.js`);
      lecomando.run(client, message, args, Discord);
  } catch (err) {
    console.log(`\x1b[33m`, `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
    console.error(`\x1b[32m`, `[ERROR]: ${err.message}`);
    console.log(`\x1b[33m`, `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
  }
});

client.login(config.token)
