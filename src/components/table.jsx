import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBRow
} from 'mdbreact';
import movies from "../services/fakeMovieService.js";
import ModalPage from "./modal";
import PaginationPage from "./paginationPage";
import { paginate } from "../utils/pajinate";
import MyListGroup from "../components/List/listGroup";
import { getGenres } from "../services/fakeGenreService";
import AbstractedTable from "./abstractedTable";
import _ from "lodash";

class TablePage extends Component {

  state = {
    movies: [],
    modal14: false,
    movie_count: movies.length,
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    sortColumn: {
      path: "title",
      order: "asc"
    }
  };

  // we will initialize the genres array from when the component mounts
  // for a full stack app this could be getting a response from the DB
  componentDidMount() {

    const genres = [{_id: "", name: "All Genres"}, ...getGenres()];

    this.setState({movies, genres});

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

  handleGenreSelect = (item) => {

    this.setState({selectedGenre: item, currentPage: 1});
    console.log("Selecting Genre", item);

  };

  handleSort = sortColumn => {

    //=========== This is one way of doing it =================================================
    // although this works well is not the best way of doing it
    /*

    const sortColumn = {...this.state.sortColumn};
    if (sortColumn.path !== path) {
      sortColumn.path = path;
      sortColumn.order = "asc";
    } else {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    */

    this.setState({ sortColumn }, () => {
        console.log("State Updated");
    });

  };

  render() {
    const {pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn} = this.state;

    //=========== First we filter =================================================
    // Used to filter all the movies on a give genre
    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    //=========== Then order =================================================
    // Used to sort or order the movies based on either asc or desc order
    const sorted =_.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    //=========== Handle paginaton =================================================

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <MDBRow>
        <MDBCol md="3">
          <MyListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}/>
        </MDBCol>
        <MDBCol md="9">
          <MDBCard narrow className="z-depth-1-half">
            <MDBCardHeader
              className="view view-cascade gradient-card-header aqua-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 clearfix">
              <div>
                <PaginationPage
                  itemsCount={filtered.length}
                  pageSize={pageSize}
                  onPageChange={this.handlePageChange}
                  currentPage={currentPage}
                  textProperty="name"
                  valueProperty="_id"
                />
              </div>
              <a href={" "} className="h5 font-weight-bold black-text my-4">There are {filtered.length} movies in the
                database</a>
            </MDBCardHeader>
            <MDBCardBody className="elevation-demo-surface">
              {this.state.modal14 && <ModalPage modal14={this.state.modal14} toggleModal={this.toggleModal}/>}
              <AbstractedTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleMovieRemove}
                onSort={this.handleSort}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default TablePage;