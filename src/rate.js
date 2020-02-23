import React, { Component } from 'react';

class Rate extends Component {
    state = {
        arra: []
    }
    addrate = () => {
        for (let i = 0; i < 4; i++) {

            this.setState({ tab: this.state.arra.push(<i onClick={this.props.setRate(this.props.rating + 1)} class="fal fa-star"></i>) })


        }
    }



    render() {
        let arr = []
        for (let i = 0; i < 7; i++) {
            if (i < this.props.movieRating) arr.push(<i onClick={() => this.props.setRate(i + 1)} class="fal fa-star">★</i>)
            else arr.push(<i onClick={() => this.props.setRate(i + 1)} class="fal fa-star">☆</i>)
        }
        return (
            <div>
                {arr}
                {/* {this.state.arr}   */}
            </div>
        );
    }
}

export default Rate;