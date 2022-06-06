import React from 'react';
import * as module from '../moduleTraitement/generate_synoptique'


export class ArbrePage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
      this.functionAffichageDiagram = this.functionAffichageDiagram.bind(this)
      this.functionExecuteSearchHandleChange = this.functionExecuteSearchHandleChange.bind(this)
      this.functionExecuteSearch = this.functionExecuteSearch.bind(this)
    }
    componentDidMount() {
      this.responseDiagram = this.functionAffichageDiagram()
    }
    componentWillUnmount() {
      clearInterval(this.responseDiagram)
      }
    functionExecuteSearchHandleChange(event) {
      this.setState({value: event.target.value});
    }
    functionAffichageDiagram () {
      return module.generateSynoptique(module.nodeDataArray2, module.linkDataArray2, this.props.myDiagramDivId)
    }
    functionExecuteSearch(event) {
      event.preventDefault();
      module.searchDiagram(this.state.value, this.responseDiagram)
    }
    render() {
      const myDiagramDivStyle = {
        backgroundColor: 'white',
        border: '1px solid black',
        width: '100%',
        height: '100vh',
        position: 'relative',
      };
        
      return (
        <div className="container-fluid">
            <input id="mySearch" className="m-2" type="search" placeholder="Chercher par Prenom" onChange={this.functionExecuteSearchHandleChange}/>
            <button id="" className="btn btn-primary m-2" onClick={this.functionExecuteSearch}>Chercher</button>
            <div id={this.props.myDiagramDivId} className="mt-3" style={myDiagramDivStyle}></div>
        </div>
      );
    }
  }

  
export default ArbrePage
  