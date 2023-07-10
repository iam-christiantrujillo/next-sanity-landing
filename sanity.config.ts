import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "f5piaqz8",
    dataset:"production",
    title: 'My Personal Website',
    apiVersion: "2023-07-03",
    basePath:"/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;