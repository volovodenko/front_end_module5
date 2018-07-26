import React, {Fragment} from 'react';

const ButtonsRight = (props) => {

    const buttonPlusTags = () => {
        props.setTagsRows(1);
    };

    const buttonExpandAllTags = () => {
        props.onChangeTagRows(props.maxTagRows);
    };

    if (props.numberTagRows < props.maxTagRows) {
        return (
            <Fragment>
                <button onClick={buttonPlusTags}>more tags +</button>
                <button onClick={buttonExpandAllTags}>expand all tags ({props.numTagsLeft})</button>
            </Fragment>
        )
    }

    return null;

};

export default ButtonsRight;