import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "kv2q6jn7",
    dataset: "production",
    apiVersion: "2024-05-06",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}
