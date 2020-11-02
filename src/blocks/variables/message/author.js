import Blockly from "blockly";
import {registerRestrictions} from "../../restrictions";

Blockly.Blocks['discord_message_author'] = {
    init: function () {
        this.appendValueInput('MSG')
            .setCheck('Message')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('메시지를 전송한 유저')
        this.setColour(230)
        this.setOutput(true, 'String')
    }
}

registerRestrictions('discord_message_author', [
    {
        type: "toplevelparent",
        message: "이 블록은 '메시지를 받았을 때' 블럭 안에서만 사용 가능해요!",
        types: [
            "s4d_on_message"
        ]
    }
]);
