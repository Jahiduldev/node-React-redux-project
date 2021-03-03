import React, {Component} from "react";

class About extends Component {

    componentDidMount(){
        console.log('ComponentDidMount')
    }

    componentWillMount(){
        console.log('ComponentWillMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    // shouldComponentUpdate(){

    //     return true;
    //     console.log('shouldComponentUpdate')
    // }

    render(){

        return (
            <div>
               <p>About page</p>
            </div>
        );
    }

}

export default About;