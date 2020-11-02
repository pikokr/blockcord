import Blockly from "blockly";
import {registerRestrictions} from "../../restrictions";

Blockly.Blocks['discord_message_content'] = {
    init: function () {
        this.appendValueInput('MSG')
            .setCheck('Message')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('내용')
        this.setColour(230)
        this.setOutput(true, 'String')
    }
}

registerRestrictions('discord_message_content', [
    {
        type: "toplevelparent",
        message: "이 블록은 '메시지를 받았을 때' 블럭 안에서만 사용 가능해요!",
        types: [
            "discord_on_message"
        ]
    }
]);
