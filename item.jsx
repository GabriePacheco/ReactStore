import React from 'react';


class Item extends React.Component {
	constructor (props){
		super(props);
		this.state = {id:""}
	}
	componentDidMount (){
		var name = this.props.params

		console.log(this.props.params);
		this.setState({id: name});
	}
	render(){
		return (
			<h2>El Item {this.state.id} </h2>
		);
	}
}

export default Item;
