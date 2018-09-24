import React from 'react';
import windowIcon from './window-icon.svg';

const Editor = (props) => {
    return (
        <div className={!(props.editor) && !(props.preview) ? "editor-container flex flex-column flex-justify-center flex-align-center" : 
        props.editor && !(props.preview) ? "full-window" : "hide"}>
        	<div id="editor-window">
        		<div id="editor-topbar" className="flex flex-row flex-justify-between flex-align-center">
        			<p style={{ marginLeft: '1em' }}><span>E</span>ditor</p>
        			<img style={{ cursor: 'pointer', marginRight: '1em' }} src={windowIcon} alt="resize" onClick={props.resize} />
        		</div>
        		<textarea id="editor" value={props.input} onChange={props.change}>
        		{props.children}
        		</textarea>
        	</div>
        </div>
    );
};

export default Editor;
