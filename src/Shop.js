import React from 'react';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: this.props.email,
        mobile: this.props.mobile
    }
    redd = (eve) => {
        console.log(this.refs.emaill.value);
        console.log(this.refs.mobilee.value);
        let vvv = this.refs.mobilee.value;
        console.log(typeof (parseInt(vvv)));
        this.props.getupdateddata({
            email: this.refs.emaill.value,
            mobile: parseInt(vvv)
        })

    }
    render() {
        return (
            <div className="App">
                <div>
                    <label htmlFor="email">Email</label>
                    <input ref="emaill" type="text" id="email" defaultValue={this.state.email} />
                </div>

                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input ref="mobilee" type="number" id="mobile" defaultValue={this.state.mobile} />
                </div>

                <button onClick={this.redd}>Submit</button>
            </div>
        );
    }
}

export default Shop;
