import express, { json } from "express";
import { router } from './routes';

const server = express();
server.use(express.json());
server.use(router);

server.listen(5000, () => {
  console.log("Server runing in http://localhost:" + 5000);
});

// create user     |
// edit user      |    => restfull
// select user   |     =>  CRUD
// delete user  |

// get - read
// put/patch - save
// update - edit
// delete - remove
