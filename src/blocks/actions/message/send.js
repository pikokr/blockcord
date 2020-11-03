import Blockly from "blockly";

Blockly.Blocks['discord_send_message'] = {
    init: function () {
        this.setPreviousStatement(true)
        this.appendDummyInput()
            .appendField('메시지 보내기')
        this.appendValueInput('CONTENT')
            .setCheck('String')
            .appendField('내용: ')
        this.appendValueInput('CHANNEL')
            .setCheck('Channel')
            .appendField('채널: ')
        this.setColour(230)
    }
}
