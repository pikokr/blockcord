const blocks = [
    {
        "type": "discord_on",
        "message0": "디스코드 이벤트 %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "이벤트",
                "options": [
                    "rateLimit",
                    "ready",
                    "resumed",
                    "guildCreate",
                    'guildDelete',
                    'guildUpdate',
                    'inviteCreate',
                    'inviteDelete',
                    'guildUnavailable',
                    'guildMemberAdd',
                    'guildMemberRemove'
                ].map(r => [r, r])
            }
        ],

        "inputsInline": false,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
]

export default blocks
