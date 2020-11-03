const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Control",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_if"
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                },
                {
                    "kind": "block",
                    "type": "controls_for"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Logic",
            "contents": [{"kind": "block", "type": "logic_compare"}, {
                "kind": "block",
                "type": "logic_operation"
            }, {"kind": "block", "type": "logic_boolean"}]
        }, {"kind": "category", "name": "Variables", "custom": "VARIABLE"},
        {"kind": "category", "name": "Functions", "custom": "PROCEDURE"},
        {
            kind: "category",
            name: 'Discord',
            contents: [
                {"kind": "block", "type": "discord_on"},
            ]
        },
        {
            kind: 'category',
            name: 'Message',
            contents: [
                {"kind": "block", "type": "discord_on_message"},
                {"kind": "block", "type": "discord_message"},
                {"kind": "block", "type": "discord_message_content"},
                {"kind": "block", "type": "discord_message_author"},
                {"kind": "block", "type": "discord_message_channel"},
                {"kind": "block", "type": "discord_send_message"},
            ]
        }
    ]
}

export default toolbox
