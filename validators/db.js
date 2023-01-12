const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
main().catch(err => console.log(err))

async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('MongoDB connected')
}


// const mongoose = require('mongoose');
//   mongoose.connect(process.env.MONGO_DB_URL)
//   const db = mongoose.connection;
//   db.on('error', error => console.error(error))
//   db.once('open', () => {
//       console.log('Connected to MongoDB')
//   })