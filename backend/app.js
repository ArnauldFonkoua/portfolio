const express = require('express')
const app = express()
const port = 3000
// 👈 MODIFICATION: Added 'Product' to the imports
const { User, Hero, Favourite, Product, Contact } = require('./models'); 
const { hash, compare } = require('./node_modules/bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/register', async (req, res, next) => {
    try {
        let { email, password, fname, lname, dob, gender, age } = req.body;
        
        let user = await User.create({
            email, 
            password,
            fname,
            lname,
            dob,
            gender,
            age
        });
        
        res.status(201).json({
            id: user.id, 
            email: user.email,
            fname: user.fname,
            lname: user.lname
        });
    } catch (error) {
        next(error);
    }
});

app.post('/login', async (req, res, next) => {
    try {
        let {email, password} = req.body
        if(!email) throw {name : "Email is required"}
        if(!password) throw {name : "Password is required"}
        let user = await User.findOne({
            where : {
                email
            }
        })
        if(!user) throw {name : "Invalid email/password"}
        let valid = compare(password, user.password)
        if(!valid) throw {name : "Invalid email/password"}
        let access_token = jwt.sign({id : user.id}, "secret")
        res.status(200).json({access_token})
    } catch (error) {
        next(error)
    }
})

app.get('/heroes', authentication, async (req, res, next) => {
    try {
        let heroes = await Hero.findAll({
            attributes : {
                exclude : ["createdAt", "updatedAt"]
            }
        })
        res.status(200).json(heroes)
    } catch (error) {
        next(error)
    }
})
app.post('/contact', async (req, res, next) => {
    try {
        // 1. Extract required fields from the request body
        const { name, email, subject, message } = req.body;

        // 2. Perform basic immediate validation (Sequelize model handles deeper validation)
        if (!name || !email || !subject || !message) {
            // Throw a custom error for missing data
            const error = new Error('All contact form fields are required: name, email, subject, and message.');
            error.name = "MissingContactFields";
            throw error;
        }

        // 3. Create the new contact entry in the database
        const newContactMessage = await Contact.create({
            name,
            email,
            subject,
            message
        });

        // 4. Success response
        // Note: You can optionally send an email confirmation here (using nodemailer, etc.)
        res.status(201).json({ 
            message: 'Your message has been successfully received!',
            contactId: newContactMessage.id
        });

    } catch (error) {
        // 5. Error handling
        // Sequelize validation errors will be caught here and passed to the errorHandler middleware
        next(error);
    }
})
app.get('/favourites', authentication, async (req, res, next) => {
    try {
        let favs = await Favourite.findAll({
            where : {
                userId : req.user.id
            },
            attributes : {
                exclude : ["createdAt", "updatedAt"]
            },
            include : {
                model : Hero,
                attributes : {
                    exclude : ["createdAt", "updatedAt"]
                }
            }
        })
        res.status(200).json(favs)
    } catch (error) {
        next(error)
    }
})

app.post('/favourites/:heroId', authentication, async (req, res, next) => {
    try {
        let { heroId } = req.params
        let hero = await Hero.findByPk(heroId)
        if(!hero) throw {name : "Hero not found"}
        let fav = await Favourite.create({
            userId : req.user.id,
            heroId
        })
        res.status(201).json({
            id : fav.id,
            userId : fav.userId,
            heroId : fav.heroId,
            role : fav.role,
            power : fav.power
        })
    } catch (error) {
        next(error)
    }
})

app.get('/products', async (req, res, next) => {
    try {
        const products = await Product.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        next(error); 
    }
});


app.post('/cart', (req, res, next) => {
    const { productId, quantity } = req.body;
    // In a real app, this would check stock, find the product price, and insert a CartItem record.
    console.log(`Product ID ${productId} added to cart with quantity ${quantity}`);
    if (productId) {
        res.status(200).json({ 
            success: true, 
            message: 'Item added to cart successfully.',
            cartItem: { productId, quantity }
        });
    } else {
        res.status(400).json({ success: false, message: 'Invalid product ID.' });
    }
}); 

app.put('/favourites/:id', authentication, async (req, res, next) => {
    try {
        let { id } = req.params
        let { role, power } = req.body
        let fav = await Favourite.findByPk(id)
        if(!fav) throw {name : "Hero not found"}
        if(fav.userId !== req.user.id) throw {name : "Forbidden"}
        await fav.update({
            role, 
            power
        })
        res.status(200).json({message : "Hero has been updated"})
    } catch (error) {
        next(error)
    }
})

app.listen(port, () => {
    console.clear()
    console.log(`The app is running on port ${port}`)
})

app.use(errorHandler)

function errorHandler(err, req, res, next){
    let status = err.status || 500
    let message = err.message || "Internal server error"

    switch(err.name){
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400;
            message = err.errors[0].message
            break;
        case "Invalid Input":
        case "Email is required":
        case "Password is required":
            status = 400;
            message = err.name
            break;
        case "Invalid email/password":
            status = 401;
            message = err.name
            break
        case "Invalid token":
        case "JsonWebTokenError":
            status = 401;
            message = "Invalid token"
            break
        case "Forbidden" :
            status = 403;
            message = "You are not authorized"
            break;
        case "Data not found":
        case "Hero not found":
            status = 404;
            message = err.name
            break;
    }
    res.status(status).json({message})
}

async function authentication(req, res, next){
    try {
        if(!req.headers.authorization) throw {name : "Invalid token"}
        let [type, token] = req.headers.authorization.split(" ")
        if(type !== "Bearer") throw {name : "Invalid token"}
        let payload =  jwt.verify(token, "secret")
        if(!payload) throw {name : "Invalid token"}
        let user = await User.findByPk(payload.id)
        if(!user) throw {name : "Invalid token"}
        req.user = {
            id : user.id
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = app


/* npx sequelize-cli model:generate --name User --attributes email:string,password:string

npx sequelize-cli model:generate --name Hero --attributes name:string,type:string,imageUrl:string

npx sequelize-cli model:generate --name Favourite --attributes heroId:integer,userId:integer,role:string,power:integer

npx sequelize-cli seed:generate --name Insert-hero

*/
// 💡 Remember to create the Product model and migration:
// npx sequelize-cli model:generate --name Product --attributes name:string,description:text,price:decimal,category:string,material:string,stockQuantity:integer,imageUrl:string