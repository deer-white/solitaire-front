import React, { Component } from "react";
import "./Board.css";

interface BoardProps {
  row: number;
  col: number;
  // layer: number;
}

interface BoardState {
  // row: number;
  // col: number;
  // card: number;
}
let game = [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]];
let coords = [
  [[1, 1, 1], [2, 2, 2], [3, 3, 3]], // layer0
  [[1, 1, 1], [2, 2, 2], [3, 3, 3]], // layer1
  [[1, 1, 1], [2, 2, 2], [3, 3, 3]] // layer2
];
class Board extends Component<BoardProps, BoardState> {
  render() {
    return (
      <>
        <div className="board">
          <div className="board-row row1">
            <div className="grid first" />
            <div className="grid" />
            <div className="grid" />
            <div className="grid right-end" />
          </div>
          <div className="board-row row2">
            <div className="grid" />
            <div className="grid" />
            <div className="grid" />
            <div className="grid right-end" />
          </div>
          <div className="board-row row3">
            <div className="grid" />
            <div className="grid" />
            <div className="grid" />
            <div className="grid right-end" />
          </div>
          <div className="board-row row4">
            <div className="grid bottom-end" />
            <div className="grid bottom-end" />
            <div className="grid bottom-end" />
            <div className="grid right-end bottom-end" />
          </div>
        </div>
      </>
    );
  }
}

export default Board;
