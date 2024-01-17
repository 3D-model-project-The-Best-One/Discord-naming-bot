// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../../data/sequelize");
//schemas
// const mailboxSchema = require("../../utils/models/mailboxes-schema")(sequelize,DataTypes);
const discord = require("discord.js");
const {ActivityType} = require('discord.js');
// const DiscordID = require("../auto/discordID");
module.exports = {
	name: 'ready',
	execute(client) {
		console.log(`Logged In as ${client.user.tag}`);
		try{
			// mailboxSchema.sync();
		}
		catch(err){
			console.log(err);
		}
		finally{
			console.log("schema synced");
		}
		// games.execute();
		// DiscordID.execute(client);
		//statusUpdater.execute(client);
	},
};