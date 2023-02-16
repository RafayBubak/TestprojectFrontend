import React from 'react';

function Categories({categories}) {
  // const categories = [
  //   {
  //     name:props.text,
  //   },
  //   {
  //     name:"PPE",
  //   },
  //   {
  //     name:"PPE",
  //   },
  //   {
  //     name:"PPE",
  //   }
  // ];


  return (
    <div className='Catgorytest'>
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
