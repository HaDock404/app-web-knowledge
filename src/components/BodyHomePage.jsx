import React, { useState } from 'react';
import '../styles/homepage.css'
import QuizCard from './QuizCard'
import articleData from '../data/articles-list.json';
import Icon3 from './SearchIcon.jsx';

function BodyHomePage() {
    const sortedArticles = [...articleData].sort((a, b) => a.article_name.localeCompare(b.article_name));
    const [search, setSearch] = useState('');
    const onSearchChange = (value) => {
        setSearch(value.toLowerCase());
    };

    const items = sortedArticles.filter((item) =>
        item.tags.some((tag) => tag.includes(search))
    );




    const [inputValue, setInputValue] = useState(search);
    const handleSearch = () => {
        onSearchChange(inputValue);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className="body_homepage_section">
            <article className='body_homepage_article_header'>
                    <input 
                        class="body_homepage_article_header_search" 
                        type="text" 
                        placeholder="Rechercher"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    />
                    <button 
                        className="body_homepage_article_header_search_button"
                        onClick={handleSearch}
                    >
                        <Icon3 />
                    </button>

            </article>
            
                {items.length > 0 ? (
                    items.map(({ article_name, article_img, data_article, url_path }) => {
                
  
                return (
                    <QuizCard
                        to={url_path}
                        data={data_article}
                        title={article_name}
                        img_path={article_img}
                    />
                );
              })
                ) : (
                    <QuizCard
                        to="/"
                        data=""
                        title="No Data"
                        img_path=""
                    />
                )}
        </section>
    )
}

export default BodyHomePage