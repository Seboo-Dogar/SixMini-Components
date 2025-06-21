import React, { useState } from 'react'
import data from './data'

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);
  const [toggleSelection, setToggleSelection] = useState(false);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let copyMultiple = [...multiSelection];
    const index = copyMultiple.indexOf(id);

    if (index === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(index, 1);
    }

    setMultiSelection(copyMultiple);
  }

  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center min-h-screen px-4'>
      <div className='flex flex-col w-full max-w-2xl gap-6'>
        <button
          onClick={() => setToggleSelection(!toggleSelection)}
          className='bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 border border-sky-700 self-center'
        >
          {toggleSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>

        <div className='bg-white shadow-lg rounded-lg divide-y divide-gray-200'>
          {data && data.length > 0 ? (
            data.map((item) => {
              const isOpen = toggleSelection
                ? multiSelection.includes(item.id)
                : selected === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() =>
                    toggleSelection
                      ? handleMultiSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                  className={`cursor-pointer px-6 py-4 transition-colors duration-300 ${
                    isOpen ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      {item.question}
                    </h3>
                    <span className='text-2xl font-bold text-sky-600'>
                      {isOpen ? '-' : '+'}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className='text-gray-700'>{item.answer}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='p-6 text-center text-gray-600'>No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
