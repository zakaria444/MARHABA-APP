const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/repas_image')
    },
    filename: function (req, file, cb) {
        
        cb(null, file.originalname)
    }
})


const upload = multer({
    storage: storage,

})


module.exports = upload