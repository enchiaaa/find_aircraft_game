import React, { useEffect, useState } from 'react'
import "./RuleBoard.scss"
import sample_aircraft from "./sample_aircraft.png"
import axios from "axios"
import { getAllGrades } from '../../../firebase'

const RuleBoard = () => {
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setIsLoading(true);
        const res = await getAllGrades();
        setRanking(res);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRanking();
  }, []);

  return (
    <div className='ruleBoard'>
      <div className="container">
        <span>飛機形狀</span>
        <img src={sample_aircraft}/>
      </div>
      <div className="container">
        <span>排行榜</span>
        <div className="ranking_list">
          {isLoading?
            <div>載入中...</div>
            :ranking.length === 0? 
              <div>暫無成績</div>:
            (
              ranking.map((item, i) => (
                <div className="item" key={i}>
                  <span>{item.name}</span>
                  <span>{item.grade} 次</span>
                </div>
              ))
            )}
        </div>
      </div>
      
      <div className="container">
        <span>遊戲規則</span>
        <ul>
            <li>網格大小：10 × 10</li>
            <li>共有三架飛機，方向隨機</li>
            <li>點擊格子尋找飛機機頭</li>
        </ul>
      </div>
      <div className="container">
        <span>格子說明</span>
        <ul>
            <li>紅色格子：機頭</li>
            <li>藍色格子：機身</li>
            <li>灰色格子：空白</li>
        </ul>
      </div>
      <div className="container">
        <span>勝利條件</span>
        <ul>
            <li>找到三個機頭即獲勝</li>
        </ul>
      </div>
    </div>
  )
}

export default RuleBoard
