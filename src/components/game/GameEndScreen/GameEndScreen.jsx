import React from 'react'
import "./GameEndScreen.scss"
import { GoPencil } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import VisibilityIcon from '@mui/icons-material/Visibility';

const GameEndScreen = (props) => {
  return (
    <div className='gameEndModal backdrop'>
        <div className="content">
            <span>成功找到所有機頭！</span>
            <div className="buttons">
                {
                    props.isAlreadyRecorded? 
                    <button id="alreadyRecord"><GoPencil />紀錄成績</button>
                    :<button onClick={props.setIsRecordModalOpen} id="record"><GoPencil />紀錄成績</button>
                }
                
                <button onClick={props.restartClicked} id="restart"><VscDebugRestart />重來一局</button>
            </div>
        </div>
    </div>
  )
}

export default GameEndScreen
