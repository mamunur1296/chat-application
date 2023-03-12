const multer = require("multer");

const uploader = (subfolpath, allowedFile, filesize, err) => {
  //file upload folder
  const UploadFile = `${__dirname}/../public/uploade/${subfolpath}`;
  console.log(UploadFile);
  //define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UploadFile);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fleName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fleName + fileExt);
    },
  });
  //Preapre the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: filesize,
    },
    fileFilter: (req, file, cb) => {
      if (allowedFile.includes(file.mimetype)) {
        cb(null, true);
      } else cb(createError(err));
    },
  });
  return upload;
};

module.exports = uploader;
