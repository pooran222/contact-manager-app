let books=[
    {
        name:"تفسیر",
        number:"34",
        amount:"100,000",
        due:"1400/9/15"
    },
    {
        name:"آیین",
        number:"35",
        amount:"80,000",
        due:"1402/5/23"   
    },
    {
        name:"تکنیک",
        number:"36",
        amount:"67,800",
        due:"1389/4/18"   
    },
    {
        name:"انقلاب",
        number:"37",
        amount:"24,800",
        due:"1389/3/5"   
    },
];
export function getBooks(){
return books;
}
export const getBook=(number)=>{
return books.find(book => book.number === number);
}
export const deleteBook=number=>{
    books=books.filter(book=>
        book.number!== number
        )
}