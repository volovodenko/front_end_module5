/*************************************************************************
 * TAKE UP
 *************************************************************************/
const changeTakeUp = () => ({
    type: 'CHANGE_TAKE_UP',
});

export const onChangeTakeUp = () => dispatch => {
    dispatch(changeTakeUp());
};


/*************************************************************************
 * TAKE UP VISIBLE
 *************************************************************************/
const changeTakeUpVisible = (data) => ({
    type: 'CHANGE_TAKE_UP_VISIBLE',
    payload: data
});

export const onChangeTakeUpVisible = (data) => dispatch => {
    dispatch(changeTakeUpVisible(data));
};

