<script>
  import { board, piecePlacedSFX } from "./store.js";

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  function color(numberIndex, letterIndex) {
    if (letterIndex % 2) {
      if (numberIndex % 2) {
        return "light";
      } else {
        return "dark";
      }
    } else {
      if (numberIndex % 2) {
        return "dark";
      } else {
        return "light";
      }
    }
  }

  let boardSizeUnit = "vw";

  function boardSize() {
    if (window.innerWidth < window.innerHeight) {
      boardSizeUnit = "vw";
    } else {
      boardSizeUnit = "vh";
    }
  }

  boardSize();
  window.addEventListener("resize", boardSize);

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    let dragged = document.getElementById(data);
    if (e.target.id !== dragged.id) {
      e.target.appendChild(dragged);
      piecePlacedSFX.play();
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
    background-color: #312e2b;
  }

  .board {
    user-select: none;
    width: 70vw;
    height: 70vw;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
    overflow: hidden;
  }

  .square {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
  }

  .piece {
    height: 80%;
    cursor: grab;
  }

  .piece:active {
    cursor: grabbing;
    display: inline;
  }

  .coordinate {
    display: block;
    position: absolute;
    user-select: none;
  }

  .coordinate-number {
    top: 5px;
    left: 5px;
  }

  .coordinate-letter {
    bottom: 5px;
    right: 10px;
  }

  .light {
    background-color: rgb(255, 251, 242);
  }

  .light .coordinate {
    color: black;
  }

  .dark {
    background-color: rgb(66, 63, 63);
  }

  .dark .coordinate {
    color: white;
  }
</style>

<main>
  <div
    class="board"
    style="width: 70{boardSizeUnit}; height: 70{boardSizeUnit}">
    {#each $board as row, rowIndex}
      {#each row as column, columnIndex}
        <div
          id="{rowIndex}{columnIndex}"
          class="square {color(rowIndex, columnIndex)}"
          on:drop={drop}
          on:dragover={allowDrop}>
          {#if $board[rowIndex][columnIndex] !== undefined}
            <img
              id={$board[rowIndex][columnIndex].piece}
              src={$board[rowIndex][columnIndex].image}
              alt="piece"
              class="piece"
              draggable="true"
              on:dragstart={drag} />
          {/if}
          {#if columnIndex === 0}
            <div class="coordinate coordinate-number">{numbers[rowIndex]}</div>
          {/if}
          {#if rowIndex === 7}
            <div class="coordinate coordinate-letter">
              {letters[columnIndex]}
            </div>
          {/if}
        </div>
      {/each}
    {/each}
  </div>
</main>
