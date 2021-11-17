const asyncWrapper = (fn) => {
    return async(req, res, next) => {
        try {
            await fn(req, res, next)

        } catch (error) {
            next(error)
        }
    }
}
module.exports = asyncWrapper;

// here with next : we pass it to the next middleware