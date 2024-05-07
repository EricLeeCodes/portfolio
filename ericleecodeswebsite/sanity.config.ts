import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "kv2q6jn7",
  dataset: "production",
  title: "EricLeeCodes Site",
  apiVersion: "2024-05-06",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default config;
