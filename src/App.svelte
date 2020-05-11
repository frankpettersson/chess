<script>
  import { pieces } from "./store.js";

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const { w, b } = $pieces;
  /*
  let piecePositions = [
    [b.r1, b.n1, b.b1, b.q, b.k, b.b2, b.n2, b.r2],
    [b.p1, b.p2, b.p3, b.p4, b.p5, b.p6, b.p7, b.p8],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [w.p1, w.p2, w.p3, w.p4, w.p5, w.p6, w.p7, w.p8],
    [w.r1, w.n1, w.b1, w.q, w.k, w.b2, w.n2, w.r2]
  ];
*/
  function color(numberIndex, letterIndex) {
    if (letterIndex % 2) {
      if (numberIndex % 2) {
        return "white";
      } else {
        return "black";
      }
    } else {
      if (numberIndex % 2) {
        return "black";
      } else {
        return "white";
      }
    }
  }
</script>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .board {
    width: 80vw;
    height: 80vw;
    border: 1vw solid black;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
    overflow: hidden;
  }

  .square {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .piece {
    height: 80%;
    cursor: grab;
  }

  .piece:active {
    cursor: grabbing;
    display: inline;
  }

  .white {
    background-color: rgb(255, 251, 242);
  }

  .black {
    background-color: rgb(66, 63, 63);
  }
</style>

<main>
  <div class="board">
    {#each numbers.reverse() as number, i}
      {#each letters as letter, j}
        <div class="square {color(i, j)} {letter + number}" />
      {/each}
    {/each}
  </div>
</main>

<!--
          {#if piecePositions[i][j] !== null}
            <img src={piecePositions[i][j].image} alt="piece" class="piece" />
          {/if}
-->
