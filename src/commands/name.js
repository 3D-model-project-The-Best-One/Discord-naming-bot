const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("name")
    .setDescription("Create a object name based on the type of object")
    .addStringOption(option =>
        option.setName('past-present')
            .setDescription('Is the object used for past, present or both')
            .addChoices(
				{ name: 'Past', value: 'level_past' },
				{ name: 'Present', value: 'level_present' },
				{ name: 'Both', value: 'level_both' },
			)
            .setRequired(true))
    .addStringOption(option =>
        option.setName('object-type')
            .setDescription('What main type of object is it (architecture, environment, prop, etc)')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('object-subtype')
            .setDescription('What sub type of object is it (building, pipe, etc)')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('object-variant')
            .setDescription('What variant of object is it (straight, corner, etc)')
            .setRequired(false))
    .addNumberOption(option =>
        option.setName('object-variantnumber')
            .setDescription('What variant number of object is it (1, 2, 3, etc)')
            .setRequired(false)),
        

    async execute(interaction, client) {
        // await interaction.reply("Pong!");
        //Create a name with the information given
        //Start with presents or past
        // Object
        // Type of object
        // Variant number

        // If there is high poly or low poly
        // _High and _Low
        // Example PresnInteriorPipeStraightV1
        
        let PastOrPresent = interaction.options.getString('past-present');
        let ObjectType = interaction.options.getString('object-type');
        let ObjectSubType = interaction.options.getString('object-subtype');
        let ObjectVariant = interaction.options.getString('object-variant');
        let ObjectVariantNumber = interaction.options.getNumber('object-variantnumber');
        let name = "";
        if (PastOrPresent === "level_past") {
            name += "Past_";
        } else if (PastOrPresent === "level_present") {
            name += "Present_";
        } else if (PastOrPresent === "level_both") {
            name += "Both_";
        }
        //decrease object type to 5 characters if it is longer
        if (ObjectType.length > 5) {
            ObjectType = ObjectType.substring(0, 5);
            //make sure the first letter is capitalized
        }
        ObjectType = ObjectType.charAt(0).toUpperCase() + ObjectType.slice(1);
        name += ObjectType;
        //decrease object subtype to 5 characters if it is longer
        if (ObjectSubType.length > 5) {
            if(ObjectVariant && ObjectVariantNumber)
            {
                ObjectSubType = ObjectSubType.substring(0, 5);
            }
            //make sure the first letter is capitalized
        }
        ObjectSubType = ObjectSubType.charAt(0).toUpperCase() + ObjectSubType.slice(1);
        name += ObjectSubType;
        //decrease object variant to 5 characters if it is longer

        if (ObjectVariant) {
            ObjectVariant = ObjectVariant.charAt(0).toUpperCase() + ObjectVariant.slice(1);
            name += ObjectVariant;
        }

        //add variant number if it is present
        if (ObjectVariantNumber) {
            name += "V" + ObjectVariantNumber;
        }
        //add high or low poly at the end
        let HighName = name + "_High";
        let LowName = name + "_Low";

        let fieildArry = [
            {name : "Object Name", value : name, inline : false},
            {name : "High Poly Name", value : HighName, inline : false},
            {name : "Low Poly Name", value : LowName, inline : false}
        ];
        const embed = new Discord.EmbedBuilder()
        .setTitle("Object Name")
        .setDescription("The name of the object is: ")
        .addFields(fieildArry)
        .setColor("#FF0000");
        await interaction.reply({ embeds: [embed] });
        // await interaction.reply(name);


    },
};
