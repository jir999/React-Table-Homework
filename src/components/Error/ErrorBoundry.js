import React from "react";

export default class ErrorBoundry extends React.Component {
    state = {
        error: false,
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    componentDidCatch(error, info) {
        console.log("catched error", error, info);
    }


    render() {
        const { error } = this.state;
        const { fallback, children } = this.props;
        return error ? fallback : children;
    }
}