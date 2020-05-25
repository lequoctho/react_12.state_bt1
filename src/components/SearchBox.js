import React, {Component} from 'react';
import classNames from 'classnames';
import './SearchBox.css'

class SearchBox extends Component {
    constructor() {
      super();
      this.state = {
        isFocused: false
      }
    }
  
    getFocus(){
      
    }
  
  
    render() {
        const {isFocused} = this.state;
        return <div className='SearchBox'>
                <input type="text" id="input-text"/>
                <img onFocus="getFocus()" className={classNames({'hide': isFocused === true})} src="https://cdn.glitch.com/3916b47e-07d9-47aa-b61c-db84c74ee7bb%2FEllipse%203.png?v=1590421667794"/>
                <img className={classNames({'hide': isFocused === true})} src="https://cdn.glitch.com/3916b47e-07d9-47aa-b61c-db84c74ee7bb%2Fsearch%201.png?v=1590422058964"/>    
            </div>;
    }
}

export default SearchBox;