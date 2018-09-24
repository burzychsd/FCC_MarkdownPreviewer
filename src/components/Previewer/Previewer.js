import React, { Component } from 'react';
import windowIcon from '../Editor/window-icon.svg';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class Previewer extends Component {

	constructor(props) {
		super(props);
		this.preview = React.createRef();
	}

	componentDidMount() {
		const tokens = marked.lexer(this.props.text);
		this.preview.current.innerHTML = marked.parser(tokens);
	}

	componentDidUpdate(prevProps) {
		if(this.props.text !== prevProps.text) {
			const tokens = marked.lexer(this.props.text);
			this.preview.current.innerHTML = marked.parser(tokens);
		} 
	}

	render() {

	    return (
	        <div className={!(this.props.editor) && !(this.props.preview) ? "previewer-container flex flex-column flex-justify-center flex-align-center" : 
	        !(this.props.editor) && this.props.preview ? "full-window" : "hide"}>
	        	<div id="previewer-window">
	        		<div id="previewer-topbar" className="flex flex-row flex-justify-between flex-align-center">
						<p style={{ marginLeft: '1em' }}><span>P</span>reviewer</p>
						<img style={{ cursor: 'pointer', marginRight: '1em' }} src={windowIcon} alt="resize" onClick={this.props.resize} />
	        		</div>
	        		<div id="preview" ref={this.preview}>
	        		</div>
	        	</div>
	        </div>
	    );
	}
};

export default Previewer;
