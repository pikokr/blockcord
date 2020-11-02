import Blockly from "blockly";

Blockly.Blocks['discord_on_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('메시지를 받았을 때')
        this.appendStatementInput('DO')
        this.setColour(230)
    }
}
