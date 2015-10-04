import React, {Component} from 'react'
import {shuffle, range, every,} from 'lodash'
import {Motion, spring} from 'react-motion'

const layout = range(0, 16).map(n => {
    const row = Math.floor(n / 4);
    const col = n % 4;
    return [80 * col, 80 * row];
});
export default class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: shuffle(range(0, 16))
        }
    }
    updatePosition(index) {
        let arr = this.state.positions;
        let emptyIndex = arr.indexOf(0);
        let targetIndex = arr.indexOf(index);
        const dif = Math.abs(targetIndex - emptyIndex);
        if(dif == 1 || dif == 4 ){
            arr[emptyIndex] = index;
            arr[targetIndex] = 0;
            this.setState({
                positions: arr
            });
            let win = every(arr, (value, index, array)=> {
                value = value||16;
                return index === 0 || parseInt(array[index - 1]) <= parseInt(value)
            });
            if (win) {
                window.alert('U Win!!!');
            }
        }
    }
    render() {
        return (<div className="game">
							{this.state.positions.map((i, key)=> {
                                let cellClass = (key == 0) ? 'empty cell' : "cell";
                                let x;
                                let y;
                                [x,y] = layout[this.state.positions.indexOf(key)];
                                let style = {
                                    tX: spring(x),
                                    tY: spring(y)
                                };
                                return <Motion style={style} key={key}>
                                   	{({ tX, tY }) =>
                                        <div className={cellClass}
                                            onClick={this.updatePosition.bind(this, key)}
                                            style={{
                                                transform: `translate3d(${tX}px,${tY}px,0) scale(1.1)`
                                            }}>{key}</div>
                                        }
                                </Motion>
                            })}
        </div>)
    }
}

