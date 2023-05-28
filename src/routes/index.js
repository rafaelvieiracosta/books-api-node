import express from "express";
import livrosRoutes from "./livrosRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'API de Livros' })
  })

  app.use(
    express.json(),
    livrosRoutes
  )
}

export default routes;