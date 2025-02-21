import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="p-2 flex items-center justify-between max-w-7xl mx-auto">
      <div>
        <Link to="/">
          <img
            src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6366449a7130f745d745afab_tolt-logo-v2.svg"
            alt="Tolt Logo"
            width={100}
          />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="[&.active]:text-pink-300 font-bold ">
          Home
        </Link>
        <Link to="/" className="[&.active]:font-bold">
          Platform
        </Link>
        <Link to="/" className="[&.active]:font-bold">
          Pricing
        </Link>
        <Link to="/" className="[&.active]:font-bold">
          Resources
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login" className="[&.active]:font-bold">
          Log in
        </Link>
        <Link
          to="/"
          className="[&.active]:font-bold font-white bg-gray-800 px-3 py-4 rounded-full text-white"
        >
          Start your 14 days free trial!
        </Link>
      </div>
    </div>
  );
}
