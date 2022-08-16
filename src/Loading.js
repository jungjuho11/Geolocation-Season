import React from "react";

const Loading = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    )
};

//if there is nothing in props, then it'll just say 'Loading' instead of being empty
Loading.defaultProps = {
    message: 'Loading...'
}

export default Loading;