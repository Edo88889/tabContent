import React from 'react';

function Buttons({data, name, refreshChange}) {
    return <>
        <button className={`${name === 'users' ? 'active' : ''} btn`} onClick={() => refreshChange('users')
        }>Name
        </button>
        <button className={`${name === 'posts' ? 'active' : ''} btn`} onClick={() => refreshChange('posts')
        }>Title
        </button>
    </>
}

export default Buttons;