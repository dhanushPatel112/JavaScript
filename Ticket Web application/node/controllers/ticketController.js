const { create, update, deleteTicket, getById, getAll } = require("../services/ticket.services.js")
const createError = require("http-errors")

exports.create = async (req,res, next) => {
    try {
		req.body.authorId = req.user.payload.id
        console.log(req.body);
        const ticket = await create(req.body)
		res.status(200).json({
			status: true,
			message: "Ticket Created successfully",
			data: ticket,
		})
    } catch (error) {
		console.log(error);
		res.status(400).json({error})
		// next(createError(error.statusCode, error.message))
    }
}

exports.update = async (req,res, next) => {
    try {
        const ticket = await update(req.params.id,req.body)
		res.status(200).json({
			status: true,
			message: "Ticket Updated successfully",
			data: ticket,
		})
    } catch (error) {
		console.log(error);
		// next(createError(error.statusCode, error.message))
		res.status(400).json({error})
    }
}

exports.deleteTicket = async (req,res, next) => {
    try {
        const ticket = await deleteTicket(req.params.id)
		res.status(200).json({
			status: true,
			message: "Ticket Deleted successfully",
			data: ticket,
		})
    } catch (error) {
		console.log(error);
		// next(createError(error.statusCode, error.message))
		res.status(400).json({error})
    }
}

exports.getAll = async (req,res, next) => {
    try {
        const ticket = await getAll()
		res.status(200).json({
			status: true,
			message: "",
			data: ticket,
		})
    } catch (error) {
		console.log(error);
		// next(createError(error.statusCode, error.message))
		res.status(400).json({error})
    }
}

exports.getById = async (req,res, next) => {
    try {
        const ticket = await getById(req.params.id)
		res.status(200).json({
			status: true,
			message: "",
			data: ticket,
		})
    } catch (error) {
		console.log(error);
		// next(createError(error.statusCode, error.message))
		res.status(400).json({error})	
    }
}