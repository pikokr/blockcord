/*
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
 */

import Blockly from "blockly";

Blockly.Blocks['discord_on'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('for each')
            .appendField('item')
            .appendField(new Blockly.FieldVariable());
        this.appendValueInput('LIST')
            .setCheck('Array')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('in list');
        this.appendStatementInput('DO')
            .appendField('do');
        this.setOnChange(function (change) {
        })
    }
}
