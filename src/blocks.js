import {Constants} from "discord.js";

const blocks = [
    {
        'type': 'discord_on',
        'message0': '디스코드 이벤트 %1',
        'args0': [
            {
                'type': 'field_dropdown',
                'name': '이벤트',
                'options': Object.values(Constants.Events).map(r => [r, r])
            }
        ],
        'inputsInline': false,
        'nextStatement': null,
        'colour': 230,
        'tooltip': '디스코드 봇 이벤트가 발생했을때 실행되는 이벤트를 정의합니다',
        'helpUrl': ''
    }
]

export default blocks
