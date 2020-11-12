import React from 'react';
import Shop from './Shop';

class Home extends React.Component {
    state = {
        counter: 0,
        email: 'jaisaichand4',
        mobile: 9100341041
    }
    incrementCnt = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    setNewDetails = (dat) => {
        console.log(dat);
        this.setState({ email: dat.email, mobile: dat.mobile })
    }
    render() {
        return (
            <div className="App">
                <p>{this.state.counter}</p>
                <button onClick={this.incrementCnt}>Add</button>
                <div>
                    <p>{this.state.email}</p>
                    <p>{this.state.mobile}</p>
                </div>
                <Shop email={this.state.email} mobile={this.state.mobile} getupdateddata={this.setNewDetails} />
            </div>
        );
    }
}

export default Home;
