const ErrorHandler = (eror, req, res, next) => {
    res.status(500).send(
        {
            msg : eror.message
        }
    )
}

export default ErrorHandler




