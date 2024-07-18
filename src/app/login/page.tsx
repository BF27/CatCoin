import InputField from "../components/Form/InputField";
import Button from "../components/Button";
import Link from "next/link";
import { login, signup } from "./actions";

export default async function Login() {
  return (
    <form>
      <InputField
        id="loginEmail"
        type="email"
        placeholder="pelda@pelda.hu"
        labelText="Adja meg Email címét"
      />
      <InputField
        id="loginPw"
        type="password"
        placeholder="jelszo"
        labelText="Adja meg a jelszavát"
      />
        <button formAction={login}>Bejelentkezés </button>
        <button formAction={signup}>Regisztráció </button>
    </form>
  );
}
