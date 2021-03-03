import React, {Component} from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    // console.log("MapstateToprops",state)

    return { 
        dishes:state.dishes
    }
}
 
class Home extends Component {

    componentDidMount(){
        // console.log("Home Props",this.props.dispatch({ type: 'Test' }));
        this.props.dispatch({ type: 'Test',str: "Bahubrihi" })
    }

    componentDidUpdate(){
        console.log("Home Props update",this.props);
    }

    render(){

        return (
            <div>
               <p>Home page</p>
            </div>
        );
    }

}

export default connect(mapStateToProps) (Home);