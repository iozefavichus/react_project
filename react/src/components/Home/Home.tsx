import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import { Component } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

type MyProps = {
  search?: string | undefined;
};

type MyState = {
  search: string;
};

class Home extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: localStorage.getItem('search') || '',
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(search: string) {
    this.setState({ search: search });
  }

  render(): JSX.Element {
    return (
      <div>
        <ErrorBoundary>
          <Header
            search={this.state.search}
            onChangeSearch={this.handleChangeSearch}
          ></Header>
          <Catalog search={this.state.search}></Catalog>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Home;
