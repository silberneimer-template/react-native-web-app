import React, {Component} from "react";
import {
    listenOrientationChange,
    removeOrientationListener,
} from "react-native-responsive-screen";

export class Home extends Component<{}> {

    async componentDidMount() {
        listenOrientationChange(this);
    }

    componentWillUnmount() {
        removeOrientationListener();
    }

    render() {
        // const isPhone = widthPercentageToDP(100) < 960;
        return (
            <></>
        )
    }
}
