import React, {Component} from 'react'
import Cell from './cell'
import {shuffle, range, every,} from 'lodash'
import { autobind } from 'core-decorators'

export default class APP extends Component{
	constructor(props){
		super(props);
		this.state = {
			emptyCell:0,
			positions: shuffle(range(1,17))
		}
	}
	@autobind
	updatePosition(index){
		let pos = this.state.positions;
		pos[this.state.emptyCell] = pos[index];
		pos[index] = 16;
		this.setState({
			emptyCell:index,
			positions:pos
		});
		let win = every(this.state.positions,(value,index,array)=>{
			return index === 0 || parseInt(array[index - 1]) <= parseInt(value)
		});
		if(win){
			 window.alert('U Win!!!');
		}
	}
	componentWillMount(){
		this.setState({emptyCell:this.state.positions.indexOf(16)});
	}
	render() {
		return (<div className="game">
					{this.state.positions.map((i, key)=>{
						return <Cell update={this.updatePosition} empty={this.state.emptyCell} index={key}  key={key} val={i}/>
					})}
				</div>)
	}
}

