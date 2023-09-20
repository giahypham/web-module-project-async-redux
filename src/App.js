import React from 'react';
import './App.css';
import { connect } from 'react-redux';


import GifList from './components/GifList'
import GifForm from './components/GifForm';



//Step 2: Build from App.js first then start out to other components
//URL to test API: https://api.giphy.com/v1/gifs/search [add sign] ? api_key=DN6aSnqqzf1usJBHRC7EhFmdeBKv9bv3 [add sing] & q=dogs
//URL https://api.giphy.com/v1/gifs/search?api_key=DN6aSnqqzf1usJBHRC7EhFmdeBKv9bv3&q=dogs

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = "";
  //Above are the slices of state to be passed into reducers, at this point before reducers, they are there to set up the app to see how it runs

  const { loading, error } = props;

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {/* {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs}/> //GiftList take in gifs, not {gifs}
      } */}

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList/> //delete above in order to minimize usage of props, use connect to connect comp directly instead
      }
    </div>

    

  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
//with connect, you can also connect action along with state to the component desired here we don't need to connect any actions


