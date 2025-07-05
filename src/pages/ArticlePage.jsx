import { useParams } from 'react-router-dom';
import articleData1 from '../data/Article1.json';
import articleData2 from '../data/Article2.json';
import "../styles/article.css";
import Header from '../components/Header';

const ArticlePage = () => {
  const { articleId } = useParams();

  const articles = {
    articlepage1: articleData1,
    articlepage2: articleData2
  };

  const data = articles[articleId];

  const renderContentBlock = (block, index) => {
  switch (block.type) {
    case 'heading':
      const HeadingTag = `h${block.level}`;
      return <HeadingTag className="article_heading" key={index}>{block.text}</HeadingTag>;
    case 'paragraph':
      return <p className='article_p' key={index}>{block.text}</p>;
    case 'jump':
      return <div className='article_div'></div>;
    case 'image':
      return <img 
              className='article_img' 
              key={index} 
              src={block.src} 
              alt={block.alt} />;
    default:
      return null;
  }
};

  if (!data) {
    return <div>Article non trouvé</div>;
  }

  return (
    <section className="article">
      <Header />
      <section className="article_page_section">
        <h1 className='article_h1'>{data.title}</h1>
        {data.content.map((block, index) => renderContentBlock(block, index))}
      </section>
    </section>
  );
};

export default ArticlePage;
