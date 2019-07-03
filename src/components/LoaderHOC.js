import React, { Component } from 'react';
import './Loader.css';

const LoaderHOC = (propName) => (WrappedComponent) => {
    return class LoaderHOC extends Component {
        isEmpty(prop) {
            return (
                prop === true ||
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length ===0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)

            );
        }
        render () {
            return (
                this.isEmpty(this.props[propName]) ? <div className="loading"></div> : <WrappedComponent  {...this.props}/>
            );
        }
    };
};

export default LoaderHOC;