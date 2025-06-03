import { strapi } from "../lib/strapi";
import LogoutBtn from "../components/logout-btn";

export default async function Home() {
  const { data } = await strapi.find("ads", {
    populate: {
      category: {
        fields: ["name", "slug"],
      },
      details: true,
    },
  });
  console.log(data);
  console.log(data[0].details);

  return (
    <div>
      <h1>Sahibinden Clone</h1>
      <LogoutBtn />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} -{" "}
            {item.price.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
            {
              item.details.find((detail) =>
                detail.__component.includes(item.category.slug)
              )?.housingType
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
