import React from "react";
import blocks from "./blocks";
import Blockly from "blockly";

class App extends React.Component {
    componentDidMount() {
        const workspace = Blockly.inject('editor', {
            toolbox: document.getElementById('toolbox')
        })
        workspace.addChangeListener(e => console.log(Blockly.JavaScript.workspaceToCode(workspace)))
    }

    render() {
        return (
            <div>
                <div id="editor" style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh'
                }}/>
                <div dangerouslySetInnerHTML={{__html: blocks}}/>
            </div>
        )
    }
}

export default App;
