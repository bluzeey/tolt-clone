export default function Sidebar() {
  return (
    <div className="hidden lg:fixed  h-full lg:left-0 lg:z-1 height overflow-y-auto overflow-x-hidden w-60 lg:flex border-r lg:flex-col">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings2 h-4 w-4 cursor-pointer"
            >
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
          </div>
        </span>
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all w-[200px] text-blackPrimary hover:bg-graySecondary hover:text-primary"
            href="/getting-started"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-party-popper h-4 w-4"
            >
              <path d="M5.8 11.3 2 22l10.7-3.79"></path>
              <path d="M4 3h.01"></path>
              <path d="M22 8h.01"></path>
              <path d="M15 2h.01"></path>
              <path d="M22 20h.01"></path>
              <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
              <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"></path>
              <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path>
              <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
            </svg>
            Getting started
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x h-4 w-4 text-blackPrimary hover:cursor-pointer hover:text-greenSecondary"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:rn:"
            data-state="closed"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </div>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all bg-greenPrimary text-blackPrimary"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-home h-4 w-4"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <div className="flex items-center gap-2">Home</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/partners"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-handshake h-4 w-4"
          >
            <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
            <path d="m21 3 1 11h-2"></path>
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
            <path d="M3 4h8"></path>
          </svg>
          <div className="flex items-center gap-2">Partners</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/customers"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-users h-4 w-4"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <div className="flex items-center gap-2">Customers</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/payouts"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-hand-coins h-4 w-4"
          >
            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
            <path d="m2 16 6 6"></path>
            <circle cx="16" cy="9" r="2.9"></circle>
            <circle cx="6" cy="5" r="3"></circle>
          </svg>
          <div className="flex items-center gap-2">Payouts</div>
        </a>
        <hr className="my-2 border-t" />
        <span className="text-blackPrimary px-2 my-3">Configure</span>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/program-settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-settings h-4 w-4"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <div className="flex items-center gap-2">Program settings</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/flows"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-workflow h-4 w-4"
          >
            <rect width="8" height="8" x="3" y="3" rx="2"></rect>
            <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
            <rect width="8" height="8" x="13" y="13" rx="2"></rect>
          </svg>
          <div className="flex items-center gap-2">Flows</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/emails"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-mail h-4 w-4"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <div className="flex items-center gap-2">Emails</div>
        </a>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/resources"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-package h-4 w-4"
          >
            <path d="m7.5 4.27 9 5.15"></path>
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
            <path d="m3.3 7 8.7 5 8.7-5"></path>
            <path d="M12 22V12"></path>
          </svg>
          <div className="flex items-center gap-2">Resources</div>
        </a>
        <hr className="my-2 border-t" />
        <span className="text-blackPrimary px-2 my-3">Stats</span>
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-2 h-[32px] text-[14px] my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/reports"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-line-chart h-4 w-4"
          >
            <path d="M3 3v18h18"></path>
            <path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
          <div className="flex items-center gap-2">
            Reports
            <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow px-1 h-4 py-0 text-[8px] font-medium bg-greenSecondary text-white rounded-full">
              BETA
            </div>
          </div>
        </a>
      </nav>
      <nav className="grid items-start px-2 mt-auto text-sm font-medium lg:px-2 pb-5">
        <a
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 my-px transition-all text-blackPrimary hover:bg-graySecondary hover:text-primary"
          href="/settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cog h-4 w-4"
          >
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M12 2v2"></path>
            <path d="M12 22v-2"></path>
            <path d="m17 20.66-1-1.73"></path>
            <path d="M11 10.27 7 3.34"></path>
            <path d="m20.66 17-1.73-1"></path>
            <path d="m3.34 7 1.73 1"></path>
            <path d="M14 12h8"></path>
            <path d="M2 12h2"></path>
            <path d="m20.66 7-1.73 1"></path>
            <path d="m3.34 17 1.73-1"></path>
            <path d="m17 3.34-1 1.73"></path>
            <path d="m11 13.73-4 6.93"></path>
          </svg>
          Settings
        </a>
        <button className="whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border-input bg-background shadow-sm hover:bg-[#f9f9f9] w-full h-8 p-0 border-0 relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm mt-0.5 outline-none focus:bg-[#f9f9f9] focus:text-redPrimary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer justify-start text-redPrimary font-normal hover:text-redPrimary/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-log-out h-4 w-4 mr-2"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
          Sign out
        </button>
      </nav>
    </div>
  );
}
