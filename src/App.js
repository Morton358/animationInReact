import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
    state = {
        modalIsOpen: false,
        redBlock: false
    };
    handleOpenModal = () => {
        this.setState({ modalIsOpen: true });
    };
    handleCloseModal = () => {
        this.setState({ modalIsOpen: false });
    };
    handleOpenRedBlock = () => {
        this.setState(prevState => ({ redBlock: !prevState.redBlock }));
    };
    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <button className="Button" onClick={this.handleOpenRedBlock}>
                    Toggle
                </button>
                <br />
                <Transition
                    in={this.state.redBlock}
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => (
                        <div
                            style={{
                                backgroundColor: 'red',
                                margin: 'auto',
                                height: 80,
                                width: 80,
                                transition: 'opacity 1s ease-out',
                                opacity: state === 'exiting' ? 0 : 1
                            }}
                        >
                            <p>{state}</p>
                        </div>
                    )}
                </Transition>
                <Modal
                    show={this.state.modalIsOpen}
                    closed={this.handleCloseModal}
                />
                {this.state.modalIsOpen ? <Backdrop show /> : null}
                <br />
                <button className="Button" onClick={this.handleOpenModal}>
                    Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
