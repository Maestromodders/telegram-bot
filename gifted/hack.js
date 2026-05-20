const { gmd } = require('../gift');

gmd({
    pattern: "hack",
    aliases: ["hacker", "prank"],
    react: "😈",
    category: "fun",
    description: "Prank hack simulation",
    cooldown: 30
},

async (msg, Gifted, conText) => {
    const { reply } = conText;

    try {
        const steps = [
            "```Injecting Malware```",
            "``` █ 10%```",
            "```█ █ 20%```",
            "```█ █ █ 30%```",
            "```█ █ █ █ 40%```",
            "```█ █ █ █ █ 50%```",
            "```█ █ █ █ █ █ 60%```",
            "```█ █ █ █ █ █ █ 70%```",
            "```█ █ █ █ █ █ █ █ 80%```",
            "```█ █ █ █ █ █ █ █ █ 90%```",
            "```█ █ █ █ █ █ █ █ █ █ 100%```",
            "```System hijacking on process..```\n```Connecting to Server error to find 404```",
            "```Device successfully connected...\nReceiving data...```",
            "```Data hijacked from device 100% completed\nKilling all evidence, killing all malwares...```",
            "```HACKING COMPLETED```",
            "```SENDING LOG DOCUMENTS...```",
            "```SUCCESSFULLY SENT DATA AND Connection disconnected```",
            "```BACKLOGS CLEARED```",
            "```POWERED BY CYBERPUNK-BULLY TBOT```",
            "```SYSTEM FUCKED 💀```"
        ];

        let progressMessage = await reply(steps[0], { parse_mode: 'Markdown' });

        for (let i = 1; i < steps.length; i++) {
            await Gifted.editMessageText(steps[i], {
                chat_id: conText.chatId,
                message_id: progressMessage.message_id,
                parse_mode: 'Markdown'
            });
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } catch (error) {
        console.error('[ERROR]', error);
        await reply('An error occurred during the prank hack simulation.');
    }
});
