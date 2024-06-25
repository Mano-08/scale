import React from "react";

function MobileNav() {
  const [displayNav, setDisplayNav] = React.useState(false);
  return (
    <nav className="block relative lg:hidden">
      <button
        onClick={() => setDisplayNav(true)}
        className="flex flex-col gap-1"
      >
        <div className="h-0.5 w-6 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
      </button>
      {displayNav && (
        <div className="absolute bg-black rounded-xl overflow-hidden text-white text-xs flex flex-col gap-8 top-0 -right-[2.5vw] w-[95vw] z-[300] min-h-[40vh]">
          <div className="flex flex-col gap-4 px-5">
            <div className="flex flex-row text-neutral-400 items-center justify-between">
              <span>PRODUCTS</span>{" "}
              <span onClick={() => setDisplayNav(false)}>x</span>
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p>Scale Data Engine</p>
                <p>For Generative AI</p>
                <p>For Government</p>
                <p>For Automotive</p>
                <p>Scale Donovan</p>
                <p>Scale GenAI Platform</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Scale Evaluation</p>
                <p>For Model Developers</p>
                <p>For Public Sector</p>
                <p>For Enterprise</p>
              </div>
            </div>
          </div>

          {/* GOVERNMENT */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex text-neutral-400 flex-row items-center justify-between">
              <span>GOVERNMENT</span>{" "}
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p>Defence Data Engine</p>
                <p>Public Sector Generative AI</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Federal</p>
              </div>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex text-neutral-400 flex-row items-center justify-between">
              <span>RESOURCES</span>{" "}
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p>About</p>
                <p>Guides</p>
                <p>Careers</p>
                <p>AI Readiness Report 2024</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Blog</p>
                <p>Events</p>
                <p>Documentation</p>
              </div>
            </div>
          </div>

          {/* CUSTOMERS */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex text-neutral-400 flex-row items-center justify-between">
              <span>CUSTOMERS</span>{" "}
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p>Open AI </p>
                <p>Toyota</p>
                <p>Flexport</p>
                <p>See All Customers</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Microsoft</p>
                <p>Brex</p>
                <p>OpenSea</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-3 flex flex-row items-center justify-evenly">
            <a
              className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
              href="/demo"
            >
              <div className="bookdemo new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-xs px-[20px] py-[9px]">
                Book a Demo
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </div>
              <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
            </a>{" "}
            <button>Log In</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNav;
