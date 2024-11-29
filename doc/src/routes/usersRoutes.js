import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
import { addUser, updateUser, getUsers, getUser, deleteUser} from "../controllers/usersController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ dest: "./uploads" , storage})

// Rotas

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    app.get('/users', getUsers);
    app.get('/user/:id', getUser);
    app.post('/user', addUser);
    app.put('/user/:id', updateUser);
    app.delete('/user/:id', deleteUser);
    //app.get('/posts', listarPosts); 
    //app.get('/posts/:id', buscaPostPorID);
    //app.post('/posts', novoPost);
    //app.post('/upload', upload.single("imagem"), uploadImagem);
    //app.put('/upload/:id', atualizarPost)
}

export default routes;