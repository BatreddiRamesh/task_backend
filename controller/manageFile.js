var manageFile = require("../model/manageFile");
const path = require("path");

const filePost = async (req, res) => {
  try {
 
    await new manageFile({
      createdById: req.body.createdById,
  createdByName:req.body.createdByName,
      fileDoc: {
        name: req.file?.originalname,
        path: req.file?.path
      },
      
      
 
  createdDate: req.body.createdDate}).save();
    res.send({ res: "Success" });
  } catch (error) {
    console.error("Error saving paper title:", error);
    res.status(500).send({ error: "Error saving paper title" });
  }
};

const fileGet = async (req, res, next) => {
  try {
    let view = await manageFile.find();
    res.send(view);
  } catch (error) {
    console.error("Error retrieving records:", error);
    res.status(500).send({ error: "Error retrieving records" });
  }
};

const fileDelete = async (req, res, next) => {
  try {
    const deleteRecord = await manageFile.deleteOne({ _id: req.params.id });
     
      res.status({ message: "Record deleted" });
    
  } catch (error) {
    console.error("Error deleting deleting record:", error);
    res.status(500).send({ error: "Error deleting record" });
  }
};

const fileDownload =  async (req, res) => {
  const id = req.params.id;
  let view = await manageFile.find({_id:id}, { fileDoc: 1 });

  console.log("prathamesh", view[0].fileDoc.path);
  console.log("prathamesh", view[0].fileDoc);
  // const basePath="D:\\prernafolderstructure\\PrernaAcademy-BackEnd"
  const basePath="E:\\task_backend"
  const filePath = path.join(basePath, view[0].fileDoc.path);
  res.download(filePath, "downloaded_file.pdf", (error) => {
    if (error) {
      console.error("Error in downloadPDF:", error);
      res.status(500).json({ error: "Failed to download PDF" });
    }
  });
};


module.exports = {filePost,fileGet,fileDelete,fileDownload};
