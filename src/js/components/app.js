/**@jsx React.DOM*/

var React = require('react');
var Cell = require('./cell');
var _ = require('lodash');

var APP = React.createClass({
	getInitialState() {
		return{
			emptyCell:0,
			positions:_.shuffle(_.range(1,17))
		}
	},
	updatePosition(index){
		var pos = this.state.positions;
		pos[this.state.emptyCell] = pos[index];
		pos[index] = 16;
		this.setState({
			emptyCell:index,
			positions:pos
		});
		var win = _.every(this.state.positions,function(value,index,array){
			return index === 0 || parseInt(array[index - 1]) <= parseInt(value)
		});
		if(win){
			 console.log('U Win!!!');
		}
	},
	componentWillMount(){
		this.setState({emptyCell:this.state.positions.indexOf(16)});
	},
	render() {
		var that = this;
		return (<div className="game">
					{this.state.positions.map(function(i,key){
						if(i != 16) {
							return <Cell update={that.updatePosition} empty={that.state.emptyCell} index={key}  key={key} val={i}/>
						}else{
							return <Cell val={i} key={key} />
						}
					})}
				</div>)
	}
});
module.exports = APP;

