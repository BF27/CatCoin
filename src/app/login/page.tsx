import InputField from "../components/Form/InputField";
import Button from "../components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <form>
      <InputField
        id="loginId"
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
      <Link href="/">
        <Button text="Bejelentkezés" />
      </Link>
    </form>
  );
}
