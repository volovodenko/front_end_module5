import React, {Fragment} from 'react';

const ButtonsLeft = (props) => {

    const buttonMinusTags = () => {
        props.setTagsRows(-1);
    };

    const buttonCloseAllTags = () => {
        window.scrollTo(0, 0); //обнулить прокрутку
        props.onChangeTagRows(1);
    };

    if (props.numberTagRows > 2) {
        return (
            <Fragment>
                <button onClick={buttonCloseAllTags}>close all tags ×</button>
                <button onClick={buttonMinusTags}>less tags -</button>
            </Fragment>
        )
    }

    if (props.numberTagRows > 1) {
        return <button onClick={buttonMinusTags}>less tags -</button>
    }

    return null;

};

export default ButtonsLeft;