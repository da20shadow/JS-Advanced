function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    console.log(coordinates)
    let result = [];

    for (const points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points),
        });
    }

    console.log(result);
}

function fancySolve(area, vol, input) {
    return JSON.parse(input)
        .map(p => ({
                area: area.call(p),
                volume: vol.call(p),
            })
        );
}

console.log(fancySolve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`));

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)