import './App.scss';
import BookListPage from './pages/BookListPage';
import PageHeader from './components/layouts/PageHeader';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <PageHeader
          title='BookList'
          subTitle='React Hooks, Context & Reducer'
          cssClassNames='p-2 bg-light border-bottom'
        />
        <BookListPage />
      </BookContextProvider>
    </div>
  );
}

export default App;
