const user_logic = require("../app/user")
const express = require('express');
const router = express.Router();
const msg = require("../util/messages")

//login handle
router.get('/login', async (req, res) => {
    res.render('login');
});
router.get('/register', async (req, res) => {
    res.render('register')
});

router.get('/logout', async (req, res) => {
    delete req.session.user;
    delete req.session.apiHeaders;
    res.redirect("/users/login");
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    var errors = [];
    if (!username) {
        errors.push(msg("user", "nousername", "es"));
    }
    if (!password) {
        errors.push(msg("user", "nopassword", "es"));
    }
    if (errors.length > 0) {
        res.render('login', [errors]);
        return;
    }
    var result = await user_logic.login(req, res, username, password);
    req.session.data = result;
    res.render('login', [result]);
    return
    // if (res){
    //     req.session.user ={}
    //     res.render("index",{})
    // }
    // else{
    //     res.render(login,...)
    // }
});

//Register handle
router.post('/register', (req, res) => {
    const { name, user_name, email, password, password2 } = req.body;
    let errors = [];
    console.log(' Name ' + name + ' email :' + email + ' pass:' + password);
    if (!name || !email || !password || !password2 || !user_name) {
        errors.push({ msg: "Please fill in all fields" })
    }
    //check if match
    if (password !== password2) {
        errors.push({ msg: "passwords dont match" });
    }

    //check if user_name is more than 6 characters
    if (user_name.length < 6) {
        errors.push({ msg: 'Username must have at least 6 characters' })
    }

    //check if password is more than 6 characters
    if (password.length < 6) {
        errors.push({ msg: 'Password must have at least 6 characters' })
    }

    //check if password is more than 6 characters
    if (email.length < 6) {
        errors.push({ msg: 'Email must have at least 8 characters' })
    }

    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            user_name: user_name,
            email: email,
            password: password,
            password2: password2
        })
    } else {
        //validation passed
        User.findOne({ email: email }).exec((err, user) => {
            console.log(user);
            if (user) {
                errors.push({ msg: 'email already registered' });
                res.render('register', { errors, name, email, password, password2 })
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });

                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) throw err;
                            //save pass to hash
                            newUser.password = hash;
                            //save user
                            newUser.save()
                                .then((value) => {
                                    console.log(value)
                                    res.redirect('/users/login');
                                })
                                .catch(value => console.log(value));

                        }));
            }
        })
    }
})

module.exports = router; 