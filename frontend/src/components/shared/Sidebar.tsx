import {
  HomeIcon,
  HandshakeIcon,
  UsersIcon,
  HandCoinsIcon,
  CogIcon,
  LogOutIcon,
  PartyPopperIcon,
  XIcon,
  Settings2Icon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed h-full height overflow-y-auto overflow-x-hidden w-60 lg:flex border-r lg:flex-col">
      <nav className="grid items-start text-sm font-medium p-[12px]">
        <span className="text-blackPrimary pb-2.5">
          <div
            className="flex items-center gap-4 rounded-lg px-2 py-2 h-[32px] cursor-pointer text-[14px] my-px transition-all hover:bg-graySecondary"
            id="radix-:rl:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <span className="overflow-hidden truncate w-[10.5rem]">
              Flutfast's Affiliate Program
            </span>
            <Settings2Icon className="h-4 w-4 cursor-pointer" />
          </div>
        </span>
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all w-[200px] text-blackPrimary hover:bg-graySecondary hover:text-primary"
            href="/getting-started"
          >
            <PartyPopperIcon className="h-4 w-4" />
            Getting started
          </a>
          <XIcon
            className="h-4 w-4 text-blackPrimary hover:cursor-pointer hover:text-greenSecondary"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:rn:"
            data-state="closed"
          />
        </div>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all bg-greenPrimary text-blackPrimary"
          href="/"
        >
          <HomeIcon className="h-4 w-4" />
          <div className="flex items-center gap-2">Home</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/partners"
        >
          <HandshakeIcon className="h-4 w-4" />
          <div className="flex items-center gap-2">Partners</div>
        </a>
        {/* Continue replacing SVGs with Lucide React icons similarly for other menu items */}
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/customers"
        >
          <UsersIcon className="h-4 w-4" />
          <div className="flex items-center gap-2">Customers</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/payouts"
        >
          <HandCoinsIcon className="h-4 w-4" />
          <div className="flex items-center gap-2">Payouts</div>
        </a>

        {/* Rest of the component follows similar pattern */}

        <nav className="grid items-start px-2 mt-auto text-sm font-medium lg:px-2 pb-5">
          <a
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
            href="/settings"
          >
            <CogIcon className="h-4 w-4" />
            Settings
          </a>
          <button className="whitespace-nowrap transition-colors ... text-redPrimary">
            <LogOutIcon className="h-4 w-4 mr-2" />
            Sign out
          </button>
        </nav>
      </nav>
    </div>
  );
}
