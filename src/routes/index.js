import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import autoresRoutes from "./autoresRoutes.js";
import editorasRoutes from "./editorasRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'API de Livros' })
  })

  app.use(
    express.json(),
    livrosRoutes,
    autoresRoutes,
    editorasRoutes
  )
}

export default routes;