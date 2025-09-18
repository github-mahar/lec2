import { TextEncoder, TextDecoder } from "util";
import "whatwg-fetch";



afterEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

afterAll(() => {
  jest.resetModules();
});

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}