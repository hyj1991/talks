// crash.js
const article = {
  title: "Node.js",
  content: "Hello, Node.js"
};

setTimeout(() => {
  console.log(article.b.c);
}, 1000);