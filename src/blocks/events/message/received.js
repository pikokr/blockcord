import Blockly from "blockly";
import {registerRestrictions} from "../../restrictions";

Blockly.Blocks['discord_on_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('메시지를 받았을 때')
        this.appendStatementInput('DO')
        this.setColour(230)
    }
}

registerRestrictions('discord_send_message', [
    {
        type: "toplevelparent",
        message: "이 블록은 '메시지를 받았을 때' 블럭 안에서만 사용 가능해요!",
        types: [
            "discord_on_message"
        ]
    }
])
