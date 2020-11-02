import Blockly from "blockly";

Blockly.Blocks['discord_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('메시지')
        this.setColour(230)
        this.setOutput(true, 'Message');
        this.appendValueInput('GET')
        this.setInputsInline(true)
    }
}
