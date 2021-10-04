import React, { useEffect, useState } from 'react';
import './MiddlePart2.css'

const MiddlePart2 = () => {
    const [data, setData] = useState([]);

    useEffect( () =>{
        fetch('./output.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <h1 className="course-title">Course Features</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container" >
            {
                data.map(dt =>
                    <div key={dt.id}>
                      <div className="col">
                        <div className="card h-100">
                             <img className="card-img-top " src={dt.image}alt="" />
                             <div className="card-body">
                             <h5 className="card-title">{dt.name}</h5>
                             <p className="card-text">{dt.descripition}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    )
            }
        </div>
        </div>
        
    );
};

export default MiddlePart2;