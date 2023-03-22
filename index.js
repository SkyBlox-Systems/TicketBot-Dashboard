const { Client, Intents, message, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login("ODA0NjYzMDE2MTI0OTczMDc2.GjYWmR.hktkC9Qhskp8VQ7WHPm8Fpw5xy52pfL7NnBE3Q");


const session = require('express-session');
const MongoStore = require('connect-mongo');
const DarkDashboard = require('dbd-dark-dashboard');
const DatabaseMongo = require('./mongo');
const MainSettings = require('./schemas/TicketData')
let langsSettings = {};
let TicketChanIettings = {};
let TicketTrackerSettings = {};
let PrefixSettings = {};
let SupportSettings = {};
let ManagerSettings = {};
let AdminSettings = {};
let TicketSettings = {};
const BotOwnerAdminID = ['406164395643633665'];

/* --- DASHBOARD --- */
(async () => {



    let DBD = require('discord-dashboard');
    await DBD.useLicense('b2884f36-fed7-4282-8fec-18636f34cd60');
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
            sessionSaveSession: MongoStore.create({ mongoUrl: 'mongodb+srv://TicketBot:RDs74YoKBLY34EApfnpJF8G6iHEnXMgTcBdh3M4t@main.hkwzs.mongodb.net/TicketBot?retryWrites=true&w=majority' }),
            port: 80,
            client: {
                id: '799231222303293461',
                secret: 'ODA0NjYzMDE2MTI0OTczMDc2.GjYWmR.hktkC9Qhskp8VQ7WHPm8Fpw5xy52pfL7NnBE3Q'
            },
            redirectUri: 'http://localhost/discord/callback', // https://test.ticketbots.tk/discord/callback http://localhost/discord/callback
            domain: 'http://localhost', // https://test.ticketbots.tk http://localhost
            bot: client,
            theme: DarkDashboard({
                information: {
                    createdBy: "SkyBlox Systems",
                    websiteTitle: "Ticket Bot",
                    websiteName: "Ticket Bot",
                    websiteUrl: "http://localhost",
                    dashboardUrl: "http://localhost:3000", // https://test.ticketbots.tk:3000/ http://localhost:3000/
                    supporteMail: "support@skybloxsystems.com",
                    supportServer: "https://www.ticketbot.co.uk/discord",
                    imageFavicon: "https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png",
                    iconURL: "https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png",
                    pagestylebg: "linear-gradient(to #2CA8FF, pink 0%, #155b8d 100%)",
                    main_color: "#2CA8FF",
                    sub_color: "#ebdbdb",
                },
                invite: {
                    client_id: "799231222303293461",
                    redirectUri: "http://localhost/close", // http://localhost:3000/close
                    permissions: "8",
                },
                index: {
                    card: {
                        category: "Ticket Bot's Panel - The center of everything",
                        title: `Welcome to the iMidnight discord where you can control the core features to the bot.`,
                        image: "https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png",
                        footer: "Footer",
                    },
                    information: {
                        category: "Category",
                        title: "Pre-Release",
                        description: `This dashboard is a test version of the dashboard for Ticket Bot v3.0.. This will also include the update of Discord.js 13`,
                        footer: "Footer",
                    },
                    feeds: {
                        category: "Category",
                        title: "Information",
                        description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
                        footer: "Footer",
                    },
                },
                guilds: {
                    cardTitle: "Guilds",
                    cardDescription: "Here are all the guilds you currenly have permissions for:",
                },
                //If guildSettings is removed the text will not be visible.
                guildSettings: {
                    cardTitle: "Guild Settings",
                    cardDescription: "Here you can manage all the settings for your guild:",
                },
                commands: [
                    {
                        category: `Starting Up`,
                        subTitle: `All helpful commands`,
                        list: [{
                            commandName: 'Update command',
                            commandUsage: `!update`,
                            commandDescription: 'Update your bot to the latest version.',
                            commandAlias: 'No aliases'
                        },
                        {
                            commandName: "Settings command",
                            commandUsage: "!settings",
                            commandDescription: "Edit your bot config.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Install command",
                            commandUsage: "!install",
                            commandDescription: "N/A",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Command Enable command",
                            commandUsage: "!CommandEnable <command name>",
                            commandDescription: "Allow you to enable a command you disabled.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Command Disable command",
                            commandUsage: "!CommandDisable <command name>",
                            commandDescription: "Allow you to enable a command you disabled.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Clear command",
                            commandUsage: "!clear",
                            commandDescription: "Clear the channel.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Announce command",
                            commandUsage: "!announce <channel id> <message>",
                            commandDescription: "Allow you to send an announcement",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Add command",
                            commandUsage: "!add <user id>",
                            commandDescription: "Add a user to a ticket.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Claim Ticket command",
                            commandUsage: "!ClaimTicket <Ticket ID>",
                            commandDescription: "Claim a user ticket.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Close command",
                            commandUsage: "!close",
                            commandDescription: "Close a ticket.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Lock command",
                            commandUsage: "!lock",
                            commandDescription: "Lock a ticket from being enable to type.",
                            commandAlias: "Alias",
                        },
                        {
                            commandName: "Remove command",
                            commandUsage: "!remove <user id>",
                            commandDescription: "Remove a user from a ticket.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Server Announce command",
                            commandUsage: "!ServerAnnounce <message>",
                            commandDescription: "Send everyone a direct message.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Setup command",
                            commandUsage: "!setup",
                            commandDescription: "Setup the bot first time in your server.",
                            commandAlias: "No aliases",
                        },
                        {
                            commandName: "Ticket command",
                            commandUsage: "!ticket <reason>",
                            commandDescription: "Create a ticket.",
                            commandAlias: "No aliases",
                        },

                        ],
                    },
                ],
            }),
            settings: [
                {
                    categoryId: 'setup',
                    categoryName: "Main Settings",
                    categoryDescription: "Setup your bot with default settings!",
                    categoryOptionsList: [
                        {
                            optionId: 'TicketchannelID',
                            optionName: "Ticket Channel",
                            optionDescription: "Change your Ticket channel ID",
                            optionType: DBD.formTypes.input(),
                            getActualSet: async ({ guild }) => {
                                return TicketChanIettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { TicketChannelID: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                        {
                            optionId: 'TicketTrackerchannelID',
                            optionName: "Ticket Tracker channel",
                            optionDescription: "Change your Ticket Tracker channel ID",
                            optionType: DBD.formTypes.input(),
                            getActualSet: async ({ guild }) => {
                                return TicketTrackerSettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { TicketTrackerChannelID: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                        {
                            optionId: 'Prefix',
                            optionName: "Prefix",
                            optionDescription: "Change your server prefix.",
                            optionType: DBD.formTypes.input(),
                            getActualSet: async ({ guild }) => {
                                return PrefixSettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { BotPrefix: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                        {
                            optionId: 'SupportRole',
                            optionName: "Support Role",
                            optionDescription: "Change the Ticket Bot Support role ID.",
                            optionType: DBD.formTypes.input(),
                            getActualSet: async ({ guild }) => {
                                return SupportSettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SupportRoleID: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                        {
                            optionId: 'ManagerRole',
                            optionName: "Manager Role",
                            optionDescription: "Change the Ticket Bot Manager role ID.",
                            optionType: DBD.formTypes.input(),
                            getActualSet: async ({ guild }) => {
                                return ManagerSettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { ManagerRoleID: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                        {
                            optionId: 'AdminRole',
                            optionName: "Admin Role",
                            optionDescription: "Change the Ticket Bot Admin role ID.",
                            optionType: DBD.formTypes.input(),
                            getActualSet: async ({ guild }) => {
                                return AdminSettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { AdminRoleID: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                        {
                            optionId: 'TicketCreations',
                            optionName: "Ticket Creations",
                            optionDescription: "Enable or Disable Tickets.",
                            optionType: DBD.formTypes.select({ "Enabled": 'Enabled', "Disabled": 'Disabled' }),
                            getActualSet: async ({ guild }) => {
                                return TicketSettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { EnableTicket: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            }
                        },
                    ]
                },
                {
                    categoryId: 'BotOwner',
                    categoryName: "Bot Owner",
                    categoryDescription: "Only Settings what the bot owner can edit.",
                    categoryOptionsList: [
                        {
                            optionId: 'BotVersion',
                            optionName: "Bot Version",
                            optionDescription: "Change your bot version",
                            optionType: DBD.formTypes.input('v3.0 Beta'),
                            getActualSet: async ({ guild }) => {
                                return TicketChanIettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { BotVersion: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            },
                            usersAllowed: BotOwnerAdminID
                        },
                        {
                            optionId: 'PaidGuild',
                            optionName: "Paid Guild",
                            optionDescription: "Change your server to a paid guild",
                            optionType: DBD.formTypes.select({ "Yes": 'Yes', "No": 'No' }),
                            getActualSet: async ({ guild }) => {
                                return TicketChanIettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { PaidGuild: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            },
                            usersAllowed: BotOwnerAdminID
                        },
                        {
                            optionId: 'ServerID',
                            optionName: "Server ID (If needed)",
                            optionDescription: "Change the Server ID",
                            optionType: DBD.formTypes.input('00000000000'),
                            getActualSet: async ({ guild }) => {
                                return TicketChanIettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { ServerID: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            },
                            usersAllowed: BotOwnerAdminID
                        },
                        {
                            optionId: 'TicketNumber',
                            optionName: "Ticket Number (If needed)",
                            optionDescription: "Change the Server Ticket Number Ammount (Needed if an error occoured in database)",
                            optionType: DBD.formTypes.input('0'),
                            getActualSet: async ({ guild }) => {
                                return TicketChanIettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {
                                MainSettings.findOneAndUpdate({ ServerID: guild.id }, { TicketNumber: newData }, async (err, data) => {
                                    if (err) throw err;
                                    if (data) {
                                        data.save()
                                    }
                                })
                                return;
                            },
                            usersAllowed: BotOwnerAdminID
                        },
                    ]
                },
                {
                    categoryId: 'Embed',
                    categoryName: "Embed Builder",
                    categoryDescription: "Build a embed",
                    categoryOptionsList: [
                        {
                            optionType: DBD.formTypes.embedBuilder({username: 'SkyBlox Systems', avatarURL: 'https://twitter.com/SkybloxSystems/photo', defaultJson: {content: "Ticket Bot", embed: {title: "SkyBlox Systems"}}}),
                            getActualSet: async ({ guild }) => {
                                return TicketChanIettings[guild.id] || null;
                            },
                            setNew: async ({ guild, newData }) => {

                                return TicketChanIettings[guild.id] || null;
                            }
                        },

                    ]
                },
                
            ]
            
        });

// TicketNumber

Dashboard.init();
DatabaseMongo.init();
}) ();

// client.login("token");