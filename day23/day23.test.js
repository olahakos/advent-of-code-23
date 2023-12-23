import { describe, expect, test } from "@jest/globals";
import { Graph } from "graphlib";
import { createMatrix } from "../day3/day3";
import { populateGraph, walkTheGraph } from "../day23/day23";

describe("populateGraph", () => {
    test("create the right nodes", () => {
        const testData = `#.##
#..#
.<..
.###
`;
        const nodes = ["1,0", "1,1", "2,1", "0,2", "2,2", "3,2", "0,3"];
        const g = new Graph();
        const mtx = createMatrix(testData);
        populateGraph(g, mtx);
        expect(g.nodes()).toEqual(nodes);
    });
});

describe("walkTheGraph", () => {
    test("Basic Recursion", () => {
        const g = new Graph();
        g.setNode("a");
        g.setEdge("a", "b");
        g.setEdge("b", "c");
        g.setEdge("b", "d");
        g.setEdge("d", "e");
        g.setEdge("e", "f");
        g.setEdge("b", "f");
        const longest = walkTheGraph(g, "a", 0);
        expect(g.edge("a", "b")).toEqual({ weight: 4 });
        expect(longest).toEqual(4);
    });
    test("Visited flagged", () => {
        const g = new Graph();
        g.setNode("a");
        g.setEdge("a", "b");
        g.setEdge("b", "c");
        g.setEdge("b", "d");
        g.setEdge("d", "e");
        g.setEdge("e", "f");
        g.setEdge("b", "f");
        const longest = walkTheGraph(g, "a", 0);
        expect(g.node("f")).toEqual({ visited: true });
    });
    test("Both Ways", () => {
        const g = new Graph();
        g.setNode("a");
        g.setEdge("a", "b");
        g.setEdge("b", "a");
        g.setEdge("b", "c");
        g.setEdge("c", "b");
        g.setEdge("b", "d");
        g.setEdge("d", "e");
        g.setEdge("e", "f");
        g.setEdge("b", "f");
        const longest = walkTheGraph(g, "a", 0);
        expect(longest).toEqual(4);
    });
});
