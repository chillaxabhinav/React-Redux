import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/action';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onIncrementValue}  />
                <CounterControl label="Subtract 15" clicked={this.props.onDecrementValue}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults : state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => {
            dispatch({type : actionType.INCREMENT})
        },
        onDecrementCounter : ()=>{
            dispatch({type: actionType.DECREMENT})
        },
        onIncrementValue : () => {
            dispatch({type : actionType.ADD, value : 10})
        },
        onDecrementValue : () =>{
            dispatch({type : actionType.SUBTRACT, value : 15})
        },
        onStoreResult : () =>{
            dispatch({type : actionType.STORE_RESULT})
        },
        onDeleteResult: (id) => {
            dispatch({ type: actionType.DELETE_RESULT , resultElementId : id })
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);