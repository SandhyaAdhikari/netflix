import express from "express";
const app = express();
// to make app understand json
app.use(express.json());

//routes
app.get(`/say-hello`, (req, res) => {
  return res.status(200).send("hello");
});

let movieList = [];
//add movie
app.post("/movie/add", (req, res) => {
  //extract newmovie from req.body
  const newMovie = req.body;
  //console.log(newMovie);

  movieList.push(newMovie);//!ooh lala dont forget to push

  //send response
  return res.status(200).send({ message: "movie added successfully" });
});

// get movies
app.get("/movie/get", (req, res) => {
  return res.status(200).send({ message: `success`, movie: movieList });
});

//delete movie
app.delete("movie/delete",(req,res)=>{
    return res.status(200).send({message:"deleting..."});
});

//network port and server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
