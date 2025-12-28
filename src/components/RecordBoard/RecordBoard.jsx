import React, { useState } from 'react'
import "./RecordBoard.scss"
import axios from "axios"
import { addGrade } from '../../firebase';

const RecordBoard = (props) => {
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
    <div className='recordBoard'>
        <div className="container">
            <div className="title">
                <span>紀錄成績</span>
            </div>
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
  )
}

export default RecordBoard
