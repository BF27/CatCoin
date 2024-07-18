import InputField from "../components/Form/InputField";
import Link from "next/link";
import { login, signup } from "./actions";
import Image from "next/image";

const cat = "/images/login_cat.svg"
const smile = "/icons/smile.svg";
const lock = "/icons/lock.svg";

export default async function Login() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center gap-6 w-1/2">
        <h2 className="capitalize font-bold text-mainColor">login</h2>
        <div>
          <h3 className="font-bold lowercase">
            hey, enter your details to log in!
          </h3>
          <p>
            <Link href="/signup" className="text-mainColor font-semibold">
              Sign up
            </Link>
            , if you don&apos;t have an account!
          </p>
        </div>
        <form className="w-full flex flex-col items-center gap-6">
          <InputField
            id="loginEmail"
            type="email"
            placeholder="email"
            className="rounded-2xl p-3 w-full"
            icon={smile}
          />
          <InputField
            id="loginPw"
            type="password"
            placeholder="password"
            className="rounded-2xl p-3 w-full"
            icon={lock}
          />
          <button
            formAction={login}
            className="bg-mainColor rounded-2xl py-6 text-white font-bold text-xl w-full"
          >
            Sign in{" "}
          </button>
          <p>
            <Link
              href="/forgot_password"
              className="text-mainColor font-semibold"
            >
              Click here
            </Link>{" "}
            if you forgot your password!
          </p>
        </form>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <Image src={cat} alt="cat" width={348} height={305} />
      </div>
    </div>
  );
}
