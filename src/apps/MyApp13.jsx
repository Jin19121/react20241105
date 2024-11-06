const a = "hello";
const b = 3.14;
const c = "world";

// export { a };
// export { b };

//named export
export { a, b };

//default export (unnamed) : 파일 내 하나만
export default c;
