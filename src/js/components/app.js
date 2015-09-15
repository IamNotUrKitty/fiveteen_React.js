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
		console.log(_.xor([1,2,3],[3,2,1]));
		if(!_.xor(this.state.positions,_.range(1,17))){
			 console.log('U Win!!!');
		}
	},
	componentWillMount(){
		this.setState({emptyCell:this.state.positions.indexOf(16)});
	},
	componentWillUpdate(){
		window.alert('Now Update!!');
		//try to do some animations
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

