const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lead_generation'
})

app.get("/getalluser", (req, res) => {
    const sql = "SELECT * FROM user_master ";
    db.query(sql, (err, data) => {
        if (err){ 
             res.json("Fail to fetch");
        }
         res.send(data);
        
    })
})

app.get("/getuserdatasingle", (req, res) => {
    const sql = "SELECT * FROM user_master where token_id=?";
    db.query(sql, [ req.session.token_id], (err, data) => {
        if (data.length > 0) {
            return res.json({ 
                Fname: data[0].fname
              
             });
        } else {
            return res.json({ Login: false });
        }
        
    })
})

app.get('/session_get', (req, res) => {

    if (req.session.token_id) {

        return res.json({
            valid: true,
            token_id: req.session.token_id
        })
    } else {
        return res.json({
            valid: false
        })
    }
})

app.post('/login_auth', (req, res) => {
    const sql = "SELECT * FROM login WHERE username=? AND pass=?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Login Fail");
        if (data.length > 0) {
            req.session.token_id = data[0].token_id;
            console.log("from niru" + req.session.token_id);
            return res.json({ Login: true });
        } else {
            return res.json({ Login: false });
        }

    })
})

app.post('/getProfileData', (req, res) => {
    const sql = "SELECT * FROM user_master WHERE token_id=?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Login Fail");
        if (data.length > 0) {
            req.session.token_id = data[0].token_id;
            console.log("from niru" + req.session.token_id);
            return res.json({ Login: true });
        } else {
            return res.json({ Login: false });
        }

    })
})


