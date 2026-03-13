const getStoreBook = () =>{
const getBookId = localStorage.getItem('ReadBook')

if(getBookId){
    const storeBookData = JSON.parse(getBookId)
    return storeBookData
}
else{
    return [];
}
}

const addBookId = id =>{
    const storeBook = getStoreBook();

    if(storeBook.includes(id)){
        alert("data is already included")
    }
    else{
        storeBook.push(id)
        const addBookData = JSON.stringify(storeBook)
        localStorage.setItem('ReadBook',addBookData)
    }
}

export{addBookId,getStoreBook}