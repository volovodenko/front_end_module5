import React, {Fragment} from 'react';

import ButtonsLeft from './ButtonsLeft';
import ButtonsRight from './ButtonsRight';

const Buttons = (props) => {

    const setTagsRows = (i) => {
        let nextNumberTagRows = props.numberTagRows + i;

        if (!(nextNumberTagRows > props.maxTagRows || nextNumberTagRows === 0)) {
            props.onChangeTagRows(nextNumberTagRows);
        }
    };

    return (
        <Fragment>
            <ButtonsLeft {...props} setTagsRows={setTagsRows}/>
            <ButtonsRight {...props} setTagsRows={setTagsRows}/>
        </Fragment>
    )
};

export default Buttons;