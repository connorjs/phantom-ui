import "@testing-library/jest-dom/vitest";
import "@vanilla-extract/css/disableRuntimeStyles";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(cleanup);
