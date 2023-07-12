import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Run the server
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
