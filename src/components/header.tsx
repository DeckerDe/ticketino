import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { Button, buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav
      className="
          supports-backdrop-blur:bg-background/60
          fixed left-0 right-0 top-0 z-20
          border-b bg-background/95 backdrop-blur
          w-full flex py-2.5 px-5 justify-between
          "
    >
      <div className="flex align-items gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban />
          <h1 className="text-lg font-semibold">Ticketino</h1>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Tickets</Link>
        </Button>
      </div>
    </nav>
  );
};

export { Header };
