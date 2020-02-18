import React from 'react';

const PopoverContent = ({ingredients, price}) => {
    return (
        <div style={{maxWidth: "10vw"}}>

            <p style={{display: "inline"}}>Ingredients: </p>
            {ingredients.map((ingredient) => {
                return (
                    <p key={ingredient} style={{display: "inline"}}>
                    {ingredient + " "}</p>);
            })}

            <p>{"Price: $" + price}</p>

        </div>
    );
}

export default PopoverContent;