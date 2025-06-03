"use client";

import { strapi } from "../../lib/strapi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    try {
      await strapi.login(formData);
      router.refresh();
      router.push("/");
    } catch (e) {
      console.log(e);
      setError(e.error.message);
    }
  };
  return (
    <div>
      {error && <small className="text-red-500">{error}</small>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="identifier"
          placeholder="E-posta veya kullanıcı adı"
        />{" "}
        <br />
        <input type="password" name="password" placeholder="Şifre" /> <br />
        <button className="border px-3 py-2 rounded-md">Giriş Yap</button>
      </form>
    </div>
  );
}
