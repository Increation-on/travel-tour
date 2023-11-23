import bookimage from './../images/book-img.png';
import './../styles/book.css';
import { useState } from 'react';

const Book = () => {

    const [valueWhereTo, setValueWhereTo] = useState('');
    const [valueHowMany, setValueHowMany] = useState('');
    const [valueArrivals, setValueArrivals] = useState('');
    const [valueLeaving, setValueLeaving] = useState('');
    const [valueDetails, setValueDetails] = useState('');



    const handleSubmit = (e) => {
        const data = {};

        const result = {
            ...data,
            valueWhereTo: valueWhereTo,
            valueHowMany: valueHowMany,
            valueArrivals: valueArrivals,
            valueLeaving: valueLeaving,
            valueDetails: valueDetails,
        }
        if (!result.valueWhereTo || !result.valueHowMany || !result.valueArrivals || !result.valueLeaving || !result.valueDetails) {
            console.log("error");
        } else {
            // console.log(result);
            localStorage.setItem('result', JSON.stringify(result));
            alert('item in LS');
            console.log(localStorage.getItem('result'))
        }

        e.preventDefault();
    }

    // const handleRemoveLS = (e) => {
    //     // удаление конкретного элемента
    //     localStorage.removeItem("result");
    //     // полная очистка LS
    //     localStorage.clear();

    //     e.preventDefault();
    // }


    const handleSubmitForm = (event) => {
        event.preventDefault();
        const data = {};
        const result = {
            ...data,
            valueWhereTo: valueWhereTo,
            valueHowMany: valueHowMany,
            valueArrivals: valueArrivals,
            valueLeaving: valueLeaving,
            valueDetails: valueDetails,
        }
        fetch('https://my-remote-server.com/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(result)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        // onSumbit = {handleSubmitForm} в тег form
    }

    return (
        <section className='book' id='book'>
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
                        <form>
                            <input onChange={(e) => { setValueWhereTo(e.target.value) }} value={valueWhereTo || ""} type="text" className='form-control' placeholder='Where To' required /><br />
                            <input onChange={(e) => { setValueHowMany(e.target.value) }} value={valueHowMany || ""} type="text" className='form-control' placeholder='How Many' required /><br />
                            <input onChange={(e) => { setValueArrivals(e.target.value) }} value={valueArrivals || ""} type="date" className='form-control' placeholder='Arrivals' required /><br />
                            <input onChange={(e) => { setValueLeaving(e.target.value) }} value={valueLeaving || ""} type="date" className='form-control' placeholder='Leaving' required /><br />
                            <textarea onChange={(e) => { setValueDetails(e.target.value) }} value={valueDetails || ""} name="text" id="" rows="5" className='form-control' placeholder='Enter Your Name And Details'></textarea>
                            <input onClick={handleSubmit} type="submit" value="Book Now" className='submit' />
                            {/* <button onClick={handleRemoveLS}>remove</button> */}
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Book;