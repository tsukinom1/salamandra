import AuthForm from "@/components/auth/AuthForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <div className="ml-[5%] md:ml-[12.5%]">
        <Link href={`/`} className="">
          <Image src={`/icons/logo-title.png`} alt="" width={300} height={150} />
        </Link>
      </div>
      <AuthForm />
    </div>
  )
}
