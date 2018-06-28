import React from 'react';

export const SearchBox=({searchChange})=>{
    return(
        <div className="pa2 tc">
            <input 
                className="tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow"
                type="search" 
                placeholder="search robots"
                onChange = {searchChange}
            />
        </div>
    );
}
export default SearchBox;