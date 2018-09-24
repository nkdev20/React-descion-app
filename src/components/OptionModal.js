import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    
    <Modal
        isOpen = {!!props.selectedOptions}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Seleceted Option" 
    >
        <h3>Selected Option</h3>
        {props.selectedOptions && <p>{props.selectedOptions}</p>}
        <button onClick = {props.handleClearSelectedOption}>okay</button>
    </Modal>
);

export default OptionModal;
