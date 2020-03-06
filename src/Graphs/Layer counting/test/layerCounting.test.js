const expect = require('expect');
const layerCounting = require('../index');

describe('Graph layers counting', () => {
    it('Should correctly count all layers', () => {
        const adjacencyList = [
            [10, 1],
            [5, 0, 2, 3],
            [7, 1, 4],
            [2, 1, 5],
            [4, 2, 6, 7],
            [3, 3, 7],
            [7, 4, 8],
            [8, 4, 5, 8],
            [12, 6, 7]
        ];

        const getLayerNumber = (value, index) => index;

        layerCounting(adjacencyList, 0, getLayerNumber);
        expect(adjacencyList).toEqual([
            [1, 1],
            [2, 0, 2, 3],
            [3, 1, 4],
            [3, 1, 5],
            [4, 2, 6, 7],
            [4, 3, 7],
            [5, 4, 8],
            [5, 4, 5, 8],
            [6, 6, 7]
        ]);
    });

    it('Should work correctly with every start node', () => {
        const adjacencyList = [
            [10, 1],
            [5, 0, 2, 3],
            [7, 1, 4],
            [2, 1, 5],
            [4, 2, 6, 7],
            [3, 3, 7],
            [7, 4, 8],
            [8, 4, 5, 8],
            [12, 6, 7]
        ];

        const getLayerNumber = (value, index) => index;

        layerCounting(adjacencyList, 4, getLayerNumber);
        expect(adjacencyList).toEqual([
            [4, 1],
            [3, 0, 2, 3],
            [2, 1, 4],
            [4, 1, 5],
            [1, 2, 6, 7],
            [3, 3, 7],
            [2, 4, 8],
            [2, 4, 5, 8],
            [3, 6, 7]
        ]);
    });
});