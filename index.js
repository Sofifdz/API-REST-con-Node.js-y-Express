//importar express

const express = require('express');

//creamos instancia de la app(nuestro server)

const app = express();

app.use(express.json()); //middleware para parsear JSON: app.use(express.json());

const PORT = 3000; //puerto donde escuchara el servidor



app.get('/saludo', (req, res) => {
    res.json(
        {
            mensaje: "Hola",
            autor: "Sofia",
            fecha: new Date()
        }
    );

});

app.get('/user', (req, res) => {
    res.json(
        {
            usuarios:usuarios
        }
    )
});

const usuarios = 
[
    {id: 1, nombre: "Juan", edad: 28},
    {id: 2, nombre: "Maria", edad: 34},
    {id: 3, nombre: "Pedro", edad: 45}
]

app.post('/user',(req,res)=>
{
    const cuerpo = req.body;

    const usuario= {id: usuarios.length+1, 
        nombre: cuerpo.nombre, 
        edad: cuerpo.edad
    }

    usuarios.push(usuario);

    res.json(
        {
            mensaje: "Usuario agregado exitosamente",
            nuevo_usuario: usuario,
            usuarios_actualizados: usuarios
        }
    );
});

//PUT /user/1 HTTP/1.1
app.put('/user/:id',(req,res)=>
{
    const id= parseInt(req.params.id);

    const cuerpo = req.body;

    const usuarioIndex = usuarios.findIndex(u => u.id === id);

    if(usuarioIndex === -1)
    {
        return res.status(404).json({mensaje: "Usuario no encontrado"});
    }

    usuarios[usuarioIndex].nombre = cuerpo.nombre || usuarios[usuarioIndex].nombre;

    usuarios[usuarioIndex].edad = cuerpo.edad || usuarios[usuarioIndex].edad;

    res.json(
        {
            mensaje: "Usuario actualizado corectamente",

            usuarios_actualizados: usuarios[usuarioIndex],

        }
    )
});


app.delete('/user/:id',(req,res)=>
{
    const id= parseInt(req.params.id);

    const usuarioIndex = usuarios.findIndex(u => u.id === id);

    if(usuarioIndex === -1)
    {
        return res.status(404).json({mensaje: "Usuario no encontrado"});
    }


    const usuarioEliminado = usuarios.splice(usuarioIndex, 1);

    res.json(
        {
            mensaje: "Usuario eliminado corectamente",

            usuario_eliminado: usuarioEliminado[0],

            usuarios_actualizados: usuarios

        }
    )
});


app.listen(PORT, () => {
    console.log("SERVIDOR CORRIENDO EXITOSAMENTE EN: http://localhost:" + PORT);
}
);