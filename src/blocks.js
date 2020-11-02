import {Constants} from "discord.js";

const blocks = [
    {
        'type': 'discord_on',
        'message0': '디스코드 이벤트 %1 이(가) 발생했을때',
        'args0': [
            {
                'type': 'field_dropdown',
                'name': '이벤트',
                'options': Object.values(Constants.Events).map(r => [r, r])
            }
        ],
        'inputsInline': false,
        'colour': 230,
        'tooltip': '디스코드 봇 이벤트가 발생했을때 실행되는 이벤트를 정의합니다',
        'helpUrl': '',
        "message1": "실행 %1",
        "args1": [
            {"type": "input_statement", "name": "listener"}
        ],
    },
    {
        'type': 'discord_on_message',
        'inputsInline': false,
        'colour': 230,
        'tooltip': '디스코드 봇이 있는 서버 또는 채널에 메시지가 전송되었을때 실행하는 코드',
        'helpUrl': '',
        "message0": "메시지를 받았을 때 %1",
        "args0": [
            {"type": "input_statement", "name": "listener"}
        ],
    },
]


export default blocks
