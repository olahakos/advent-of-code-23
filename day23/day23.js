import { Graph } from "graphlib";

import { fileReader } from "../shared/fileReader.js";
import { createMatrix } from "../day3/day3.js";

const condSetEdges = (g, n, m) => {
    if (g.hasNode(`${m.i},${m.j}`)) {
        g.setEdge(`${n.i},${n.j}`, `${m.i},${m.j}`);
        g.setEdge(`${m.i},${m.j}`, `${n.i},${n.j}`);
    }
};

const addEdges = (g) => {
    g.nodes().forEach((node) => {
        const nodeData = g.node(node);
        condSetEdges(g, nodeData, { i: nodeData.i - 1, j: nodeData.j });
        condSetEdges(g, nodeData, { i: nodeData.i, j: nodeData.j - 1 });
        condSetEdges(g, nodeData, { i: nodeData.i + 1, j: nodeData.j });
        condSetEdges(g, nodeData, { i: nodeData.i, j: nodeData.j + 1 });
    });
};

const addNodes = (g, mtx) => {
    mtx.forEach((line, j) => {
        line.forEach((item, i) => {
            if (item === ".") g.setNode(`${i},${j}`);
            switch (item) {
                case ".":
                    g.setNode(`${i},${j}`, {
                        i,
                        j,
                    });
                    break;
                case "<":
                    g.setEdge(`${i + 1},${j}`, `${i - 1},${j}`);
                    break;
                case ">":
                    g.setEdge(`${i - 1},${j}`, `${i + 1},${j}`);
                    break;
                case "v":
                    g.setEdge(`${i},${j - 1}`, `${i},${j + 1}`);
                    break;
                case "^":
                    g.setEdge(`${i},${j + 1}`, `${i},${j - 1}`);
                    break;
                default:
                    break;
            }
        });
    });
};

const populateGraph = (g, mtx) => {
    addNodes(g, mtx);
    addEdges(g);
};

const walkTheGraph = (g, cursor, len) => {
    if (g.node(cursor) && g.node(cursor).visited) {
        return len;
    }

    g.setNode(cursor, {
        ...g.node(cursor),
        visited: true,
    });

    const edges = g.outEdges(cursor);
    if (edges.length === 0) return len;

    let maxWeight = 0;
    edges.forEach((edge) => {
        if (!g.node(edge.w) || !g.node(edge.w).visited) {
            const getWeight = walkTheGraph(g, edge.w, len + 1);
            maxWeight = Math.max(maxWeight, getWeight);
            g.setEdge(edge.v, edge.w, {
                weight: getWeight,
            });
        }
        console.log(edge);
    });
    return maxWeight;
    // g.setEdge(cursor)
    // console.log(g.outEdges(cursor));
};

const main = async () => {
    let g = new Graph();
    const data = await fileReader("./day3/day3.input.txt");
    const mtx = createMatrix(data);
    populateGraph(g, mtx);
    const longest = walkTheGraph(g, "1,0", 0);
    console.log(longest);
    // g.setNode("0,0");
    // console.log(g.hasNode("0,0"));
    // console.log(g.hasNode("0,1"));
};

if (process.env.NODE_ENV !== "test") main();

export { populateGraph, walkTheGraph };
