use homeworks

db.employees.insertMany([
    { "name": "Alice", "age": 28, "position": "Manager", "salary": 5000 },
    { "name": "Bob", "age": 35, "position": "Developer", "salary": 6000 },
    { "name": "Charlie", "age": 24, "position": "Designer", "salary": 4000 },
    { "name": "David", "age": 31, "position": "Analyst", "salary": 5500 },
    { "name": "Eva", "age": 29, "position": "HR", "salary": 4500 },
    { "name": "Helen", "age": 25, "position": "Manager", "salary": 5500 },
    { "name": "Ben", "age": 32, "position": "Developer", "salary": 6700 },
    { "name": "Barbara", "age": 21, "position": "HR", "salary": 4300 },
    { "name": "Daniel", "age": 39, "position": "Developer", "salary": 5700 },
    { "name": "Emmy", "age": 22, "position": "HR", "salary": 4500 }
  ])

  db.employees.find().sort({ name: 1 }).limit(2)

  db.employees.find({ age: { $lt: 30 } }).sort({ age: 1 })

  db.employees.find().skip(2).limit(3)

  db.employees.find(
    { position: { $in: ["Manager", "HR"] } },
    { _id: 0, name: 1 }
 ).limit(2)

 db.employees.find(
    { salary: { $gt: 5000 } },
    { _id: 0, name: 1 }
  ).skip(1)

  db.employees.updateMany(
    { position: "Developer" },
    { $inc: { salary: 2000 } }
  )

  db.employees.updateMany(
    {},
    { $set: { manager: "Alice" } }
  )

  db.employees.updateMany(
    { position: "HR" },
    { $set: { manager: "Helen" } }
  )

  db.employees.updateOne(
    { name: "Charlie" },
    { $inc: { salary: -500 } }
  )

  db.employees.updateMany(
    {},
    { $unset: { manager: "" } }
  )
  
  

  

