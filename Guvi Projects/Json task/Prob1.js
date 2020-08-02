var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omblet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};
//console.log(cat);

function addHtWt(cat) {
  cat["height"] = 20;
  cat["weight"] = 40;
}

function updateName(cat) {
  cat["name"] = "Fluffyy";
}

function listActivities(cat) {
  let catFriends = cat["catFriends"];
  for (let i = 0; i < catFriends.length; i++) {
    console.log(catFriends[i]["activities"]);
  }
}
listActivities(cat);

function printNames(cat) {
  let catFriends = cat["catFriends"];
  for (let i = 0; i < catFriends.length; i++) {
    console.log(catFriends[i]["name"]);
  }
}

function totalWt(cat) {
  let catFriends = cat["catFriends"];
  let sum = 0;
  for (let i = 0; i < catFriends.length; i++) {
    sum += catFriends[i]["weight"];
  }
  console.log(`Total weight is ${sum}`);
}

function totalActivities(cat) {
  console.log(cat["activities"]);
  listActivities(cat);
}

function addActivities(cat) {
  let catFriends = cat["catFriends"];
  for (let i = 0; i < catFriends.length; i++) {
    catFriends[i]["activities"].push("sleep", "eat");
  }
}

function updateFurColor(cat) {
  let catFriends = cat["catFriends"];
  for (let i = 0; i < catFriends.length; i++) {
    if (catFriends[i]["name"] === "bar") {
      catFriends[i]["furColor"] = "black";
    }
  }
}
