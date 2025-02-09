import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { index } from "./index.js"

describe("index", () =>
  it("pass", () => assert.equal(index, "index")))
