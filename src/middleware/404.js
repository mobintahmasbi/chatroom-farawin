const NotFoundHandler = (req, res, next) => {
    res.status(404).send("address not Found")
}

export default NotFoundHandler