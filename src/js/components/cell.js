/**@jsx React.DOM*/
var React = require('react');

var Cell = React.createClass({
	handleClick(){
		var dif = this.props.index - this.props.empty
		var absDif = Math.abs(dif);
		var translate = "";
		if(absDif == 1 || absDif == 4 ){
			switch(dif){
				case 1:
					translate = "move-left";
					break;
				case -1:
					translate= "move-right";
					break;
				case -4:
					translate = "move-bottom";
					break;
				case 4:
					translate = "move-top";
					break
			}
			React.findDOMNode(this.refs.cell).addEventListener('transitionend',this.props.update.bind(null,this.props.index));
			React.findDOMNode(this.refs.cell).className += " " + translate;
		}
	},
	render(){
		var className =  this.props.val == 16?'empty cell':"cell";
		return <div ref="cell"  onClick={this.handleClick} className={className} >
			{this.props.val}
		</div>
	}
});
module.exports = Cell;
