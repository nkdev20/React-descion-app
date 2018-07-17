const a = [1, 2, 3];

const s = [];
a.forEach(array => {
    s.push(array*2);
});
console.log(s);

//map
const map = a.map(array => array*3);
console.log(map);

//filter
const filter = map.filter(array => array > 5);
console.log(filter);

//reduce
const reduce = a.reduce((accumulator, a) => {
    return accumulator + a;
},5);

console.log(reduce);


const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

let newArray = []
array.forEach(user => {
	let { team } = user;
	team = team + "!";
	newArray.push(team);
})
console.log(newArray);

const newMap = array.map(user => {
    let {username} = user;
    return username + "?";
});

const filterTeam = array.filter(user => {
    return user.team === 'red';
})

const reduceTest = array.reduce((accumulator , user) => {
    return accumulator + user.score;
},0);

console.log(newMap);
console.log(array);
console.log(filterTeam);
console.log(reduceTest);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);