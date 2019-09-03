import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Form from "./form";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };


  componentDidMount() {

    const genres = getGenres();

    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    /*
    * I have used replace as the method of history because we dont want the user
    * to hit the back key or be redirected to a page that is empty or has an error
    * if there is no movie we should display the not-found 404
    * */
    if (!movie) return this.props.history.replace("/not-found");


    this.setState({ data: MovieForm.mapToViewModel(movie) });
  }

  // if issues change to a regular function
  static mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = () => {

    saveMovie(this.state.data);
    this.props.history.push("/movies");

  };


  render() {

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="m-auto mt-4">
            <p className="h5 text-center mt-5">Add new movie</p>
            <form className="mt-5" onSubmit={this.handleSubmit}>
              {this.renderInput(1, "title", "Title", "video", "text", true)}
              {this.renderSelect("genreId", "Genre", this.state.genres)}
              {/*{this.renderInput(2, "genre", "Genre", "venus-mars", "text")}*/}
              {this.renderInput(3, "numberInStock", "Number in stock", "mouse-pointer", "text")}
              {this.renderInput(4, "dailyRentalRate", "Rate", "star", "text")}
              <div className="text-center float-left">
              {/*  <MDBBtn
                  className="warm-flame-gradient waves-float btn-floating"
                  onClick={() => this.props.history.push("/movies")}
                >Cancel</MDBBtn>*/}
                {this.renderButton("Cancel", "danger", true)}
                {this.renderButton("Save")}
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MovieForm;
