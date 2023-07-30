


const Service = {
    getData: (event,from,to) => {
        return new Promise((resolve,reject) => {
            resolve({
                count:event.length,
                data:event.slice(from,to)
            })
        });
    }
}
export default Service