import React from 'react';

function FilterApi({data, name}) {
    return (
        <>
            {data.map(item => {
                return <p key={item.id}>{name === 'posts' ? item.title : item.name}</p>
            })}
        </>
    );
}

export default FilterApi;