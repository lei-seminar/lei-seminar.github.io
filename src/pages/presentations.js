import React from 'react';
import container from '../App.css'
import '../css/foresty.css'
import {table} from '../css/common.css'
import {TABLE_HEADERS, ENTRIES, DATE, SLIDES, PAPERS, TITLE, SPEAKER, AFFILIATION} from '../data/presenatationData'

import ContentCard from '../utils/card'
const Presentations = () => {
  return (
    <div>
        <div className={container} style={{padding: "2em"}}>

        </div>
        <div className="card-body">
        <table>
            <tr>
                {TABLE_HEADERS.map(header => {
                    return (
                      <th> {header} </th>
                    );
                })}
            </tr>
            {ENTRIES.map(entry => {
                console.log(Object.keys(entry));
                return (
                    <tr>
                        {Object.keys(entry).map(field => {
                            console.log(typeof (field))

                            if ([DATE, SPEAKER, TITLE, AFFILIATION].includes(field)) {
                                return (
                                    <td>{entry[field]}</td>
                                )
                            }
                            else if (field == PAPERS) {
                                return (
                                    <td>
                                        <ol>
                                            {entry[field].map(paper => {
                                                return (
                                                    <li>
                                                        <a href={paper[1]}>{paper[0]}</a>
                                                    </li>
                                                );
                                            })}
                                        </ol>
                                    </td>
                                );
                            }
                            else if (field == SLIDES) {
                                return (
                                    <td>
                                        <a href={entry[field]}>Slides</a>
                                    </td>
                                );
                            }
                        })}
                    </tr>
                );
            })}
        </table>
        </div>
    </div>
  );
};

export default Presentations;