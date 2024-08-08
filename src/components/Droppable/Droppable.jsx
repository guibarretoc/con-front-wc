import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    // TODO: channge color later ? #6aa84f ?
    border: isOver ? '1px solid #07c' : undefined,
    boxShadow:  isOver ? '0 0 10px #07c' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}
      className='border border-[#BAB8B8] rounded-lg bg-[#F9F6EE] flex-shrink-0 w-full sm:w-2/4 lg:w-1/4 py-2 pl-3'
    >
      {props.children}
    </div>
  );
}