const dataPerson = [
    { id: 1, name: "John Doe", age: 28, city: "New York", isActive: true },
    { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles", isActive: false },
    { id: 3, name: "Sam Johnson", age: 23, city: "Chicago", isActive: true },
    { id: 4, name: "Chris Lee", age: 40, city: "San Francisco", isActive: false },
    { id: 5, name: "Anna Brown", age: 30, city: "Seattle", isActive: true },
];
const DataUsers = [
    {
        id: 1,
        name: "John Doe",
        age: 28,
        city: "New York",
        isActive: true,
        transactions: [
            { id: 101, type: "deposit", amount: 500 },
            { id: 102, type: "withdrawal", amount: 200 }
        ]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 34,
        city: "Los Angeles",
        isActive: false,
        transactions: [
            { id: 103, type: "deposit", amount: 1000 },
            { id: 104, type: "withdrawal", amount: 300 }
        ]
    },
    {
        id: 3,
        name: "Sam Johnson",
        age: 23,
        city: "Chicago",
        isActive: true,
        transactions: [
            { id: 105, type: "deposit", amount: 1500 },
            { id: 106, type: "withdrawal", amount: 700 },
            { id: 107, type: "deposit", amount: 500 }
        ]
    },
    {
        id: 4,
        name: "Chris Lee",
        age: 40,
        city: "San Francisco",
        isActive: true,
        transactions: [
            { id: 108, type: "deposit", amount: 200 },
            { id: 109, type: "withdrawal", amount: 50 }
        ]
    },
    {
        id: 5,
        name: "Anna Brown",
        age: 30,
        city: "Seattle",
        isActive: false,
        transactions: [
            { id: 110, type: "deposit", amount: 800 },
            { id: 111, type: "withdrawal", amount: 100 }
        ]
    }
];
export { dataPerson, DataUsers };
