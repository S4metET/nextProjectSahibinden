import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const cookieList = await cookies();

  const token = cookieList.get("strapi_jwt");

  if (token?.value) {
    return redirect("/");
  }
  return <>{children}</>;
}
