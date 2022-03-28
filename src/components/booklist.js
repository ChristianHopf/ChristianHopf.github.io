import '../App.css';
import axios from 'axios';
import React from 'react';

function RatingColor(rating){
    var r = parseInt(rating);
    if(r < 3.33)
        return 'red';
    if(r < 6.66)
        return 'yellow';
    return 'green';
}

function Booklist(){
    // get JSON of all books, parse and map into book components
    const url = 'https://9or9d5fu9g.execute-api.us-east-1.amazonaws.com/Stage/api/books';
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        axios.get(url)
            .then(function (response){
                const booklist = JSON.parse(response.data.body);
                setBooks(booklist);
            })
            .catch(function (error){
                console.error(error.response);
            });
    }, []);

    const booksElements = books.map((book) =>  
        <div className="book">
            <img id="bookimg" src={require(`../images/${book.Imagefile.S}`)}></img>
            <div className="bookinfo">
                <div className="bookheader">
                    <h3>{book.Title.S}</h3>
                    <p>{book.Author.S}, {book.Genre.S}</p>
                </div>
                <div className="bookparagraph">
                    {book.Review.S}
                </div>
                <div className={`bookrating-${RatingColor(book.Rating.N)}`}>
                    Rating: {book.Rating.N}/10
                </div>
            </div>
        </div>
    );

    return(
        <div className="bookreviewsbody">
            {booksElements}
        </div>
    );
}

export default Booklist;