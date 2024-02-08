function curriedAdd(total) {
    let sum = 0;

    const addVals = (total) => {
        if (total) {
            sum += total
            return addVals
        }
        else return sum;
        
    }
    return addVals(total)
}

module.exports = { curriedAdd };
