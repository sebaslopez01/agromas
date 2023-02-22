import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { FullUser } from "@/lib/types";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

const Modal = dynamic(() => import("flowbite-react").then((mod) => mod.Modal), {
  ssr: false,
});

const ModalHeader = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Header),
  { ssr: false }
);

interface ModalNavBarMarketProps {
  user: FullUser;
}

export default function ModalNavbarMarket({ user }: ModalNavBarMarketProps) {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* Icon session */}
      <div
        className="flex justify-start items-center space-x-2 cursor-pointer"
        onClick={() => {
          if (!user) {
            setShowLogin(!showLogin);
            return;
          }

          user.role === "SELLER"
            ? router.push("/profile/seller")
            : router.push("/profile/buyer");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-circle cursor-pointer w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] stroke-white lg:stroke-white stroke-[1.5] lg:stroke-[1.3]"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
        </svg>
        <div className="text-2xl text-white font-medium">
          {user ? "Ir al Dashboard" : "Iniciar sesión"}
        </div>
      </div>

      {/* Modal LogIn */}
      <Modal
        show={showLogin}
        size="md"
        popup={true}
        onClose={() => setShowLogin(!showLogin)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0"></ModalHeader>
        <LoginForm setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      </Modal>

      {/* Modal SignIn */}
      <Modal
        show={showSignup}
        size="md"
        popup={true}
        onClose={() => setShowSignup(!showSignup)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0 p-0"></ModalHeader>
        <RegisterForm
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />
      </Modal>
    </>
  );
}
