import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Editor from '../components/Editor/Editor';
import Previewer from '../components/Previewer/Previewer';
import Footer from '../components/Footer/Footer';
import markdown from './Markdown.md';

class App extends Component {

  state = {
    editorText: '',
    resizeEditor: false,
    resizePreviewer: false,
  }

  componentDidMount() {
    fetch(markdown).then((response) => response.text()).then((text) => {
      this.setState({ editorText: text })
    })
  }

  onChangeHandle = (event) => {
    this.setState({ editorText: event.target.value });
  }

  resizeEditorHandle = () => {
    this.setState(state => ({
      resizeEditor: !state.resizeEditor
    }));
  }

  resizePreviewerHandle = () => {
    this.setState(state => ({
      resizePreviewer: !state.resizePreviewer
    }));
  }

  render() {

    return (
      <Fragment>
        <Header />
        <Main>
          <Editor 
          input={this.state.editorText} 
          change={this.onChangeHandle} 
          resize={this.resizeEditorHandle} 
          editor={this.state.resizeEditor} 
          preview={this.state.resizePreviewer} />
          <Previewer 
          text={this.state.editorText} 
          resize={this.resizePreviewerHandle} 
          editor={this.state.resizeEditor} 
          preview={this.state.resizePreviewer} />
        </Main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
