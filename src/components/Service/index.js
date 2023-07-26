


const Service = {
    getData: (event,from,to) => {
        console.log(event)
        return new Promise((resolve,reject) => {
            resolve({
                count:event.length,
                data:event.slice(from,to)
            })
        });
    }
}
export default Service