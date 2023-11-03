import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import { useState } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

function Home() {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  return (
    <div>
      <ErrorBoundary>
        <Header
          search={search}
          onChangeSearch={() => setSearch(search)}
        ></Header>
        <Catalog search={search}></Catalog>
      </ErrorBoundary>
    </div>
  );
}

export default Home;
