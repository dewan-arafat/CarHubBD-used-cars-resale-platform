import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ card }) => {
    const { category_id, category_name, bgClass, category_icon } = card;
    return (
        <div className={`card infoCard text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <Link to={`/category/${category_id}`}>
                <figure>
                    <img src={category_icon} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                </div>
            </Link>

        </div>
    );
};

export default CategoryCard;