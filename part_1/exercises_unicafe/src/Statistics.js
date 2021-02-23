import React from 'react';
import ReactDOM from 'react-dom';

const Statistics = props => {
  const { good, neutral, bad, sum } = props;
  if(sum>0){
    return(
     <div>
       <h2>Statistics</h2>
       <table>
         <tr>
           <td>good</td>
           <td>{good}</td>
         </tr>
         <tr>
           <td>neutral</td>
           <td>{neutral}</td>
         </tr>
         <tr>
           <td>bad</td>
           <td>{bad}</td>
         </tr>
         <tr>
           <td>all</td>
           <td>{sum}</td>
         </tr>
         <tr>
           <td>average</td>
           <td>{(good*1 + bad*(-1))/sum}</td>
         </tr>
         <tr>
           <td>positive</td>
           <td>{100/sum*good + ' %'}</td>
         </tr>
       </table>
     </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>No Feedback given</p>
    </div>
  )

}

export default Statistics;
