import React from 'react';

function Categories(props) {
  const categories = [
    {
      name:props.text,
    },
    {
      name:"PPE",
    },
    {
      name:"PPE",
    },
    {
      name:"PPE",
    }
  ];


  return (
    <div>
      {/* <h2>Categories:</h2> */}
      {/* <p>{props.text}</p> */}
      <ul>
        {categories.map((category) => (
          <ul className='Catlist'>
            <li key={category.name}>{category.name}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
