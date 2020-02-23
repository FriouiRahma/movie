
import React, { Component } from 'react';



class Recherche extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resear: ""

        }


    }
    handelChange = (e) => {

        this.setState({ resear: e.target.value })
        this.props.serch({ resear: e.target.value })
        

    }
    handelSearch = () => {

        this.props.serch({resear: this.state.resear })
        
        console.log(this.state.resear);
    }


    render() {
        return (
            <div>
                <input type="text" name="research" placeholder="Type movie name to search" onChange={this.handelChange} />
                <button onClick={this.handelSearch} > Search  </button>
            </div>
        );
    }
}

export default Recherche;


