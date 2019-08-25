import React, {Component} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdbreact';
import movies from "../services/fakeMovieService.js";
import ModalPage from "./modal";
import Like from "./buttons";
import PaginationPage from "./paginationPage";
import { paginate } from "../utils/pajinate";
import MyListGroup from "../components/List/listGroup";

class TablePage extends Component {

  state = {
    movies: movies,
    modal14: false,
    movie_count: movies.length,
    pageSize: 4,
    currentPage: 1
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
    this.setState({movies});

  };

  handlePageChange = page => {

    this.setState({currentPage: page})

  };

  render() {
    const { pageSize, currentPage, movie_count, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <MDBRow>
        <MDBCol md="3">
          <MyListGroup />
        </MDBCol>
        <MDBCol md="9">
      <MDBCard narrow>
        <MDBCardHeader
          className="view view-cascade gradient-card-header purple-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 clearfix">
          <div>
            <PaginationPage
              itemsCount={this.state.movies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
            {/*<MDBBtn className="cloudy-knoxville-gradient" color="warning-color-darker" size="sm">All Genres</MDBBtn>
            <MDBBtn className="deep-blue-gradient" color="success-color-darker" size="sm">Action</MDBBtn>
            <MDBBtn className="dusty-grass-gradient" color="warning-color-darker" size="sm">Comedy</MDBBtn>
            <MDBBtn className="tempting-azure-gradient" color="success-color-darker" size="sm">Thriller</MDBBtn>*/}
          </div>
          <a href={" "} className="h5 font-weight-bold black-text my-4">There are {movie_count} movies in the
            database</a>
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
              {movies.map((_movie, index) => <tr key={_movie._id}>
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
        </MDBCol>
      </MDBRow>
    );
  }
}

export default TablePage;