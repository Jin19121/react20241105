const a = "hello";
const b = 3.14;
const c = "world";
const d = 9.99;
const f = "vernon";

// export { a };
// export { b };

//named export
export { a, b, f };

//default export (unnamed) : 파일 내 하나만
export default c;
