import React from 'react';

class MyComp extends React.Component {
    mycomp= () => {
        return 'What Ever'
    }
	render() {
			return (
				<div>
                    <h1>{this.mycomp()}</h1>
                    <button onClick={this.props.a}>Push</button>
				</div>
			)
		}
}

export default MyComp;