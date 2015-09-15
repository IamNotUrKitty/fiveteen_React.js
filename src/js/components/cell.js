/**@jsx React.DOM*/
var React = require('react');

var Cell = React.createClass({
	handleClick(){
		var dif = Math.abs(this.props.index - this.props.empty);
		if(dif == 1 || dif == 4 ){
			this.props.update(this.props.index);
		}
	},
	render(){
		var className =  this.props.val == 16?'empty cell':"cell";
		return <div onClick={this.handleClick} className={className}>
			{this.props.val}
		</div>
	}
});
module.exports = Cell;
