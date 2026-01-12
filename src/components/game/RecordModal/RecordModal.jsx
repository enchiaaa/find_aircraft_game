import React, { useState } from 'react'
import "./RecordModal.scss"
import Modal from '../../ui/Modal/Modal'
import { addGrade } from '../../../firebase'

const RecordModal = (props) => {
    const [grade, setGrade] = useState({
        name:"",
        grade: null
    });

    const handleChange = (e) => {
        setGrade((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            "grade": props.clickCount
        }));
    };

    const checkClick = async e  =>{
        e.preventDefault();
        try {
            await addGrade(grade);
            props.setIsAlreadyRecorded(true);
            props.recordClicked();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Modal onClose={props.onClose} show={true}>
            <div className='recordBoard'>
            <div className="container">
                <span className="modal-title">紀錄成績</span>
                <div className="info">
                    <div className="nameInput">
                        <span>登記名稱</span>
                        <input name="name" onChange={handleChange} type='text' placeholder='點擊輸入名稱'></input>
                    </div>
                    <span>點擊次數 {props.clickCount} 次</span>
                </div>
                <div className="buttons">
                    <input type="submit" id="submit" onClick={checkClick} value="確認"></input>
                    <button id="cancel" onClick={props.recordClicked}>取消</button>
                </div>
                </div>
            </div>
        </Modal>
    )
}

export default RecordModal
