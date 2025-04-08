import { Separator } from "@/components/ui/separator";
import { TicketItem } from "@/ticket/components/ticket-item";
import { initialTickets } from "../../data";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>
      <Separator />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
