import { writable } from 'svelte/store';

import wB from '../public/assets/svg/Chess_blt45.svg';
import bB from '../public/assets/svg/Chess_bdt45.svg';
import wK from '../public/assets/svg/Chess_klt45.svg';
import bK from '../public/assets/svg/Chess_kdt45.svg';
import wN from '../public/assets/svg/Chess_nlt45.svg';
import bN from '../public/assets/svg/Chess_ndt45.svg';
import wP from '../public/assets/svg/Chess_plt45.svg';
import bP from '../public/assets/svg/Chess_pdt45.svg';
import wQ from '../public/assets/svg/Chess_qlt45.svg';
import bQ from '../public/assets/svg/Chess_qdt45.svg';
import wR from '../public/assets/svg/Chess_rlt45.svg';
import bR from '../public/assets/svg/Chess_rdt45.svg';

export const pieces = writable({
    w: {
        p1: {
            pos: [0][6],
            taken: false,
            image: wP,
        },
        p2: {
            pos: [1][6],
            taken: false,
            image: wP,
        },
        p3: {
            pos: [2][6],
            taken: false,
            image: wP,
        },
        p4: {
            pos: [3][6],
            taken: false,
            image: wP,
        },
        p5: {
            pos: [4][6],
            taken: false,
            image: wP,
        },
        p6: {
            pos: [5][6],
            taken: false,
            image: wP,
        },
        p7: {
            pos: [6][6],
            taken: false,
            image: wP,
        },
        p8: {
            pos: [7][6],
            taken: false,
            image: wP,
        },
        r1: {
            pos: [0][7],
            taken: false,
            image: wR,
        },
        n1: {
            pos: [1][7],
            taken: false,
            image: wN,
        },
        b1: {
            pos: [2][7],
            taken: false,
            image: wB,
        },
        q: {
            pos: [3][7],
            taken: false,
            image: wQ,
        },
        k: {
            pos: [4][7],
            taken: false,
            image: wK,
        },
        b2: {
            pos: [5][7],
            taken: false,
            image: wB,
        },
        n2: {
            pos: [6][7],
            taken: false,
            image: wK,
        },
        r2: {
            pos: [7][7],
            taken: false,
            image: wR,
        },
    },
    b: {
        p1: {
            pos: [0][1],
            taken: false,
            image: bP,
        },
        p2: {
            pos: [1][1],
            taken: false,
            image: bP,
        },
        p3: {
            pos: [2][1],
            taken: false,
            image: bP,
        },
        p4: {
            pos: [3][1],
            taken: false,
            image: bP,
        },
        p5: {
            pos: [4][1],
            taken: false,
            image: bP,
        },
        p6: {
            pos: [5][1],
            taken: false,
            image: bP,
        },
        p7: {
            pos: [6][1],
            taken: false,
            image: bP,
        },
        p8: {
            pos: [7][1],
            taken: false,
            image: bP,
        },
        r1: {
            pos: [0][0],
            taken: false,
            image: bR,
        },
        n1: {
            pos: [1][0],
            taken: false,
            image: bN,
        },
        b1: {
            pos: [2][0],
            taken: false,
            image: bB,
        },
        q: {
            pos: [3][0],
            taken: false,
            image: bQ,
        },
        k: {
            pos: [4][0],
            taken: false,
            image: bK,
        },
        b2: {
            pos: [5][0],
            taken: false,
            image: bB,
        },
        n2: {
            pos: [6][0],
            taken: false,
            image: bN,
        },
        r2: {
            pos: [7][0],
            taken: false,
            image: bR,
        },
    },
});
