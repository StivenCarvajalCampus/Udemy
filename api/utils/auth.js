export function isAuthorized(req, res, next) {
    if (req.userCollection) {
        next();
    } else {
        res.redirect("/");

    }
}

export function isNotAuthorized(req, res, next)
{ 
    if (req.userCollection) {
        console.log(req.userCollection);
        res.redirect("/dashboard");
    } else {
        next();
    }
}

