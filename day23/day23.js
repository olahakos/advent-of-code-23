import { Graph } from "graphlib";

import { fileReader } from "../shared/fileReader.js";
import { createMatrix } from "../day3/day3.js";

const populateGraph = (g, data) => {
    data.forEach((line, j) => {
        line.forEach((item, i) => {
            if (item === ".") g.setNode(`${i},${j}`);
        });
    });
    return g;
};

const main = async () => {
    let g = new Graph();
    const data = await fileReader("./day3/day3.input.txt");
    const mtx = createMatrix(data);
    g = populateGraph(g, mtx);
    // g.setNode("0,0");
    // console.log(g.hasNode("0,0"));
    // console.log(g.hasNode("0,1"));
};

if (process.env.NODE_ENV !== "test") main();

export { populateGraph };
