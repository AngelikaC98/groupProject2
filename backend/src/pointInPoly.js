"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointInPoly = void 0;
// Return true if point is inside poly, and false if it is not
const pointInPoly = (poly, point) => {
    let inside = false;
    const x = point[0];
    const y = point[1];
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const A = poly[j];
        const B = poly[i];
        const onLeft = x < ((B[0] - A[0]) * (y - A[1])) / (B[1] - A[1]) + A[0];
        const crossesRay = A[1] > y != B[1] > y;
        // check if its to the left hand side
        if (onLeft && crossesRay) {
            inside = !inside;
        }
    }
    return inside;
};
exports.pointInPoly = pointInPoly;
