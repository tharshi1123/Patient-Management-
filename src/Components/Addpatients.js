import React from 'react';
import  ContainedButtons from '../Components/Core/Button.js'

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }

  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
     <form>
  <label>
    Bed No:
    <input type="text" name="bed No" />
  </label>
</form>
      <div className="modal-footer">
               <ContainedButtons button='submit'onClick={this.toggle}></ContainedButtons>
      </div>
    </div>
    );
    return (
      <div>
        <button className="btn" onClick={this.toggle}>{this.state.toggle ? 'Close modal' : 'Open modal'}</button>
        {modal}
      </div>
    );
  }
}
