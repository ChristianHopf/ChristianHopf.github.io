import '../App.css';
import axios from 'axios';
import React from 'react';

function RatingColor(rating) {
    var r = parseInt(rating);
    if (r < 3.33)
        return 'red';
    if (r < 6.66)
        return 'yellow';
    return 'green';
}

function Booklist() {
    // get JSON of all books, parse and map into book components
    const url = 'https://nk4vw3hosi.execute-api.us-east-1.amazonaws.com/Prod/api/books';
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        axios.get(url)
            .then(function (response) {
                const booklist = response.data;
                setBooks(booklist);
            })
            .catch(function (error) {
                console.error(error)
            });
    }, []);

    const booksElements = books.map((book) =>
        <div className="book" key={book.Imagefile.S}>
            <img className="bookimg" src={require(`../images/${book.Imagefile.S}`)} alt={`Cover art for ${book.Title.S}`}></img>
            <div className="bookinfo">
                <div className="bookheader">
                    <div className="bookheader-info">
                        <h3>{book.Title.S}</h3>
                        <p>{book.Author.S}, {book.Genre.S}</p>
                    </div>
                    <div>
                        <span className={`bookrating-${RatingColor(book.Rating.N)}`}>{book.Rating.N}/10</span>
                    </div>
                </div>
                <div className="bookparagraph">
                    {book.Review.S}
                </div>
            </div>
        </div>
    );

    return (
        <div className="bookreviewsbody">
            {booksElements}
        </div>
    );
}

export default Booklist;