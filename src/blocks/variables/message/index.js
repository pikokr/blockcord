import Blockly from "blockly";
import {registerRestrictions} from "../../restrictions";
import './content'
import './author'
import './channel'

Blockly.Blocks['discord_message'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('메시지')
        this.setColour(230)
        this.setOutput(true, 'Message')
        this.setInputsInline(true)
    }
}

registerRestrictions('discord_message', [
    {
        type: "toplevelparent",
        message: "이 블록은 '메시지를 받았을 때' 블럭 안에서만 사용 가능해요!",
        types: [
            "discord_on_message"
        ]
    }
]);
