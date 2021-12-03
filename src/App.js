import './App.scss';
import BookListPage from './pages/BookListPage';
import PageHeader from './components/layouts/PageHeader';

function App() {
  return (
    <div className='App'>
      <PageHeader
        title='BookList'
        subTitle='React Hooks, Context & Reducer'
        cssClassNames='p-2 bg-light border-bottom'
      />
      <BookListPage />
    </div>
  );
}

export default App;
