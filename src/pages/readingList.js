import React from 'react';
import page from "../App.css";
import container from "../App.css";
import {table} from '../css/common.css'
import {PAPER,
    REMARK,
    SCALING_LAWS,
    CHAIN_OF_THOUGHT_PROMPTING,
    RLHF,
    EMERGING_ABILITIES,
    TRANSFORMERS,
    MIXTURE_OF_EXPERTS
} from '../data/readingListData.js'

function getSectionTable(papers){
    return(
        <table>
            <tr>
                <th>{PAPER}</th>
                <th>{REMARK}</th>
            </tr>
            {papers.map(paper => {
                return(
                    <tr>
                        <td>
                            <a href={paper[1]}> {paper[0]}</a>
                        </td>
                        <td>
                            {paper[2]}
                        </td>
                    </tr>
                );
            })}
        </table>
    );
}

const ReadingList = () => {
  return (
    <div className={container} style={{padding: "2em", justifyContent: "center"}}>
        <div className="card-body">
           <h3>
               Scaling Laws
           </h3>
            {getSectionTable(SCALING_LAWS)}
        </div>
        <div className="card-body">
            <h3>
                Chain of Thought Prompting
            </h3>
            {getSectionTable(CHAIN_OF_THOUGHT_PROMPTING)}
        </div>
        <div className="card-body">
            <h3>
                Reinforcement Learning with Human Feedback
            </h3>
            {getSectionTable(RLHF)}
        </div>
        <div className="card-body">
            <h3>
                Emerging Abilities
            </h3>
            {getSectionTable(EMERGING_ABILITIES)}
        </div>
        <div className="card-body">
            <h3>
                Transformers
            </h3>
            {getSectionTable(TRANSFORMERS)}
        </div>
        <div className="card-body">
            <h3>
                Mixture of Experts
            </h3>
            {getSectionTable(MIXTURE_OF_EXPERTS)}
        </div>
    </div>
  );
};

export default ReadingList;
