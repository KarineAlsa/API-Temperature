const patientModel= require("../models/patientModel")

module.exports.temperatureService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const id = req.id
        const temperature = req.temperature
       patientModel.update({
               temperature: temperature },
           {
               where: { id: id } }
       ).then(patientUpdated=>{
           if(patientUpdated){
               resolve({
                   status:true,
                   msg:patientUpdated})
           }
           reject({
               status:false,
               msg:patientUpdated
           })
       }).catch(err=>{
           reject({
               status:false,
               msg:err
           })

       })


        })
}

