import React from "react";
import reactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

/* this is a class based component */
class App extends React.Component {
  /* react.compoenent is a class that has a bunch of built in functions like getting geolocation. subclassing react.component */

  //when this class (class app extends React.Component)is craated, constructor will be the first thing that will run
  /* constructor(props) {
    //this function is not React specific, but javascript
    //super is the reference to parent's constructor's function. THIS HAS TO BE DONE EVERY TIME WHEN WE MAKE CONSTRUCTOR
    super(props);
    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state like this, this.state.lat = position.coords.latitude
    this.state = { lat: null, errorMessage: '' };
    //to initialize state, you HAVE to do this:        this.state = ();
  }//end of constructor */  

  state = {lat:null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          //we called setstate!!! this also makes the React component instantly rerender the compoent.
          this.setState({ lat: position.coords.latitude });
        },
        (err) => {
          this.setState({ errorMessage: err.message });
        }
      );
  }

  componentDidUpdate(){
      console.log('My component was just updated - it rerendered!');
  }

  //helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) { //if no lat, and error message
        return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) { //if successfully get the lat
        //when you use setState, the component updates. So this means that the SeasonDisplay will also get updated when we update the lat
        return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
      
        /* return <div>Latitude: {this.state.lat}</div>; */
    }
    else {
        return <Loading message="Allow location request"></Loading>;
    }
  }

  render() {

    console.log(this.state.lat);
    console.log(this.state.errorMessage);
      
    return (
        <div className="example">
            {this.renderContent()};
        </div>
    )

    
  }
}

reactDom.render(<App />, document.querySelector("#root"));
