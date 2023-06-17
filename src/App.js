// import React from 'react';

// class Square extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       value:null,
//     };
//   }


//   render() {
//     return (
//       <button className="square" 
//       onClick={()=> this.setState({value:"0"})}>
//         {this.state.value}
//       </button>
//     )
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = "Next player: 0";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>

//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>

//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className='game'>
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className='game-info'>
//           <div></div>
//           <ol></ol>
//         </div>
//       </div>
//     )
//   }
// }

// export default Game;

import React  from "react";
import { useState } from 'react';

// const App = () => {

//   const [state,setState] = useState(2);
//   const [index,setIndex] = useState(1);
  



//   return (
//     <div>
//       <div class="red"></div>
//       <div class="blue"></div>
//     </div>
//   );
// };
const App = ()=> {
  const [ cubes, setCubes ] = React.useState(2);
  const [ index, setIndex ] = React.useState(1);

  return (
    <div className="cubes">
      {[...Array(cubes).keys()].map((_, i) => 
      	<p
          key={i}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: index === i ? 'blue' : 'red' }}
        ></p>
        )}
    </div>
  );
}
export default App;