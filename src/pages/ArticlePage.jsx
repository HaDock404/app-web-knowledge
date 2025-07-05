import { useParams } from 'react-router-dom';

import articleData1 from '../data/Article1.json';
import articleData2 from '../data/Article2.json';
import articleData3 from '../data/Article3.json';
import articleData4 from '../data/Article4.json';
import articleData5 from '../data/Article5.json';
import articleData6 from '../data/Article6.json';
import articleData7 from '../data/Article7.json';
import articleData8 from '../data/Article8.json';
import articleData9 from '../data/Article9.json';
import articleData10 from '../data/Article10.json';
import articleData11 from '../data/Article11.json';

import "../styles/article.css";
import Header from '../components/Header';
import CopyingButton from '../components/CopyingButton'

const ArticlePage = () => {
  const { articleId } = useParams();

  const articles = {
    articlepage1: articleData1,
    articlepage2: articleData2,
    articlepage3: articleData3,
    articlepage4: articleData4,
    articlepage5: articleData5,
    articlepage6: articleData6,
    articlepage7: articleData7,
    articlepage8: articleData8,
    articlepage9: articleData9,
    articlepage10: articleData10,
    articlepage11: articleData11
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
    case 'code':
      return (
          <div className='article_code'>
            {block.text}
            <CopyingButton text={block.text}/>
          </div>
      )
        
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
