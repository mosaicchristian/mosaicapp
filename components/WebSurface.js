import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';
import { connect } from 'react-redux';
import { startLoad, finishLoad } from '../actions/screen.js';

class WebSurface extends React.Component {
    constructor() {
        super();
        this.onLoadStart = this.onLoadStart.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    onLoadStart() {
        const { dispatch } = this.props;
        dispatch(startLoad(this.props.name));
    }

    onLoad() {
        const { dispatch } = this.props;
        dispatch(finishLoad(this.props.name));
    }

    render() {
        return (
          <WebView
            source={{uri:this.props.url}}
            onLoadStart={this.onLoadStart}
            onLoad={this.onLoad}
          />
        );
    }
}

WebSurface.propTypes = {
    url: PropTypes.string.isRequired,
};

export default connect()(WebSurface);
