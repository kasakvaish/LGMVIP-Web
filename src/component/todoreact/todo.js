import React, { useState } from 'react';
import './style.css';

const Todo = () => {
    const [inputdata,setInputDaga] = useState("");
    const [items,setItems] = useState([]);

    const additem = () => {
        if(!inputdata){
            alert("plz fill the data");
        }else{
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name:inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputDaga("");
        }
    };
      // how to delete items section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove all the elements
   const removeAll = () =>{
       setItems([]);
   };
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>My To Do List</figcaption>
                </figure>

                
                <div className="addItems">
                    <input
                        type="text"
                        placeholder="✍ Title...."
                        className="form-control"
                        value={inputdata}
                        onChange={(eventData=>
                            setInputDaga(eventData.target.value)
                        )}
                    />
                    <i className="fa fa-plus add-btn" onClick={additem}></i>

                </div>

                <div className="showItems">
                   {items.map((curElem)=>{
                        return(
                            <div className='eachItem' key={curElem.id}>
                        <h3 className='todo-btn'>{curElem.name}</h3>
                        <div className='todo-btn'>
                            <i className="far fa-edit add-btn"></i>
                            <i className='far fa-trash-alt add-btn' 
                            onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                    </div>
                        );
                   })}
                </div>

                <div className="showItems">
                        <div className="showItems">
                            <button
                                className="btn effect04"
                                data-sm-link-text="Remove All"
                                onClick={removeAll}>
                                <span> CHECK LIST</span>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Todo;