app.post('/useradd',(req, res) => {
    const sql ="INSERT INTO user_master(`fname`, `mname`, `lname`, `mobile_no`, `email`, `address`, `country`, `state`, `city`, `pincode`, `dob`, `pancard`) VALUES (?)";
    const values=[
        req.body.fname,
        req.body.mname,
        req.body.lname,
        req.body.mobile_no,
        req.body.email,
        req.body.address,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.dob,        
        req.body.pancard
    ]
    db.query(sql, [values],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.get("/getsingleuser/:id", (req, res) => {
    const sql = "SELECT * FROM user_master where id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
        
    })
})

app.post('/useredit/:id',(req, res) => {
    const sql ="update user_master set `fname`=?, `mname`=?, `lname`=?, `mobile_no`=?, `email`=?, `address`=?, `country`=?, `state`=?, `city`=?, `pincode`=?, `dob`=?, `pancard`=? where id=?";
    const values=[
        req.body.fname,
        req.body.mname,
        req.body.lname,
        req.body.mobile_no,
        req.body.email,
        req.body.address,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.dob,        
        req.body.pancard
    ]
    const id= req.params.id;
    db.query(sql, [...values,id],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.post('/userdelete/:id',(req, res) => {
    const sql ="delete from user_master where id=?";
   
    const id= req.params.id;
    db.query(sql, [id],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})



app.get("/getallfranchisee", (req, res) => {
    const sql = "SELECT * FROM franchisee_master ";
    db.query(sql, (err, data) => {
        if (err){ 
             res.json("Fail to fetch");
        }
         res.send(data);
        
    })
})


app.post('/franchiseeadd',(req, res) => {
    const sql ="INSERT INTO franchisee_master(`fname`, `mobile_no`, `email`, `address`, `country`, `state`, `city`, `pincode`, `ofname`, `omname`, `olname`, `omobile_no`, `oemail`, `oaddress`, `ocountry`, `ostate`, `ocity`, `opincode`, `gst_number`, `pancard`) VALUES (?)";
    const values=[
        req.body.fname,
        req.body.mobile_no,
        req.body.email,
        req.body.address,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.ofname,
        req.body.omname,
        req.body.olname,
        req.body.omobile_no,
        req.body.oemail,
        req.body.oaddress,
        req.body.ocountry,
        req.body.ostate,
        req.body.ocity,
        req.body.opincode,
        req.body.gst_number,        
        req.body.pancard
    ]
    db.query(sql, [values],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.get("/getsinglefranchisee/:id", (req, res) => {
    const sql = "SELECT * FROM franchisee_master where id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
        
    })
})

app.post('/franchiseeedit/:id',(req, res) => {
    const sql ="update franchisee_master set `fname`=?, `mobile_no`=?, `email`=?, `address`=?, `country`=?, `state`=?, `city`=?, `pincode`=?, `ofname`=?, `omname`=?, `olname`=?, `omobile_no`=?, `oemail`=?, `oaddress`=?, `ocountry`=?, `ostate`=?, `ocity`=?, `opincode`=?, `gst_number`=?, `pancard`=? where id=?";
    const values=[
        req.body.fname,
        req.body.mobile_no,
        req.body.email,
        req.body.address,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.ofname,
        req.body.omname,
        req.body.olname,
        req.body.omobile_no,
        req.body.oemail,
        req.body.oaddress,
        req.body.ocountry,
        req.body.ostate,
        req.body.ocity,
        req.body.opincode,
        req.body.gst_number,        
        req.body.pancard
    ]
    const id= req.params.id;
    db.query(sql, [...values,id],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.post('/franchiseedelete/:id',(req, res) => {
    const sql ="delete from franchisee_master where id=?";
   
    const id= req.params.id;
    db.query(sql, [id],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

// Category API

app.get("/getallCategory", (req, res) => {
    const sql = "SELECT * FROM category_master ";
    db.query(sql, (err, data) => {
      if (err) {
        res.json("Fail to fetch");
      }
      res.send(data);
    });
  });
  
  app.post("/categoryadd", (req, res) => {
    const sql = "INSERT INTO category_master(`name`, `description`) VALUES (?)";
    const values = [req.body.name, req.body.description];
    db.query(sql, [values], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  app.get("/getsinglecategory/:id", (req, res) => {
    const sql = "SELECT * FROM category_master where id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });
  
  app.post("/categoryedit/:id", (req, res) => {
    const sql =
      "update category_master set `name`=?, `description`=? WHERE `id`=?";
    const values = [req.body.name, req.body.description];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  app.post("/categorydelete/:id", (req, res) => {
    const sql = "delete from category_master where id=?";
  
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  // Sub Category API
  
  app.get("/getallsubcategory", (req, res) => {
    const sql = `
      SELECT sub_category.*, category_master.name AS category_name
      FROM sub_category
      JOIN category_master ON sub_category.category_id = category_master.id
    `;
    db.query(sql, (err, data) => {
      if (err) {
        return res.json("Fail to fetch");
      }
      res.send(data);
    });
  });
  
  app.post("/subcategoryadd", (req, res) => {
    const sql =
      "INSERT INTO sub_category(`name`, `description`, `category_id`) VALUES (?)";
    const values = [req.body.name, req.body.description, req.body.category_id];
    db.query(sql, [values], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  app.get("/getsinglesubcategory/:id", (req, res) => {
    const sql = `
      SELECT sub_category.*, category_master.id AS category_id, category_master.name AS category_name
      FROM sub_category
      JOIN category_master ON sub_category.category_id = category_master.id
      WHERE sub_category.id = ?`;
  
    const id = req.params.id;
  
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data); // Ensure this is returning the correct data
    });
  });
  
  app.post("/subcategoryedit/:id", (req, res) => {
    const sql =
      "update sub_category set `name`=?, `description`=?,`category_id`=? WHERE `id`=?";
    const values = [req.body.name, req.body.description, req.body.category_id];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  app.post("/subcategorydelete/:id", (req, res) => {
    const sql = "delete from sub_category where id=?";
  
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  // Subscriptions API
  app.get("/getallSubscription", (req, res) => {
    const sql = "SELECT * FROM subscriptions ";
    db.query(sql, (err, data) => {
      if (err) {
        res.json("Fail to fetch");
      }
      res.send(data);
    });
  });
  
  // Subscription API
  
  app.post("/subscriptionadd", (req, res) => {
    const sql =
      "INSERT INTO subscriptions(`package_name`, `price`, `duration`, `features`) VALUES (?)";
    const values = [
      req.body.package_name,
      req.body.price,
      req.body.duration,
      req.body.features,
    ];
    db.query(sql, [values], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  app.get("/getsinglesubscription/:id", (req, res) => {
    const sql = "SELECT * FROM subscriptions where id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });
  
  app.post("/subscriptionedit/:id", (req, res) => {
    const sql =
      "update subscriptions set `package_name`=?, `price`=?, `duration`=?, `features`=? WHERE `id`=?";
    const values = [
      req.body.package_name,
      req.body.price,
      req.body.duration,
      req.body.features,
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  
  app.post("/subscriptiondelete/:id", (req, res) => {
    const sql = "delete from subscriptions where id=?";
  
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json("ssss" + data);
    });
  });
  

app.get('/', (req, res) => {
    return res.json("From Backend");
})



app.listen(8081, () => {
    console.log("Listening");
})