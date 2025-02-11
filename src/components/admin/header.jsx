import { LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";

function AdminHeader({setOpen}) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button className="lg:hidden sm:block" onClick={()=>setOpen(true)}>
        <Menu />
        <span className="sr-only"> Toogle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="inline-flex gap-2 item-center rounded-md px-4 py-2 text-sm font-medium shadow">
          <LogOut />
          Log Out
        </Button>
      </div>
    </header>
  );
}
export default AdminHeader;
