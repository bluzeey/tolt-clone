export default function DashboardContent() {
  return (
    <main className=" ml-0 mr-0 px-8 pt-8 flex-1 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">Good evening, Sahil!</h1>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg border bg-card flex flex-col text-blackPrimary lg:flex-row lg:items-center gap-3 pt-5 pb-6">
              <div className="px-6">
                <div className="flex flex-col space-y-1.5 p-6 py-0 pb-4 px-0">
                  <h3 className="tracking-tight flex items-center gap-2 text-blackPrimary font-medium text-md max-w-[20rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-handshake h-6 w-6 shrink-0"
                    >
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                    <span className="truncate">
                      Flutfast's Affiliate Program{" "}
                    </span>
                  </h3>
                </div>
                <span className="text-xs font-normal text-gray-600">
                  Total revenue generated
                </span>
                <p className="text-blackPrimary text-3xl font-medium">$0.00</p>
                <div className="flex flex-col w-full md:flex-row gap-3 pt-3">
                  <a className="w-full" href="/partners">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-input bg-background shadow-sm hover:bg-[#f9f9f9] hover:text-primary h-8 px-4 py-2 font-normal w-full text-blackPrimary text-sm">
                      View partners
                    </button>
                  </a>
                  <a className="w-full" href="/customers">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-input bg-background shadow-sm hover:bg-[#f9f9f9] hover:text-primary h-8 px-4 py-2 font-normal w-full text-blackPrimary text-sm">
                      View customers
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 mt-5">
                <div className="p-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 min-height">
                    <div className="rounded-lg border bg-card py-0 flex flex-col gap-3 text-gray-600 justify-center h-32">
                      <div className="flex flex-col space-y-1.5 p-6 py-0">
                        <div className="flex flex-row w-full justify-between items-center">
                          <h1 className="text-xs ">Total clicks</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mouse-pointer-click h-4 w-4 text-gray-500"
                          >
                            <path d="m9 9 5 12 1.8-5.2L21 14Z" />
                            <path d="M7.2 2.2 8 5.1" />
                            <path d="m5.1 8-2.9-.8" />
                            <path d="M14 4.1 12 6" />
                            <path d="m6 12-1.9 2" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 py-0">
                        <p className="text-2xl text-blackPrimary font-meidum">
                          <span>0</span>
                        </p>
                        <span className="text-xs text-gray-600">
                          All clicks from partner links
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card py-0 flex flex-col text-gray-600 gap-3 justify-center h-32">
                      <div className="flex flex-col space-y-1.5 p-6 py-0">
                        <div className="flex flex-row w-full justify-between items-center">
                          <h1 className="text-xs">Total leads</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users h-4 w-4 text-gray-500"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 py-0">
                        <p className="text-2xl text-blackPrimary font-meidum">
                          <span>0</span>
                        </p>
                        <span className="text-xs text-gray-600">
                          All sign ups from partner links
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card py-0 flex flex-col text-gray-600 gap-3 justify-center h-32">
                      <div className="flex flex-col space-y-1.5 p-6 py-0">
                        <div className="flex flex-row w-full justify-between items-center">
                          <h1 className="text-xs">Total referred customers</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-handshake h-4 w-4 text-gray-500"
                          >
                            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                            <path d="m21 3 1 11h-2" />
                            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                            <path d="M3 4h8" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 py-0">
                        <p className="text-2xl text-blackPrimary font-meidum">
                          <span>0</span>
                        </p>
                        <span className="text-xs text-gray-600">
                          All paid referred customers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-0.5">
            <div className=" col-span-3 lg:col-span-1">
              <div className="rounded-lg border bg-card text-card-foreground h-[30.1rem]">
                <div className="p-0">
                  <div className="flex w-full py-4 px-4 justify-between items-center">
                    <h3 className="font-normal  text-md text-blackPrimary leading-none tracking-tight">
                      Top partners by revenue brought in
                    </h3>
                    <a
                      className="text-xs flex gap-0.5 text-blackPrimary items-center cursor-pointer hover:text-[#6D6D6D]"
                      href="/partners"
                    >
                      View all
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right w-4 h-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b bg-graySecondary border h-6 text-blackPrimary">
                          <tr className="border-b data-[state=selected]:bg-graySecondary h-10">
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Partner{" "}
                              </p>
                            </th>
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Total revenue{" "}
                              </p>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="flex flex-col px-6 gap-3 w-full items-center justify-center h-[20rem]">
                      <div
                        title=""
                        role="button"
                        aria-label="animation"
                        tabIndex={0}
                        style={{
                          width: 90,
                          height: 90,
                          overflow: "hidden",
                          margin: "0px auto",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 1200 1200"
                          width={1200}
                          height={1200}
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                            contentVisibility: "visible",
                          }}
                        >
                          <defs>
                            <clipPath id="__lottie_element_188">
                              <rect width={1200} height={1200} x={0} y={0} />
                            </clipPath>
                            <linearGradient
                              id="__lottie_element_205"
                              spreadMethod="pad"
                              gradientUnits="userSpaceOnUse"
                              x1={-280}
                              y1={0}
                              x2={280}
                              y2={0}
                            >
                              <stop offset="0%" stopColor="rgb(223,236,250)" />
                              <stop offset="50%" stopColor="rgb(236,244,252)" />
                              <stop
                                offset="100%"
                                stopColor="rgb(250,252,255)"
                              />
                            </linearGradient>
                            <linearGradient
                              id="__lottie_element_217"
                              spreadMethod="pad"
                              gradientUnits="userSpaceOnUse"
                              x1={-200}
                              y1={0}
                              x2={200}
                              y2={0}
                            >
                              <stop offset="0%" stopColor="rgb(233,240,250)" />
                              <stop offset="50%" stopColor="rgb(224,236,248)" />
                              <stop
                                offset="100%"
                                stopColor="rgb(216,232,245)"
                              />
                            </linearGradient>
                          </defs>
                          <g clipPath="url(#__lottie_element_188)">
                            <g
                              transform="matrix(1,0,0,1,400,644.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="url(#__lottie_element_205)"
                                  fillOpacity={1}
                                  d=" M280,-320 C280,-320 -280,-320 -280,-320 C-280,-320 -280,320 -280,320 C-280,320 280,320 280,320 C280,320 280,-320 280,-320z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,880,644.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="url(#__lottie_element_217)"
                                  fillOpacity={1}
                                  d=" M-200,-320 C-200,-320 200,-320 200,-320 C200,-320 200,320 200,320 C200,320 -200,320 -200,320 C-200,320 -200,-320 -200,-320z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,920,464.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(185,208,228)"
                                  fillOpacity={1}
                                  d=" M240,140 C240,140 -160,140 -160,140 C-160,140 -240,-140 -240,-140 C-240,-140 160,-140 160,-140 C160,-140 240,140 240,140z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,360,464.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(208,225,241)"
                                  fillOpacity={1}
                                  d=" M240,140 C240,140 -320,140 -320,140 C-320,140 -240,-140 -240,-140 C-240,-140 320,-140 320,-140 C320,-140 240,140 240,140z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,540,904.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(208,225,241)"
                                  fillOpacity={1}
                                  d=" M80,20 C80,20 -80,20 -80,20 C-91.0459976196289,20 -100,11.045999526977539 -100,0 C-100,0 -100,0 -100,0 C-100,-11.045999526977539 -91.0459976196289,-20 -80,-20 C-80,-20 80,-20 80,-20 C91.0459976196289,-20 100,-11.045999526977539 100,0 C100,0 100,0 100,0 C100,11.045999526977539 91.0459976196289,20 80,20z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.8655684590339661,0,0,1,959.4859008789062,900)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(1,21,19)"
                                  fillOpacity={1}
                                  d=" M139.5,0 C139.5,77.31999969482422 77.04399871826172,140 0,140 C-77.04399871826172,140 -139.5,77.31999969482422 -139.5,0 C-139.5,-77.31999969482422 -77.04399871826172,-140 0,-140 C77.04399871826172,-140 139.5,-77.31999969482422 139.5,0z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.9602252840995789,0,0,1,979,900)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(1,21,19)"
                                  fillOpacity={1}
                                  d=" M20,140 C20,140 -20,140 -20,140 C-20,140 -20,-140 -20,-140 C-20,-140 20,-140 20,-140 C20,-140 20,140 20,140z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.8655684590339661,0,0,1,999.5440673828125,900)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(4,45,42)"
                                  fillOpacity={1}
                                  d=" M139.5,0 C139.5,77.31999969482422 77.04399871826172,140 0,140 C-77.04399871826172,140 -139.5,77.31999969482422 -139.5,0 C-139.5,-77.31999969482422 -77.04399871826172,-140 0,-140 C77.04399871826172,-140 139.5,-77.31999969482422 139.5,0z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.8655684590339661,0,0,1,635.572509765625,560)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(255,255,255)"
                                  fillOpacity={1}
                                  d=" M392.51800537109375,307.7120056152344 C398.135986328125,298.9020080566406 407.4630126953125,294.4960021972656 420.5,294.4960021972656 C433.53399658203125,294.4960021972656 442.8630065917969,298.9020080566406 448.4830017089844,307.7120056152344 C454.1000061035156,316.52398681640625 456.9110107421875,328.70599365234375 456.9110107421875,344.25799560546875 C456.9110107421875,359.9010009765625 454.1000061035156,372.1730041503906 448.4830017089844,381.072998046875 C442.8630065917969,389.9729919433594 433.53399658203125,394.42401123046875 420.5,394.42401123046875 C407.4630126953125,394.42401123046875 398.135986328125,389.9729919433594 392.51800537109375,381.072998046875 C386.89801025390625,372.1730041503906 384.0889892578125,359.9010009765625 384.0889892578125,344.25799560546875 C384.0889892578125,328.70599365234375 386.89801025390625,316.52398681640625 392.51800537109375,307.7120056152344z M437.0199890136719,327.4679870605469 C436.1650085449219,322.9289855957031 434.4570007324219,319.22100830078125 431.8949890136719,316.3429870605469 C429.3330078125,313.4670104980469 425.53399658203125,312.0270080566406 420.5,312.0270080566406 C415.4639892578125,312.0270080566406 411.6669921875,313.4670104980469 409.1050109863281,316.3429870605469 C406.5429992675781,319.22100830078125 404.8340148925781,322.9289855957031 403.9800109863281,327.4679870605469 C403.125,332.0090026855469 402.6990051269531,337.6059875488281 402.6990051269531,344.25799560546875 C402.6990051269531,351.09100341796875 403.10400390625,356.822998046875 403.9129943847656,361.4519958496094 C404.72198486328125,366.0830078125 406.4280090332031,369.81298828125 409.0369873046875,372.6449890136719 C411.64300537109375,375.47698974609375 415.4639892578125,376.89300537109375 420.5,376.89300537109375 C425.53399658203125,376.89300537109375 429.35400390625,375.47698974609375 431.9630126953125,372.6449890136719 C434.5690002441406,369.81298828125 436.27801513671875,366.0830078125 437.0870056152344,361.4519958496094 C437.89599609375,356.822998046875 438.3009948730469,351.09100341796875 438.3009948730469,344.25799560546875 C438.3009948730469,337.6059875488281 437.87298583984375,332.0090026855469 437.0199890136719,327.4679870605469z"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <p className="text-xs font-medium text-blackPrimary">
                          No data available.
                        </p>
                        <p className="text-xs text-center text-blackPrimary">
                          As soon as you get your first partner, it’ll pop up
                          here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <div className="rounded-lg border bg-card text-card-foreground h-full">
                <div className="p-0">
                  <div className="flex w-full py-4 px-4 justify-between items-center">
                    <h3 className="font-normal text-md text-blackPrimary leading-none tracking-tight">
                      Recent referred customers
                    </h3>
                    <a
                      className="text-xs flex gap-0.5 text-blackPrimary items-center cursor-pointer hover:text-[#6D6D6D]"
                      href="/customers"
                    >
                      View all
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right w-4 h-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                  <div className="">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b bg-graySecondary border h-6 text-blackPrimary">
                          <tr className="border-b data-[state=selected]:bg-graySecondary h-10">
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Referred at{" "}
                              </p>
                            </th>
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Email{" "}
                              </p>
                            </th>
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Partner{" "}
                              </p>
                            </th>
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Amount paid{" "}
                              </p>
                            </th>
                            <th className="h-10 px-4 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-xs text-blackPrimary">
                              <p className="px-2 flex items-center gap-1">
                                Status{" "}
                              </p>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="flex flex-col px-6 gap-3 w-full items-center justify-center h-[20rem]">
                      <div
                        title=""
                        role="button"
                        aria-label="animation"
                        tabIndex={0}
                        style={{
                          width: 90,
                          height: 90,
                          overflow: "hidden",
                          margin: "0px auto",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 1200 1200"
                          width={1200}
                          height={1200}
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                            contentVisibility: "visible",
                          }}
                        >
                          <defs>
                            <clipPath id="__lottie_element_219">
                              <rect width={1200} height={1200} x={0} y={0} />
                            </clipPath>
                            <linearGradient
                              id="__lottie_element_236"
                              spreadMethod="pad"
                              gradientUnits="userSpaceOnUse"
                              x1={-280}
                              y1={0}
                              x2={280}
                              y2={0}
                            >
                              <stop offset="0%" stopColor="rgb(223,236,250)" />
                              <stop offset="50%" stopColor="rgb(236,244,252)" />
                              <stop
                                offset="100%"
                                stopColor="rgb(250,252,255)"
                              />
                            </linearGradient>
                            <linearGradient
                              id="__lottie_element_248"
                              spreadMethod="pad"
                              gradientUnits="userSpaceOnUse"
                              x1={-200}
                              y1={0}
                              x2={200}
                              y2={0}
                            >
                              <stop offset="0%" stopColor="rgb(233,240,250)" />
                              <stop offset="50%" stopColor="rgb(224,236,248)" />
                              <stop
                                offset="100%"
                                stopColor="rgb(216,232,245)"
                              />
                            </linearGradient>
                          </defs>
                          <g clipPath="url(#__lottie_element_219)">
                            <g
                              transform="matrix(1,0,0,1,400,644.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="url(#__lottie_element_236)"
                                  fillOpacity={1}
                                  d=" M280,-320 C280,-320 -280,-320 -280,-320 C-280,-320 -280,320 -280,320 C-280,320 280,320 280,320 C280,320 280,-320 280,-320z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,880,644.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="url(#__lottie_element_248)"
                                  fillOpacity={1}
                                  d=" M-200,-320 C-200,-320 200,-320 200,-320 C200,-320 200,320 200,320 C200,320 -200,320 -200,320 C-200,320 -200,-320 -200,-320z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,920,464.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(185,208,228)"
                                  fillOpacity={1}
                                  d=" M240,140 C240,140 -160,140 -160,140 C-160,140 -240,-140 -240,-140 C-240,-140 160,-140 160,-140 C160,-140 240,140 240,140z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,360,464.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(208,225,241)"
                                  fillOpacity={1}
                                  d=" M240,140 C240,140 -320,140 -320,140 C-320,140 -240,-140 -240,-140 C-240,-140 320,-140 320,-140 C320,-140 240,140 240,140z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,540,904.3330078125)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(208,225,241)"
                                  fillOpacity={1}
                                  d=" M80,20 C80,20 -80,20 -80,20 C-91.0459976196289,20 -100,11.045999526977539 -100,0 C-100,0 -100,0 -100,0 C-100,-11.045999526977539 -91.0459976196289,-20 -80,-20 C-80,-20 80,-20 80,-20 C91.0459976196289,-20 100,-11.045999526977539 100,0 C100,0 100,0 100,0 C100,11.045999526977539 91.0459976196289,20 80,20z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.8655684590339661,0,0,1,959.4859008789062,900)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(1,21,19)"
                                  fillOpacity={1}
                                  d=" M139.5,0 C139.5,77.31999969482422 77.04399871826172,140 0,140 C-77.04399871826172,140 -139.5,77.31999969482422 -139.5,0 C-139.5,-77.31999969482422 -77.04399871826172,-140 0,-140 C77.04399871826172,-140 139.5,-77.31999969482422 139.5,0z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.9602252840995789,0,0,1,979,900)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(1,21,19)"
                                  fillOpacity={1}
                                  d=" M20,140 C20,140 -20,140 -20,140 C-20,140 -20,-140 -20,-140 C-20,-140 20,-140 20,-140 C20,-140 20,140 20,140z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.8655684590339661,0,0,1,999.5440673828125,900)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(4,45,42)"
                                  fillOpacity={1}
                                  d=" M139.5,0 C139.5,77.31999969482422 77.04399871826172,140 0,140 C-77.04399871826172,140 -139.5,77.31999969482422 -139.5,0 C-139.5,-77.31999969482422 -77.04399871826172,-140 0,-140 C77.04399871826172,-140 139.5,-77.31999969482422 139.5,0z"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(0.8655684590339661,0,0,1,635.572509765625,560)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(255,255,255)"
                                  fillOpacity={1}
                                  d=" M392.51800537109375,307.7120056152344 C398.135986328125,298.9020080566406 407.4630126953125,294.4960021972656 420.5,294.4960021972656 C433.53399658203125,294.4960021972656 442.8630065917969,298.9020080566406 448.4830017089844,307.7120056152344 C454.1000061035156,316.52398681640625 456.9110107421875,328.70599365234375 456.9110107421875,344.25799560546875 C456.9110107421875,359.9010009765625 454.1000061035156,372.1730041503906 448.4830017089844,381.072998046875 C442.8630065917969,389.9729919433594 433.53399658203125,394.42401123046875 420.5,394.42401123046875 C407.4630126953125,394.42401123046875 398.135986328125,389.9729919433594 392.51800537109375,381.072998046875 C386.89801025390625,372.1730041503906 384.0889892578125,359.9010009765625 384.0889892578125,344.25799560546875 C384.0889892578125,328.70599365234375 386.89801025390625,316.52398681640625 392.51800537109375,307.7120056152344z M437.0199890136719,327.4679870605469 C436.1650085449219,322.9289855957031 434.4570007324219,319.22100830078125 431.8949890136719,316.3429870605469 C429.3330078125,313.4670104980469 425.53399658203125,312.0270080566406 420.5,312.0270080566406 C415.4639892578125,312.0270080566406 411.6669921875,313.4670104980469 409.1050109863281,316.3429870605469 C406.5429992675781,319.22100830078125 404.8340148925781,322.9289855957031 403.9800109863281,327.4679870605469 C403.125,332.0090026855469 402.6990051269531,337.6059875488281 402.6990051269531,344.25799560546875 C402.6990051269531,351.09100341796875 403.10400390625,356.822998046875 403.9129943847656,361.4519958496094 C404.72198486328125,366.0830078125 406.4280090332031,369.81298828125 409.0369873046875,372.6449890136719 C411.64300537109375,375.47698974609375 415.4639892578125,376.89300537109375 420.5,376.89300537109375 C425.53399658203125,376.89300537109375 429.35400390625,375.47698974609375 431.9630126953125,372.6449890136719 C434.5690002441406,369.81298828125 436.27801513671875,366.0830078125 437.0870056152344,361.4519958496094 C437.89599609375,356.822998046875 438.3009948730469,351.09100341796875 438.3009948730469,344.25799560546875 C438.3009948730469,337.6059875488281 437.87298583984375,332.0090026855469 437.0199890136719,327.4679870605469z"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <p className="text-xs font-medium text-blackPrimary">
                          No data available.
                        </p>
                        <p className="text-xs text-center text-blackPrimary">
                          Looks like this customers table is still waiting for
                          its first date—time to play matchmaker!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
