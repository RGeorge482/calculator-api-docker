import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Home route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Addition
fastify.get("/sum", function (request, reply) {
  const a = parseInt(request.query["a"]);
  const b = parseInt(request.query["b"]);
  reply.send({ result: a + b });
});

// Multiplication
fastify.get("/mul", function (request, reply) {
  const a = parseInt(request.query["a"]);
  const b = parseInt(request.query["b"]);
  reply.send({ result: a * b });
});

// Substraction
fastify.get("/sub", function (request, reply) {
  const a = parseInt(request.query["a"]);
  const b = parseInt(request.query["b"]);
  reply.send({ result: a - b });
});

// Division
fastify.get("/div", function (request, reply) {
  const a = parseInt(request.query["a"]);
  const b = parseInt(request.query["b"]);
  reply.send({ result: a / b });
});

// Run the server
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
