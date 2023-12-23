import { describe, expect, test } from "@jest/globals";
import { Graph } from "graphlib";
import { createMatrix } from "../day3/day3";
import { populateGraph } from "../day23/day23";

describe("populateGraph", () => {
    test.only("create the right nodes", () => {
        const testData = `#.##
#..#
.<..
.###
`;

        let g = new Graph();
        const mtx = createMatrix(testData);
        populateGraph(g, mtx);
        console.log(g.nodes());
        // expect(testResult.nodes).toBe(3);
    });
});
