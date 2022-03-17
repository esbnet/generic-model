import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';
import { ArticleIndex } from './pages/Articles';

const App: React.FC = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Articles:
        return <div><ArticleIndex /></div>;
      case Page.Authors:
        return <div>Authors</div>;
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <Header />
      {renderSwitch()}
    </div>
  );
};

export default App;