"use client";

import { strapi } from "../lib/strapi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogoutBtn() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    async function getUser() {
      const user = await strapi.fetchUser();
      setUser(user);
    }
    getUser();
  }, []);

  if (!user) return null;
  return (
    <button
      onClick={() => {
        strapi.logout();
        router.refresh();
        router.push("/giris");
      }}
    >
      Çıkış Yap
    </button>
  );
}
