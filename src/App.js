import React from "react";
import toolbox from "./toolbox";
import Blockly from "blockly";
import './blocks'

class App extends React.Component {
    componentDidMount() {
        const workspace = Blockly.inject('editor', {
            toolbox: toolbox
        })
        workspace.addChangeListener(Blockly.Events.disableOrphans)
        //workspace.addChangeListener(e => console.log(Blockly.JavaScript.workspaceToCode(workspace)))
    }

    render() {
        return (
            <div>
                <div id="editor" style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh'
                }}/>
            </div>
        )
    }
}

export default App;
