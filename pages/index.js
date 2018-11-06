import React from 'react';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import { Modal, List, Button, WingBlank, InputItem } from 'antd-mobile';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export default class ModalTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false,
      value: '',
    };
  }
  showModal = (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      showmodal: true,
    });
  }
  onClose = () => {
    this.setState({
      showmodal: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }
  handleChange = (val) => {
    this.setState({
      value: val
    })
  }

  render() {
    const { value } = this.state;
    console.log('value', value);
    return (
      <WingBlank>
        <Button onClick={this.showModal}>popup</Button>
        <Modal
          popup
          visible={this.state.showmodal}
          onClose={this.onClose}
          animationType="slide-up"
        >
          <List renderHeader={() => <div>test</div>} className="popup-list">
            <InputItem
              type="phone"
              value={ value }
              onChange={this.handleChange}
              style={{backgroundColor: '#999'}}
            >
            </InputItem>
          </List>
        </Modal>
      </WingBlank>
    );
  }
}

