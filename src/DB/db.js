// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb"

if (!process.env.DATABASE_URL) {
  throw new Error('Invalid/Missing environment variable: "DATABASE_URL"')
}

const uri = process.env.DATABASE_URL
// console.log(uri,"uri")
const options = {}

let client
let clientPromise;

if (process.env.NODE_ENV === "development") {
 
  if (!global._mongoClientPromise) {
  // console.log("inside mongo client")
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}


export default clientPromise;