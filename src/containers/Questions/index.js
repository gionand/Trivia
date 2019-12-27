import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RenderOptions} from '../../components/options';

class Questions extends Component {
    state = {
        choices: []
    }

    onClickHandler = (answer) => {
        let newState = {...this.state};
        newState.choices = newState.choices.concat([answer]);

        let counter = this.props.match.params.qID;
        counter++;
        const location = {
            pathname: `/questions/${counter}`,
            state: { fromDashboard: true }
        };

        this.setState(newState);
        this.props.history.replace(location);
    }

    render() {
        if (this.props.match.params.qID < 6) {
            return(
                <>
                    <h2>Question /{this.props.match.params.qID}:</h2>
                    <p dangerouslySetInnerHTML={ {__html: this.props.data[this.props.match.params.qID-1].question} }/>
                    <h3>Options:</h3>
                    <ul>
                        <RenderOptions onClickHandler={this.onClickHandler} data={this.props.data} id={this.props.match.params.qID-1}/>
                    </ul>
                </>
            )
        }
        else {
            return (
                <>
                    <h1>Results</h1>
                    <ol>
                        {this.state.choices.map((choice, index)=>{
                            return <li className={choice.correct} key={index}>{choice.answer}/ Correct: /{choice.correct}</li>
                        })}
                    </ol>
                    <h2>Solutions:</h2>
                    <ol>
                        {this.props.data.map((item, index)=>{
                            return <li key={index}>{item.question}/ Correct Answer: /{item.correct_answer}</li>
                        })}
                    </ol>
                </>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.triviaQuestionsReducer.data
    }
}

export default connect(mapStateToProps)(Questions);