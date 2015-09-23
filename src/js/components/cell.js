/**@jsx React.DOM*/
var React = require('react');

var Cell = React.createClass({
	handleClick(){
		var dif = this.props.index - this.props.empty;
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
			var el = React.findDOMNode(this.refs.cell);
			var _update = this.props.update.bind(null, this.props.index);
			var _func = function(){
				_update();
				el.removeEventListener('transitionend', _func, false);
			};
			el.addEventListener('transitionend', _func);
			el.className += " " + translate;
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
