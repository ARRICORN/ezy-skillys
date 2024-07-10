"use client";
import Image from "next/image";
import logout from "@/assets/log-out.png";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignOutBtn = () => {
  const { status } = useSession();
  const router = useRouter();

  // === sign out handler ===
  const signoutHandler = async () => {
    // check user authenticated or not
    if (status === "unauthenticated") {
      toast.success("You are not logged in");
      return;
    }

    if (status === "authenticated") {
      try {
        await signOut({ redirect: false }); // Ensure signOut does not redirect

        router.replace("/login");
        toast.success("Logout is successful");
      } catch (error) {
        toast.error("Failed to logout");
        console.error("Logout error:", error); // handle error if something wrong
      }
    }
  };

  return (
    <div
      className="flex items-center justify-start gap-x-3"
      onClick={() => signoutHandler()}
    >
      <Image src={logout} width={30} height={1} priority={true} alt="menu" />
      <span className="inline-block font-semibold text-[#737791]">
        Sign out
      </span>
    </div>
  );
};

export default SignOutBtn;
