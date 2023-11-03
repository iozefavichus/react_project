import { useState } from 'react';
import styles from './catalog.module.css';
import { Card } from '../Card/Card';
import { CardType } from '../Card/CardPropsType';

type MyProps = {
  search: string;
};

// type MyState = {
//   isLoaded: boolean;
//   apiInfo: [];
//   error: Error | null;
// };

function Catalog(props: MyProps){
  const [isLoaded] = useState(false);
  const [apiInfo] = useState([]);
  const [error] = useState(null);

  if (error) {
    return <p>Error</p>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  }
  if (apiInfo.length === 0) {
    return <div> Nothing was found </div>;
  } else
    return (
      <div className={styles.result}>
        {apiInfo.map((el: CardType, index: number) => (
          <Card key={index} {...el} />
        ))}
      </div>
    );
}

// class Catalog extends Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.state = {
//       isLoaded: false,
//       apiInfo: [],
//       error: null,
//     };
//   }

//   componentDidMount() {
//     console.log('API loaded');
//     fetch(
//       `https://rickandmortyapi.com/api/character/?name=${this.props.search}`
//     )
//       .then((response) => response.json())
//       .then(
//         (response) => {
//           this.setState({
//             apiInfo: response.results,
//             isLoaded: true,
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   componentDidUpdate() {
//     console.log('API update');
//     fetch(
//       `https://rickandmortyapi.com/api/character/?name=${this.props.search}`
//     )
//       .then((response) => response.json())
//       .then(
//         (response) => {
//           if (
//             !(
//               JSON.stringify(response.results) ===
//               JSON.stringify(this.state.apiInfo)
//             )
//           ) {
//             this.setState({
//               apiInfo: response.results,
//               isLoaded: true,
//             });
//           }
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, apiInfo } = this.state;
//     if (error) {
//       return <p>Error {error.message}</p>;
//     } else if (!isLoaded) {
//       return <p>Loading...</p>;
//     }
//     if(apiInfo.length === 0){
//         return (
//             <div> Nothing was found </div>
//         )
//     }  else
//     return (
//       <div className={styles.result}>
//         {apiInfo.map((el: CardType, index: number) => (
//           <Card key={index} {...el} />
//         ))}
//       </div>
//     );
//   }
// }

export default Catalog;
