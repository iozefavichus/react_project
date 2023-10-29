import { Component, ChangeEvent } from 'react';
import styles from './header.module.css';

type MyProps = {
  search?: string | undefined;
  onChangeSearch(a: string): void;
};

type MyState = {
  value: string | undefined;
};

class Header extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      value: this.props.search,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount(): void {
    if (this.state.value) {
      localStorage.setItem('search', this.state.value);
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({
        value: event.target.value,
      });
    }
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    if (this.state.value) {
      this.props.onChangeSearch(this.state.value);
    }
    if (this.state.value) {
      localStorage.setItem('search', this.state.value);
    }
  };

  handleError = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    throw new Error("Error is catched by ErrorBoundary");
  };

  render(): JSX.Element {
    return (
      <div className={styles.searchbar}>
        <input
          onChange={this.handleChange}
          className={styles.input_search}
          placeholder="Enter text ..."
          type="text"
          id="search"
          value={this.state.value}
        ></input>
        <button className="button" onClick={this.handleClick}>
          Search
        </button>
        <button className={styles.button_error} onClick={() => {throw new Error("Error is catched by ErrorBoundary")}}>Button for error</button>
      </div>
    );
  }
}

export default Header;
