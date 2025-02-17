export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto flex items-center mt-20">
      <div className="flex-1 p-8">
        <h1 className="text-5xl font-bold">
          <strong className="text-white bg-pink-400 rounded-md">
            Affiliate Marketing
          </strong>{" "}
          software for Saas Startups
        </h1>
        <p className="text-gray-700 text-lg">
          An all-in-one solution to launch your own affiliate program. Tolt
          helps SaaS startups build and run their affiliate and referral
          programs. Works with Stripe, Paddle, and Chargebee.
        </p>
        <button className="rounded-full px-4 py-5 text-white bg-gray-800 font-bold mt-4">
          Launch your program!
        </button>
      </div>
      <video
        className="max-w-[600px]"
        autoPlay={false}
        playsInline={true}
        preload="metadata"
      >
        <source
          src="https://d2bl6w3l0fiq0e.cloudfront.net/tolt+affiliate+simple+dashboard.mp4#t=0.1"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
