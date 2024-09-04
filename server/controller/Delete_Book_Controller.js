import My_Book_Schema from "../models/Persnal_Collection_Schema.js";

export const deletingBook = async (req, res) => {

    try {

        let deleteBook = await My_Book_Schema.findById(req.params.id); //  ------>  find note by id
        if (!deleteBook) { return res.status(404).json({ msg: "Book Not Found!" }) };  // ------>  if note not found send message

        if (deleteBook.userId.toString() !== req.user.id.toString()) {
            return res.status(404).json({ msg: "Not Allowed! 🤬" });
        }


        deleteBook = await My_Book_Schema.findByIdAndDelete(req.params.id); // ------>  update note
        res.json("Deleted Successfully!😙")

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error! Please Try Again Later!");//-----> throw error  if any  error occur 
    }
}
