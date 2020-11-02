import Blockly from "blockly";
import {registerRestrictions} from "../../restrictions";

Blockly.Blocks['discord_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('메시지')
        this.setColour(230)
        this.setOutput(true, 'Message');
        this.appendValueInput('GET')
        this.setInputsInline(true)
        this.setOnChange(function (e) {
            console.log(this.getParent())
        })
    }
}

registerRestrictions('discord_message', [
    {
        type: "toplevelparent",
        message: "이 블록은 '메시지를 받았을 때' 블럭 안에서만 사용 가능해요!",
        types: [
            "s4d_on_message"
        ]
    }
]);
