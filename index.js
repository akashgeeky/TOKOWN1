const express = require("express");
const multer = require("multer");
const path = require("path");
const pdfParse = require("pdf-parse");
const sha256 = require("sha256");
const mysql2 = require("mysql2/promise");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const flash = require("connect-flash");
const app = express();
const { exec } = require("node:child_process");
// const sequelize = new Sequelize("postgres", "postgres", "020804", {
//   host: "10.59.201.188",
//   port: 5432,
//   dialect: "postgres",
// });

// run the `ls` command using exec
exec("solana-test-validator", (err, output) => {
  // once the command has completed, the callback function is called
  if (err) {
    // log and return if we encounter an error
    console.error("could not execute command: ", err);
    return;
  }
  // log the output received from the command
  console.log("Output: \n", output);
});
const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "TOKOWN@2023",
  database: "tokown",
};
const connection = mysql2.createPool(options);
const sessionStore = new MySQLStore({}, connection);
const sequelize = new Sequelize("tokown", "root", "TOKOWN@2023", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
// id: {
//   type: Sequelize.UUID,
//   primaryKey: true,
//   allowNull: true,
//   autoIncrement: true,
//   default: Sequelize.fn("uuid_generate_v4"),
// },
const user = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    username: { type: DataTypes.CHAR },
    password: DataTypes.CHAR,
    email: DataTypes.CHAR,
  },
  {
    tableName: "authorize",
  }
);
const hospital = sequelize.define("hospital", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,

    autoIncrement: true,
  },
  hospitalid: { type: DataTypes.CHAR },
  password: DataTypes.CHAR,
  email: DataTypes.CHAR,
});
const file = sequelize.define("file", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.CHAR },
  size: { type: DataTypes.CHAR },
  hash: { type: DataTypes.CHAR },
});
user.hasMany(file);
file.belongsTo(user);
sequelize.sync({ alter: true, force: true });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(session({ secret: "alk3835ln@@4&kn", resave: false, saveUninitialized: false, store: sessionStore }));
app.use(multer().single("file"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
app.use((req, res, next) => {
  // console.log(req.session.user);
  req.user = null;
  if (req.session.isLoggedIn) {
    user.findAll({ where: { email: req.session.user.email } }).then((user) => {
      if (user.length > 0) {
        req.user = user[0];
        return next();
      }
    });
    hospital.findAll({ where: { email: req.session.user.email } }).then((user) => {
      if (user.length > 0) {
        req.user = user[0];
        return next();
      }
    });
  } else {
    return next();
  }
});
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
});
app.get(
  "/upload-file",
  (req, res, next) => {
    if (req.session.isLoggedIn && req.session.type == "patient") {
      // console.log("////");
      // console.log(req.session.type);
      return next();
    } else {
      // console.log("////");
      res.redirect("/");
    }
  },
  (req, res, next) => {
    // let solana;
    // exec("solana airdrop 1", (err, output) => {
    //   // once the command has completed, the callback function is called
    //   if (err) {
    //     // log and return if we encounter an error
    //     console.error("could not execute command: ", err);
    //     return;
    //   }
    //   // log the output received from the command
    //   solana = output;
    //   solana = solana.slice(solana.indexOf("Signature")).split(" ")[1];
    //   console.log("//////////////////////////");
    //   console.log(solana);
    //   console.log("Output: \n", output);
    // });
    let solana = 0;
    res.render("uploadFile", { path: "upload-file", solana });
  }
);
app.get("/sign-up", (req, res, next) => {
  res.render("signup", { path: "sign-up", user: "patient" });
});
app.get("/sign-up/hospital", (req, res, next) => {
  res.render("signup", { path: "sign-up", user: "hospital" });
});
app.get("/sign-up/insurance", (req, res, next) => {
  res.render("signup", { path: "sign-up", user: "insurance" });
});
app.post("/sign-up", (req, res, next) => {
  // console.log(req.body.password);
  bcrypt.hash(req.body.password, 12).then((hash) => {
    // console.log(1);
    user.create({ username: req.body.username, email: req.body.email, password: hash });
    return res.redirect("/");
  });
});
app.post("/sign-up/hospital", (req, res, next) => {
  bcrypt.hash(req.body.password, 12).then((hash) => {
    // console.log(1);
    hospital.create({ hospitalid: req.body.username, email: req.body.email, password: hash });
    return res.redirect("/");
  });
});
app.post("/login", (req, res, next) => {
  // console.log(req.body.username);
  let istrue = false;
  user
    .findAll({ where: { email: req.body.username } })
    .then((usera) => {
      // console.log(usera);
      if (!usera[0]?.password) {
        // req.flash("error", "Invalid email or password");
        // return res.redirect("/");
        return;
      }
      return bcrypt.compare(req.body.password, usera[0].password).then((domatch) => {
        // console.log(domatch);
        istrue = domatch;
        if (domatch) {
          req.session.user = usera[0];
          req.session.isLoggedIn = true;
          req.session.type = "patient";
          return res.redirect("/");
        }
      });
    })
    .then(() => {
      // console.log(istrue);
      if (!istrue) {
        hospital.findAll({ where: { email: req.body.username } }).then((hospitals) => {
          if (!hospitals[0]?.password) {
            req.flash("error", "Invalid email or password");
            return res.redirect("/");
          }
          bcrypt.compare(req.body.password, hospitals[0]?.password).then((domatch) => {
            // console.log(domatch);
            if (domatch) {
              req.session.user = hospitals[0];
              req.session.isLoggedIn = true;
              req.session.type = "hospital";
              return res.redirect("/");
            }
            req.flash("error", "Invalid email or password");
            return res.redirect("/");
          });
        });
      }
    });
  // res.redirect("/");
});
app.post("/verify", (req, res, next) => {
  // console.log("aaaaaaa");
  if (req.file.mimetype === "application/pdf") {
    return pdfParse(req.file?.buffer)
      .then((data) => {
        let newdata = data?.text.split("\n").join("").replace(" ", "");
        const hash = sha256(newdata);
        const newres = { ...req.file };
        newres.buffer = null;
        newres.hash = hash;
        newres.verify = false;
        file.findAll({ where: { hash: newres.hash } }).then((fila) => {
          if (fila.length != 0) {
            newres.verify = true;
            // console.log(newres);
          }
          return res.json(newres);
        });
      })
      .catch((e) => {
        // console.log(e);
      });
  } else {
    res.status(404);
  }
});
app.post(
  "/upload-file",
  (req, res, next) => {
    if (req.session.isLoggedIn && req.session.type == "patient") {
      // console.log("////");
      // console.log(req.session.type);
      return next();
    } else {
      // console.log("////");
      res.redirect("/");
    }
  },
  (req, res, next) => {
    // console.log(req.file);
    if (req.file.mimetype === "application/pdf") {
      return pdfParse(req.file?.buffer)
        .then((data) => {
          let newdata = data?.text.split("\n").join("").replace(" ", "");
          // console.log(newdata);
          const hash = sha256(newdata);
          // console.log(hash);
          const newres = { ...req.file };
          newres.buffer = null;
          newres.hash = hash;
          file.findAll({ where: { hash: newres.hash } }).then((fila) => {
            if (fila.length == 0) {
              req.user.createFile({ name: newres.originalname, size: newres.size, hash: newres.hash });
              newres.verify = false;
            } else {
              newres.verify = true;
            }
          });
          let solana;
          return exec("solana airdrop 1", (err, output) => {
            // once the command has completed, the callback function is called
            if (err) {
              // log and return if we encounter an error
              console.error("could not execute command: ", err);
              return;
            }
            // log the output received from the command
            solana = output;
            solana = solana.slice(solana.indexOf("Signature")).split(" ")[1].split("\n")[0];
            console.log("//////////////////////////");
            console.log(solana);
            console.log("Output: \n", output);
            newres.solana=solana;
            res.status(200).json(newres);
          });
        })
        .catch((e) => {
          // console.log(e);
        });
    } else {
      res.status(404);
    }
  }
);
app.get("/log-out", (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});
app.get("/verify", (req, res, next) => {
  res.render("verify", { path: "verify" });
});
app.get("/home", (req, res, next) => {
  res.render("home-main", { path: "home", files: [], errormessage: req.flash("error") });
});
app.post("/get-patient", (req, res, next) => {
  user.findAll({ where: { id: req.body.patientid } }).then((patients) => {
    if (patients.length > 0) {
      req.session.patientid = req.body.patientid;
    } else {
      req.session.patientid = null;
      req.flash("error", "not a valid patient id");
    }
    res.redirect("/");
  });
});
app.get("/meetYourDoctor", (req, res, next) => {
  return res.render("meetyourdoctor", { path: "meetyourdoctor" });
});
app.get("/e-verify", (req, res, next) => {
  res.render("verify", { path: "e-verify" });
});
app.use("/", (req, res, next) => {
  // console.log(req.user);
  if (req.user) {
    if (req.session.type == "patient") {
      req.user.getFiles().then((files) => {
        // console.log("1");
        // console.log(files);
        res.render("home", { path: "home", files: files, errormessage: req.flash("error") });
      });
    } else if (req.session.type == "hospital") {
      if (req.session.patientid) {
        user.findAll({ where: { id: req?.session?.patientid } }).then((patients) => {
          patients[0].getFiles().then((files) => {
            res.render("home", { path: "hospital", files: files, errormessage: req.flash("error") });
          });
        });
      } else {
        res.render("home", { path: "hospital", files: [], errormessage: req.flash("error") });
      }
    }
  } else {
    res.render("home-main", { path: "home", files: [], errormessage: req.flash("error") });
  }
});
app.listen(3070);
