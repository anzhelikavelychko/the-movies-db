import React, { Component } from 'react';
import '../components/Loader.css';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render () {
            return (
                this.props.items.lenght === 0 ? <div className="loading"></div> : <WrappedComponent  {...this.props}/>
            );
        }
    };
};

export default LoaderHOC;