// spread perator

const friends =["rhaim","karim"]

const schlfriends=["sara","jerin","tanisha"]


const clzfriends =["musta","tashfiq"]



friends.push(...schlfriends)
friends.push(...clzfriends)

// console.log(friends)


const user={name:"faiji",address:"dhaka"}

const otherinfo={age:26,gender:"male"}


const userinfo={...user,...otherinfo}

console.log(userinfo)


// rest operator



