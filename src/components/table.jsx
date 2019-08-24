import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import movies from "./fakeMovieService.js";
import ModalPage from "./modal";
import Like from "./buttons";

class TablePage extends Component {

  state = {
    movies: movies,
    modal14: false,
    movie_count: movies.length
  };

  componentDidMount() {
    // console.log("movies", this.state.movies);
  }

  handleMovieRemove = (event, movie_id) => {
    event.preventDefault();
    const movies = this.state.movies.filter(movie => movie._id !== movie_id);
    this.setState({movies, movie_count: movies.length}, () => {
      if (this.state.movies.length === 0) this.setState({modal14: true})
    })
  };

  toggleModal = () => {
    this.setState({
      modal14: !this.state.modal14
    });
  };

  handleLike = (e, movie) => {
    e.preventDefault();
    // to know what movie has been liked or disliked
    // this is to reference the movie liked
    // Cloning the array from the state this is temporary
    const movies = [...this.state.movies];
    // grabbing the index of the movie that we passed
    const index = movies.indexOf(movie);
    //
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });

  };

  render() {

    return (
      <MDBCard narrow>
        <MDBCardHeader
          className="view view-cascade gradient-card-header purple-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-th-large mt-0">{" "}</i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-columns mt-0">{" "}</i>
            </MDBBtn>
          </div>
          <a href={" "} className="white-text mx-3">There are {this.state.movie_count} movies in the database</a>
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-pencil-alt mt-0">{" "}</i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-times mt-0">{" "}</i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-info-circle mt-0">{" "}</i>
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody className="elevation-demo-surface">
          {this.state.modal14 && <ModalPage modal14={this.state.modal14} toggleModal={this.toggleModal}/>}
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Liked</th>
                <th>Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {this.state.movies.map((_movie, index) => <tr key={_movie._id}>
                <td>{index + 1}</td>
                <td>{_movie.title}</td>
                <td>{_movie.genre.name}</td>
                <td>{_movie.numberInStock}</td>
                <td><Like handleLike={(e) => this.handleLike(e, _movie)} liked={_movie.liked}/></td>
                <td>
                  <MDBBtn tag="a" floating gradient="peach"
                          onClick={(event) => this.handleMovieRemove(event, _movie._id)}>
                    <MDBIcon icon="fas fa-times"/>
                  </MDBBtn>
                </td>
              </tr>)}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default TablePage;