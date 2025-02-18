import { useState } from "react";

export default function LoginForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <div
      className="flex flex-col items-center w-full pt-20"
      style={{ opacity: 1, willChange: "auto" }}
    >
      <div className="bg-[#E3F9ED] rounded-md items-center justify-center flex h-6 gap-1 px-2 relative top-[-1.5rem]">
        <p className="text-sm text-gray-600 italic">
          Tolt 2.0 has soft-launched – packed with new features to elevate your
          experience!
        </p>
      </div>
      <img
        src="https://files.tolt.io/logo/tolt-main-dark.svg"
        alt="Tolt's Logo"
        className="w-40 lg:w-40 py-1 mr-2"
      />
      <p className="text-center mb-2 text-gray-400 pt-4">
        Start your free trial! No credit card required.
      </p>
      <form className="flex flex-col items-center w-full max-w-[25rem]">
        <div className="flex flex-col items-start w-full mb-4">
          <p className="text-base text-blackPrimary py-2">Your first name</p>
          <input
            className="flex h-9 items-center rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Michael"
            autoComplete="given-name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="flex flex-col items-start w-full mb-4">
          <p className="text-base text-blackPrimary py-2">Your last name</p>
          <input
            className="flex h-9 items-center rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Scott"
            autoComplete="family-name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <p className="text-base text-blackPrimary py-2">
            Your business email address
          </p>
          <input
            className="flex h-9 items-center rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="name@company.com"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p className="text-redPrimary text-sm mt-2"></p>
        </div>
        <div id="clerk-captcha"></div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-input shadow-sm hover:text-primary px-4 py-2 w-full bg-greenPrimary h-10 hover:bg-greenPrimary hover:opacity-70 my-4"
          type="submit"
        >
          Create your account
        </button>
      </form>
      <div
        className="mt-4 text-center space-y-6"
        style={{ opacity: 1, willChange: "auto" }}
      >
        <div className="flex justify-center items-center text-gray-400 text-sm">
          <p>Already have a Tolt account?&nbsp;</p>
          <a
            className="underline cursor-pointer text-[#052D2B]"
            href="/sign-in"
          >
            Sign in!
          </a>
        </div>
        <div className="flex justify-center items-center text-gray-400 text-sm">
          <p>By signing up, you agree to Tolt's&nbsp;</p>
          <a
            href="https://tolt.io/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer text-[#052D2B]"
          >
            Terms of Service
          </a>
          <p>&nbsp;and&nbsp;</p>
          <a
            href="https://tolt.io/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer text-[#052D2B]"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
