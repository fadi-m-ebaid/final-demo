const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: 'config.env' })
const mongoose = require('mongoose');
const logoutRouter = require ('./routes/logout');


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO);
}
mongoose.connection.on("connected", () => {
    console.log(`connected to mongo db`)
})
mongoose.connection.on("disconnected", () => {
    console.log(`disconnected to mongo db!`)
})

app.use(express.json());

app.use('*', (res) => {
    res.status(404).json({ Warning: "Path not found" })
});
app.use((err, req, res, next) => {
    res.status(505).json({ message: "Server error" })
});

app.use('/logout', logoutRouter);




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`connected to backend....on port ${PORT}`)
})

module.exports = index;