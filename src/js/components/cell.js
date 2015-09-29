import React, {Component} from 'react'
import { autobind } from 'core-decorators'

export default class Cell extends Component{
	constructor(props){
		super(props)
	}
	@autobind
	handleClick(){
		const dif = this.props.index - this.props.empty;
		const absDif = Math.abs(dif);
		let translate = "";
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
			const el = React.findDOMNode(this.refs.cell);
			let _update = this.props.update.bind(null, this.props.index);
			let _func = function(){
				_update();
				el.removeEventListener('transitionend', _func, false);
			};
			el.addEventListener('transitionend', _func);
			el.className += " " + translate;
		}
	}
	render(){
		let className =  (this.props.val == 16) ?'empty cell':"cell";
		return <div ref="cell"  onClick={this.handleClick} className={className} >
			{this.props.val}
		</div>
	}
}

