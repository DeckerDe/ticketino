import { initialTickets } from "@/app/data";

type TicketPageProps = {
    params: {
        ticketId: string;
    }
}

const TicketPage = ({params}: TicketPageProps) => {
    const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

    if (!ticket) {
        return <div>Ticket not found</div>
    }

    return (
        <div>
            <h2>{ticket.title}</h2>
            <p>{ticket.content}</p>
        </div>
    );
}

export default TicketPage;