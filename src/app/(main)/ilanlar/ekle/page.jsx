import { strapi } from "@/lib/strapi";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await strapi.fetchUser();
  if (!user) {
    return redirect("/giris");
  }
  console.log(user);

  return <div>İlan ekleme sayfası</div>;
}
