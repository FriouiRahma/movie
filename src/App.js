import List from './listfilm';
import Recherche from './recherche';
import './App.css';
import AddModal from './modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './exemple';
import Rate from './rate';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // class:false,
      inform: [
        { class:false,
          rate:2,
          src: "https://www.youtube.com/embed/watch?v=sZeWPWN644Q",
          title: "Les quatre cents coups",
          year: "1959",
          image: "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,753,1000_AL_.jpg"
        },
        {class:false,
          rate:5,
          src: "https://www.youtube.com/embed/watch?v=sZeWPWN644Q",
          title: "La haine",
          year: "1995",
          image: "https://m.media-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX700_CR0,0,700,999_AL_.jpg"
        },
        { class:false,
          rate:4,
          src: "https://www.youtube.com/embed/watch?v=sZeWPWN644Q",
          title: "Un prince à New York",
          year: "1988",
          image: "https://m.media-amazon.com/images/M/MV5BYzMzMDZkYWEtODIzNS00YjI3LTkxNTktOWEyZGM3ZWI2MWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
        }

      ],
      rate : 1,
      keyword:""


    }

  }
  handelFilt = (x) => {
    this.setState({keyword:x.resear }
    )
    
    // this.setState({ inform: this.state.inform.map(el => el.title === x && {...el}) })
  }

  addmodel = (movie) => {
    this.setState({ inform: this.state.inform.concat(movie) })

  }
  addByoneRate=(r)=>{
    this.setState({
      rate : r
    })
  }

  render() {
    return (
      <div>
        {/* el => el.rate>=this.state.rate */}
        <Recherche serch={(x) => { this.handelFilt(x) }} />
        {/* {this.state.class && <Example/>} */}
        <Rate  movieRating={this.state.rate}  setRate={(Rate)=>{this.addByoneRate(Rate)} }/>
        <AddModal addmovie={(movie) => {this.addmodel(movie) }} />
        <List liste={this.state.inform.filter( el=>  el.rate>=this.state.rate   &&   el.title.toUpperCase().includes(this.state.keyword.toUpperCase().trim())) } />

          
      </div>
    );
  }
}

export default App;









