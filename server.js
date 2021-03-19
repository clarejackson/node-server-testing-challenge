const express = require("express")
const cors = require("cors")
// const galleriesRouter = require("./api/galleries-router")

const server = express()

server.use(cors())
server.use(express.json())

// server.use("/api/galleries", galleriesRouter)

server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Oh no! Something went wrong.",
	})
})

module.exports = server