const { Client, Intents, message, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login("ODA0NjYzMDE2MTI0OTczMDc2.GjYWmR.hktkC9Qhskp8VQ7WHPm8Fpw5xy52pfL7NnBE3Q");
const config = require('./config2.json')


const session = require('express-session');
const MongoStore = require('connect-mongo');
const SoftUI = require("dbd-soft-ui")
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
        port: config.dbd.port,
        client: config.discord.client,
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        domain: config.dbd.domain,
        ownerIDs: config.dbd.ownerIDs,
        useThemeMaintenance: true,
        useTheme404: true,
        bot: client,
        theme: SoftUI({
            customThemeOptions: {
                index: async ({ req, res, config }) => {
                    return {
                        values: [],
                        graph: {},
                        cards: [],
                    }
                },
            },
            shardspage: {
                enabled: true,
                key: "richard1234YT!",
            },
            sweetalert: {
                errors: {
                    requirePremium: "You need to be a premium member to do this."
                },
                success: {
                    login: "Successfully logged in."
                }
            },
            admin: {
                logs: {
                    enabled: true,
                    key: "richard1234YT!",
                },
            },
            premium: {
                enabled: true,
                card: {
                    title: "Want more from Ticket Bot?",
                    description: "Check out premium features below!",
                    bgImage: "https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png",
                    button: {
                        text: "Become Premium",
                        url: "https://ticketbot.mysellix.io/"
                    }
                }
            },
            footer: {
                replaceDefault: true,
                text: "Copyright © 2019 - 2023 SkyBlox Systems LTD"
            },
            websiteName: "Ticket Bot",
            colorScheme: "pink",
            supporteMail: "support@skybloxsystems.com",
            icons: {
                favicon: 'https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png',
                noGuildIcon: "https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png",
                sidebar: {
                    darkUrl: 'https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png',
                    lightUrl: 'https://cdn.discordapp.com/attachments/978357689295986778/1088202525997535292/Ticket_Bot_Logo_2023.png',
                    hideName: true,
                    borderRadius: false,
                    alignCenter: true
                },
            },
            index: {
                card: {
                    category: "Welcome",
                    title: "Ticket Bot",
                    description: "A discord bot made my SkyBlox Systems LTD",
                    link: {
                        enabled: true,
                        url: "https://skybloxsystems.com"
                    }
                },
                
                graph: {
                    enabled: true,
                    lineGraph: true,
                    title: 'Memory Usage',
                    tag: 'Memory (MB)',
                    max: 100
                },
            },
            sweetalert: {
                errors: {},
                success: {
                    login: "Successfully logged in.",
                }
            },
            preloader: {
                spinner: true,
                text: "Page is loading",
            },
            commands: [
                {
                    category: `Main Commands`,
                    subTitle: `All non-useful commands`,
                    list: [{
                        commandName: 'Christmas command',
                        commandUsage: `/christmas`,
                        commandDescription: 'Christmas countdown.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Support command',
                        commandUsage: `/support`,
                        commandDescription: 'Provide a discord invite link to support server.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'invite command',
                        commandUsage: `/invite`,
                        commandDescription: 'Invite the bot.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Help command',
                        commandUsage: `/help`,
                        commandDescription: 'List all of the commands.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Bot Info command',
                        commandUsage: `/botinfo`,
                        commandDescription: 'List info about the bot.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Settings command',
                        commandUsage: `/settings view`,
                        commandDescription: 'Show settings list.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Guild Info command',
                        commandUsage: `/guildinfo`,
                        commandDescription: 'List info about the server.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Status command',
                        commandUsage: `/status <shard / status>`,
                        commandDescription: 'List info about the shards or our status page.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Feedback  command',
                        commandUsage: `/feedback`,
                        commandDescription: 'Give feedback on a user.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Premium  command',
                        commandUsage: `/premium`,
                        commandDescription: 'Redeem premium.',
                        commandAlias: 'No aliases'
                    },
                    ],
                },
                {
                    category: `Support Commands`,
                    subTitle: `All support commands`,
                    list: [{
                        commandName: 'Ticket command',
                        commandUsage: `/ticket`,
                        commandDescription: 'Create a ticket.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Add command',
                        commandUsage: `/add <id / user id>`,
                        commandDescription: 'Add someone to the ticket.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Remove command',
                        commandUsage: `/remove <id / user id>`,
                        commandDescription: 'Remove someone from a ticket.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Claim command',
                        commandUsage: `/claim <ticket id>`,
                        commandDescription: 'Claim a ticket.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Lock command',
                        commandUsage: `/lock`,
                        commandDescription: 'Lock and unlock a ticket.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Close command',
                        commandUsage: `/close`,
                        commandDescription: 'Close a ticket.',
                        commandAlias: 'No aliases'
                    },

                    ],
                },
                {
                    category: `Premium Commands`,
                    subTitle: `All premium commands`,
                    list: [{
                        commandName: 'Premium command',
                        commandUsage: `/premium <code / view>`,
                        commandDescription: 'View or enter your premium code..',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Custom command',
                        commandUsage: `/custom`,
                        commandDescription: 'Custom bot.',
                        commandAlias: 'No aliases'
                    },
                    {
                        commandName: 'Voice call ticket command',
                        commandUsage: `/vcticket`,
                        commandDescription: 'Create a voice call ticket.',
                        commandAlias: 'No aliases'
                    },
                    ],
                },
            ],
        }),
        settings: [
            {
                categoryId: 'setup',
                categoryName: "Support Settings",
                categoryDescription: "Edit your support settings.",
                refreshOnSave: true,
                categoryOptionsList: [
                    {
                        optionId: 'TicketchannelID',
                        optionName: "Ticket Channel",
                        optionDescription: "Change your Ticket channel ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.TicketChannelID
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
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.TicketTrackerChannelID
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
                        optionId: 'SupportRole',
                        optionName: "Support Role",
                        optionDescription: "Change the Ticket Bot Support role ID.",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SupportRoleID
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
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.ManagerRoleID
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
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.AdminRoleID
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
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.EnableTicket
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
                    {
                        optionId: 'TicketTranscripts',
                        optionName: "Ticket Transcripts",
                        optionDescription: "Enable or Disable Transcripts.",
                        optionType: DBD.formTypes.select({ "Yes": 'Yes', "No": 'No' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.Transcript
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { Transcript: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'TicketReactions',
                        optionName: "Ticket Reactions",
                        optionDescription: "Enable or Disable reactions.",
                        optionType: DBD.formTypes.select({ "Yes": 'Yes', "No": 'No' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.UseTicketReactions
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { UseTicketReactions: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'TicketModMail',
                        optionName: "Ticket ModMail",
                        optionDescription: "Enable or Disable ModMail.",
                        optionType: DBD.formTypes.select({ "Enabled": 'Enabled', "Disabled": 'Disabled' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.ModMail
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { ModMail: newData }, async (err, data) => {
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
                categoryId: 'SecondGuild',
                categoryName: "Second Guild Settings",
                categoryDescription: "Second guild settings.",
                refreshOnSave: true,
                categoryOptionsList: [
                    {
                        optionId: 'SecondServer',
                        optionName: "Second Server",
                        optionDescription: "Enable or Disable Second Server.",
                        optionType: DBD.formTypes.select({ "Enabled": 'Enabled', "Disabled": 'Disabled' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServer
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServer: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'SecondServerID',
                        optionName: "Second Server ID",
                        optionDescription: "Change your second server ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServerID
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServerID: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'SecondServerSupportRoleID',
                        optionName: "Second server support ID",
                        optionDescription: "Change your second server support role ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServerSupportRoleID
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServerSupportRoleID: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'SecondServerAdminRoleID',
                        optionName: "Second server admin ID",
                        optionDescription: "Change your second server admin role ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.TicketChannelID
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
                        optionId: 'SecondServerManagerRoleID',
                        optionName: "Second manager ID",
                        optionDescription: "Change your second server manager role ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServerManagerRoleID
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServerManagerRoleID: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'SecondServerClaimChannel',
                        optionName: "Second Claim Channel",
                        optionDescription: "Change your second server claim channel ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServerClaimChannel
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServerClaimChannel: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'SecondServerLogsChannel',
                        optionName: "Second Logs Channel",
                        optionDescription: "Change your second server logs channel ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServerLogsChannel
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServerLogsChannel: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'SecondServerTranscriptChannel',
                        optionName: "Second Transcript Channel",
                        optionDescription: "Change your second transcript channel ID",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.SecondServerTranscriptChannel
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { SecondServerTranscriptChannel: newData }, async (err, data) => {
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
                categoryId: 'Other',
                categoryName: "Other Settings",
                categoryDescription: "Other settings.",
                refreshOnSave: true,
                categoryOptionsList: [
                    {
                        optionId: 'UseDashboard',
                        optionName: "Dashboard",
                        optionDescription: "Enable or Disable Dashboard.",
                        optionType: DBD.formTypes.select({ "Yes": 'Yes', "No": 'No' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.UseDashboard
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { UseDashboard: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'ROBLOX',
                        optionName: "Roblox",
                        optionDescription: "Enable or Disable Roblox ID.",
                        optionType: DBD.formTypes.select({ "Enabled": 'Enabled', "Dusabled": 'Dusabled' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.ROBLOX
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { ROBLOX: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'Important',
                        optionName: "Important info",
                        optionDescription: "Enable or Disable Important info.",
                        optionType: DBD.formTypes.select({ "Enabled": 'Enabled', "Dusabled": 'Dusabled' }),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.Important
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { Important: newData }, async (err, data) => {
                                if (err) throw err;
                                if (data) {
                                    data.save()
                                }
                            })
                            return;
                        }
                    },
                    {
                        optionId: 'OwnerID',
                        optionName: "Server Owner ID",
                        optionDescription: "Change server owner id",
                        optionType: DBD.formTypes.input(),
                        getActualSet: async ({ guild }) => {
                            const data = await MainSettings.findOne({ ServerID: guild.id})
                            return data.OwnerID
                        },
                        setNew: async ({ guild, newData }) => {
                            MainSettings.findOneAndUpdate({ ServerID: guild.id }, { OwnerID: newData }, async (err, data) => {
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
                refreshOnSave: true,
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
                            // return TicketChanIettings[guild.id] || null;
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
                refreshOnSave: true,
                categoryOptionsList: [
                    {
                        optionType: DBD.formTypes.embedBuilder({ username: 'SkyBlox Systems', avatarURL: 'https://twitter.com/SkybloxSystems/photo', defaultJson: { content: "Ticket Bot", embed: { title: "SkyBlox Systems" } } }),
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
})();

// client.login("token");