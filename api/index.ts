import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import login  from "./controller/login";
import announcement from "./controller/announcement"
import announcements from "./controller/announcements"
import member from "./controller/member"
import activity from "./controller/activity"
import refresh from "./controller/refreshtoken"
import * as fs from 'node:fs';
const app = express();
const folderpath = ["./pictures/activity","./pictures/announcement","./pictures/member"]

app.use('/pictures',express.static('pictures'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const port  = process.env.port || 8080 ;
// const database = MongoClient.connect(database_link)


app.get("/", (req : any, res : any) => {
    console.log()
  res.send("Hello World!");
});

app.use("/login",login)
app.use("/announcement",announcement)
app.use("announcements",announcements)
app.use("/member",member)
app.use("/activity",activity)
app.use("/refresh",refresh)

for (const i of folderpath){
  console.log(i);
  if (!fs.existsSync(i)) {
    fs.mkdirSync(i, { recursive: true });
    console.log('Folder created successfully');
  } else {
    console.log('Folder already exists');
  }
}

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});