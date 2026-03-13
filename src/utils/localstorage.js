const getStoreBook = (key) =>{
const getBookId = localStorage.getItem(key)

if(getBookId){
    const storeBookData = JSON.parse(getBookId)
    return storeBookData
}
else{
    return [];
}
}

const addBookId = (id,key) =>{
    const storeBook = getStoreBook(key).map(Number);;

    if(storeBook.includes(id)){
        alert("data is already included")
    }
    else{
        storeBook.push(id)
        const addBookData = JSON.stringify(storeBook)
        localStorage.setItem(key,addBookData)
    }
}

const removeBookId = (id,key) => {
  const RemoveStoreBooks = getStoreBook(key).map(Number);; // get current stored books
  const updatedBooks = RemoveStoreBooks.filter((bookId) => bookId !== id); // remove the id
  localStorage.setItem(key, JSON.stringify(updatedBooks)); // save updated array
};

export{addBookId,getStoreBook,removeBookId}