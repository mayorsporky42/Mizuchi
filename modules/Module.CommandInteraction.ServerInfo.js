const Augur = require("augurbot"),
    u = require("../utils/Utils.Generic");
const { BaseMessageComponent, MessageButton, MessageActionRow } = require("discord.js");
const snowflakes = require('../config/snowflakes.json');


let memeLinks = [
    "https://cdn.discordapp.com/attachments/697869453605601352/933133090249908234/Iceberg_26122021104304.jpg",
    "https://cdn.discordapp.com/attachments/697869453605601352/931422425919389756/received_269847078157064.jpeg",
    "https://cdn.discordapp.com/attachments/697869453605601352/924898168607494165/SPOILER_aged_like_fine_wine.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/924771025160384572/Polish_20211226_1406251742.jpg",
    "https://media.discordapp.net/attachments/824862207270977557/920717254377762866/ezgif.com-gif-maker_24.gif",
    "https://cdn.discordapp.com/attachments/697869453605601352/911964611476094986/unknown.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/911473470045564928/unknown.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/909373921323782164/unknown.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/908126909366419456/SPOILER_unknown.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/908094210622783569/SPOILER_unknown.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/907482456813350952/SOUBREAD2.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/903140346840633394/5s3ft3.jpg",
    "https://cdn.discordapp.com/attachments/697869453605601352/901271050338320394/ZomboMeme_23102021061857.jpg",
    "https://cdn.discordapp.com/attachments/697869453605601352/898826116255608842/Jin_nosee.png",
    "https://cdn.discordapp.com/attachments/697869453605601352/895890645699407962/zgni7pn5l9u512.png",
    "https://www.youtube.com/watch?v=bxqLsrlakK8",
    "https://www.youtube.com/watch?v=k4h6WK0D4O8",
    "https://www.youtube.com/watch?v=kCXzb1BGRrs"
]


const Module = new Augur.Module()
    .addInteractionCommand({
        name: "staff",
        guildId: snowflakes.guilds.PrimaryServer,
        process: async (interaction) => {
            await interaction.deferReply?.({ ephemeral: false });
            let SW = await interaction.guild.members.cache.map((m) => { if (m.roles.cache.has(snowflakes.roles.SoaringWings)) return m.displayName || m.username }).filter(r => (r != null)).join(`\n`);

            let Mod = await interaction.guild.members.cache.map((m) => { if (m.roles.cache.has(snowflakes.roles.Whisper) && !m.roles.cache.has(snowflakes.roles.Admin)) return m.displayName || m.username }).filter(r => (r != null)).join(`\n`);

            let Admin = await interaction.guild.members.cache.map((m) => { if (m.roles.cache.has(snowflakes.roles.Admin)) return m.displayName || m.username }).filter(r => (r != null)).join(`\n`);

            let whisperRole = (await interaction.guild.roles.cache.get(snowflakes.roles.Whisper));

            let color = whisperRole.hexColor;

            let embed = u.embed().setTitle("Current Climbers Court Staff Members:").setDescription(`<@&${snowflakes.roles.Admin}>:` + "```" + Admin + "```\n\n" + `<@&${snowflakes.roles.Whisper}>:` + "```" + Mod + "```\n\n" + `<@&${snowflakes.roles.SoaringWings}>:` + "```" + SW + "```\n\n\n\n").setColor(color);

            interaction.editReply({ embeds: [embed] });
        }

    })
    .addInteractionCommand({
        name: "repo",
        guildId: snowflakes.guilds.PrimaryServer,
        process: async (interaction) => {
            let components = new MessageActionRow()
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "View My Code",
                        style: "LINK",
                        url: "https://github.com/chevyboys/Mizuchi/"
                    }))
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "Request a feature",
                        style: "LINK",
                        url: "https://github.com/chevyboys/Mizuchi/issues/new/choose"
                    }))
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "Report a bug",
                        style: "LINK",
                        url: "https://github.com/chevyboys/Mizuchi/issues/new/choose"
                    }))
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "See Current Projects",
                        style: "LINK",
                        url: "https://github.com/chevyboys/Mizuchi/projects/1"
                    }))
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "Support the Developers",
                        style: "LINK",
                        url: "https://www.patreon.com/GhostBotCode"
                    }));

            await interaction.reply({ content: "**__Helpful Links__**", components: [components], ephemeral: false });
        }

    })
    .addInteractionCommand({
        name: "links",
        guildId: snowflakes.guilds.PrimaryServer,
        process: async (interaction) => {
            let components = new MessageActionRow()
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "The Author's Blog",
                        style: "LINK",
                        url: "https://andrewkrowe.wordpress.com/"
                    }))
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "The Wiki",
                        style: "LINK",
                        url: "https://wydds.wiki/"
                    }))

                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "The Code",
                        style: "LINK",
                        url: "https://github.com/chevyboys/Mizuchi"
                    }))
                .addComponents(
                    new MessageButton({
                        disabled: false,
                        label: "Adorable Cockatrices",
                        style: "LINK",
                        url: memeLinks[Math.floor(Math.random() * memeLinks.length)]
                    }));

            await interaction.reply({ content: "**__Cool things to check out:__**", components: [components], ephemeral: false });
        }

    })
const Registrar = require("../utils/Utils.CommandRegistrar");
//Register commands
let commands = [
    new Registrar.SlashCommandBuilder()
        .setName("repo")
        .setDescription("shows helpful links for the bot's info"),
    new Registrar.SlashCommandBuilder()
        .setName("links")
        .setDescription("shows helpful links to things around the fandom")
]
Module.addEvent("ready", async () => {
    commandResponse = await Registrar.registerGuildCommands(Module, commands)
});

module.exports = Module;
