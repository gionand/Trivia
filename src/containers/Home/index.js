import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveDataAction} from '../../store/actions/triviaActions';
import {Link} from 'react-router-dom';

class Home extends Component {

    async componentDidMount() {
        const respose = await fetch('https://opentdb.com/api.php?amount=5');
        const data = await respose.json();
        this.props.dispatch(saveDataAction(data.results));
    }

    render(){
        return (
            <>
                <h1>Trivia</h1>
                <h2>Ready for some impossible Trivia?</h2>
                <button><Link to='/questions/1'>Start!</Link></button>
            </>
        )
    }
}

export default connect()(Home)