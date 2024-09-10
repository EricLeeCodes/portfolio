import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "kv2q6jn7",
  dataset: "production",
  title: "EricLeeCodes Site",
  apiVersion: "2024-05-06",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
