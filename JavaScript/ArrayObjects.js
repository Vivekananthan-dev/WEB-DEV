let arr = [10,2,30];

console.log(arr.map(n=>n*5))

console.log(arr.filter(n=>n%2===0))

console.log(arr.reduce((sum,n)=>sum+n,2));

console.log(arr.find(n=>n>3))

console.log(arr.some(n=>n>5))

console.log(arr.every(n=>n>2))

console.log(arr.includes(3))

console.log(arr.sort((a,b)=>a-b))

//Build: users report script
//Make a local array of 20 fake user objects (name, age, city, isActive, orders array). 
//In one file, using only array methods and no for loops, produce: 
// active users grouped by city, total revenue per user via reduce, the top 3 spenders, and a list of names of users with no orders.
// Print it as JSON.

const users = [
  { name: "Aarav", age: 28,city: "Delhi",isActive: true,orders: [{ id: "A1", total: 1200 }, { id: "A2", total: 800 }] },
  { name: "Diya", age: 24, city: "Mumbai", isActive: true, orders: [{ id: "D1", total: 2500 }] },
  { name: "Kabir", age: 31, city: "Bengaluru", isActive: false, orders: [] },
  { name: "Ananya", age: 27, city: "Delhi", isActive: true, orders: [{ id: "AN1", total: 900 }, { id: "AN2", total: 1500 }] },
  { name: "Rohan", age: 35, city: "Pune", isActive: false, orders: [{ id: "R1", total: 600 }] },
  { name: "Isha", age: 22, city: "Mumbai", isActive: true, orders: [] },
  { name: "Vivaan", age: 29, city: "Bengaluru", isActive: true, orders: [{ id: "V1", total: 3200 }] },
  { name: "Meera", age: 33, city: "Chennai", isActive: true, orders: [{ id: "M1", total: 1100 }, { id: "M2", total: 700 }] },
  { name: "Arjun", age: 26, city: "Delhi", isActive: false, orders: [] },
  { name: "Saanvi", age: 30, city: "Pune", isActive: true, orders: [{ id: "S1", total: 1800 }] },
  { name: "Aditya", age: 38, city: "Mumbai", isActive: true, orders: [{ id: "AD1", total: 4000 }, { id: "AD2", total: 1200 }] },
  { name: "Kavya", age: 25, city: "Chennai", isActive: false, orders: [{ id: "K1", total: 500 }] },
  { name: "Reyansh", age: 32, city: "Bengaluru", isActive: true, orders: [] },
  { name: "Nisha", age: 28, city: "Delhi", isActive: true, orders: [{ id: "N1", total: 2100 }] },
  { name: "Manav", age: 23, city: "Pune", isActive: true, orders: [{ id: "MA1", total: 950 }, { id: "MA2", total: 650 }] },
  { name: "Tara", age: 34, city: "Mumbai", isActive: false, orders: [] },
  { name: "Yash", age: 29, city: "Chennai", isActive: true, orders: [{ id: "Y1", total: 2800 }] },
  { name: "Priya", age: 27, city: "Bengaluru", isActive: true, orders: [{ id: "P1", total: 1300 }, { id: "P2", total: 900 }] },
  { name: "Dev", age: 36, city: "Delhi", isActive: false, orders: [{ id: "DE1", total: 750 }] },
  { name: "Aisha", age: 21, city: "Pune", isActive: true, orders: [] }
];

//Active users grouped by city

const activeUsersByCity =  users.filter((user)=>user.isActive).reduce((groups,user)=>{
    if(!groups[user.city]){
        groups[user.city] =[];
    }
    groups[user.city].push(user);
    return groups;
},{})

console.log(activeUsersByCity)

//Total revenue per user
const revenuePerUser = users.map(((user)=>{
    const revenue = user.orders.reduce((sum,order)=> {
        return sum + order.total
    },0);
    return{
        name:user.name,
        revenue: revenue
    }
}))

console.log(revenuePerUser)

//3. Top three Spenders
const topSpender = revenuePerUser.sort((a,b)=>b.revenue-a.revenue).slice(0,3);

console.log(topSpender)

//4. Names of users with no orders

const usersWithNoOrders = users.filter((user)=>user.orders.length ===0).map((user)=>user.name)
console.log(usersWithNoOrders)

const report = {
    activeUsersByCity,
    revenuePerUser,
    topSpender,
    usersWithNoOrders
};
console.log(report)
console.log(JSON.stringify(report,null,2));