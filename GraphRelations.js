const cities = "ATALANTA MIAMI NYC SAN_FRANCISCO SAN_DIEGO BUFFALO AUSTIN HOUSTON WHASHINGTON SEATLE PORTLAND".split(" ")

const routes = [
    ["ATALANTA", "MIAMI"],
    ["ATALANTA","NYC"],
    ["NYC","BUFFALO"],
    ["SAN_FRANCISCO","SAN_DIEGO"],
    ["BUFFALO","AUSTIN"],
    ["AUSTIN","SEATLE"],
    ["PORTLAND","MIAMI"],
    ["WHASHINGTON","NYC"],
    ["SEATLE","SAN_DIEGO"],
    ["HOUSTON","ATALANTA"]
];

const connectionList = new Map();

function addNode(cities) {
    connectionList.set(cities,[])
}

function addConnection(from, to) {
    connectionList.get(from).push(to);
    connectionList.get(to).push(from);
}

cities.forEach(addNode);
routes.forEach(route => addConnection(...route))

console.log(connectionList);