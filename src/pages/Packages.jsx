import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import './../styles/packages.css';

const Packages = () => {


  const [packages, setPackages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/mocks/packages.json');
      const data = await response.json();
      setPackages(data);
    }
    fetchData();
  }, []);


  return (
    <section className='packages' id='packages'>
      <div className="container">

        <div className="main-txt">
          <h1><span>P</span>ackages</h1>
        </div>

        {packages ?
          <div className="row" style={{ marginTop: '30px' }}>

            {packages.map((el) => {
              return <div className='col-md-4 py-3 py-md-0 mb-4' key={el.id}>

                <div className="card">
                  <img src={el.image} alt="UK" />
                  <div className="card-body">
                    <h3>{el.country}</h3>
                    <p>{el.description}</p>

                    <div className="star">

{/* Отрисовка количества звезд, в зависимости от их кол-ва в el.stars (т.к обычный цикл использовать в данном случае невозможно) */}

{/* В JavaScript, Array(n) создает новый массив с длиной n. Оператор расширения (...) используется для 
преобразования итерируемого объекта в массив.
Когда вы используете ...Array(n), вы создаете новый массив с n элементами, все из которых являются undefined. 
Затем вы можете использовать метод map для преобразования каждого из этих undefined элементов во что-то другое.
Например, [...Array(5)].map((_, i) => i) создаст массив [0, 1, 2, 3, 4]. Здесь _ - это текущий элемент массива 
(который будет undefined), а i - это индекс текущего элемента */}

                      {[...Array(el.stars)].map((_, index) => (
                        <i className='fa-solid fa-star checked' key={index}></i>
                      ))}
                      {[...Array(5 - el.stars)].map((_, index) => (
                        <i className='fa-solid fa-star' key={index + el.stars}></i>
                      ))}

                      <h6>Price: <strong>{el.price}</strong></h6>
                      <Link to={`book`} smooth={true} duration={100}>Book now</Link>
                    </div>

                  </div>
                </div>

              </div>
            })}

          </div> : null
        }


      </div>
    </section>
  )
}

export default Packages;