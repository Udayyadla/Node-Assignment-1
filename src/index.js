const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name

  try {
    await fs.writeFile(fileName, fileContent);
    console.log("file created successfully");
  } catch (err) {
    console.log(err);
  }
};

myFileWriter("Uday.txt", "hello uday!!");

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
myFileReader("Uday.txt");

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  try {
    await fs.appendFile(fileName, fileContent);
    console.log("file content is updated");
  } catch (err) {
    console.log(err);
  }
};
myFileUpdater("Uday.txt", "How Are You?");

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    await fs.unlink(fileName);
    console.log("file deleted Succesfully");
  } catch (err) {
    console.log(err);
  }
};
myFileDeleter("Delete.txt")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
