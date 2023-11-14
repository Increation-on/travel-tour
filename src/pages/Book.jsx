import bookimage from './../images/book-img.png';

const Book = ({id}) => {
    console.log(id)
    return (
        <section className='book' id={id}>
            <div className="container">
                <div className="main-text">
                    <h1><span>B</span>ook</h1>
                </div>

                <div className="row">

                    <div className="col-md-6 py-3 py-md-0">
                        <div className="card">
                            <img src={bookimage} alt="book" />
                        </div>
                    </div>

                    <div className="col-md-6 py-3 py-md-0">
                        <form action="#">
                            <input type="text" className='form-control' placeholder='Where To' required /><br />
                            <input type="text" className='form-control' placeholder='How Many' required /><br />
                            <input type="date" className='form-control' placeholder='Arrivals' required /><br />
                            <input type="date" className='form-control' placeholder='Leaving' required /><br />
                            <textarea name="text" id="" rows="5" className='form-control' placeholder='Enter Your Name And Details'></textarea>
                            <input type="submit" value="Book Now" className='submit' required />
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Book;