import AsyncImport from "../AsyncImport";
import { lazy } from "react";

export default AsyncImport(lazy(() => import("./Footer")));
