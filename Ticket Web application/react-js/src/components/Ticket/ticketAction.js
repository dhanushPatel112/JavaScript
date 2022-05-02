import { fetchTicketLoading, updateTicketFail, updateTicketSuccess, fetchTicketSuccess, fetchTicketFail } from "./ticket"

import { getAllTicket, deleteTicket as deleteTicketService, editTicketService } from "./ticketService"

const user = localStorage.getItem("user")

export const fetchAllTickets = () => async (dispatch) => {
	if (user) {
		dispatch(fetchTicketLoading())
		try {
			const result = await getAllTicket()
			result.data.length && dispatch(fetchTicketSuccess(result.data))
		} catch (error) {
			dispatch(fetchTicketFail(error.message))
		}
	} else {
		window.location.href = "/login"
	}
}

export const deleteTic = (id) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await deleteTicketService(id)
		result.data && dispatch(deleteTic(result.data.data.authorId))
	} catch (error) {}
}

export const updateTicketAction = (id, ticket) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await editTicketService(id, ticket)
		result.data && dispatch(updateTicketSuccess(result.data.data.authorId))
	} catch (error) {
		dispatch(updateTicketFail())
	}
}
