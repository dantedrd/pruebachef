import React from "react";
import { connect } from "react-redux";
import actions from "./actions";

import { Pagination } from "../../components/Pagination";

import { Link } from "react-router-dom";

import Loading from "../../components/Loading";
import NotData from "../../components/NotData";

import like from "../../assets/img/like.png";
import dislike from "../../assets/img/dislike.png";

@connect(
  state => ({
    ...state.ListSuperHeroes
  }),
  actions
)
export default class ListSuperHeroes extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { openLogin: false, openRegister: false };
  }
  componentDidMount() {
    this.props.getSuperHeroes({ page: 0 });
    this.props.getTotal({});
  }
  render() {
    const { superHeroes } = this.props;
    if (!superHeroes) {
      return (
        <div>
          <NotData text="no hay superheroes verifica que el serivicio de php este corriendo por favor" />
        </div>
      );
    }
    const superHeroesItems = superHeroes.map((superHeroe, index) => {
      return (
        <div className="mention">
          <div className="content_mention">
            <img className="picture" src={superHeroe.picture} alt="" />
            <div className="text">
              <Link to={`/superheroe/${superHeroe.id}`}>
                <h3>{superHeroe.name}</h3>
              </Link>
              <p>{superHeroe.info}</p>
              <p className="edictor">Edictor: {superHeroe.publisher}</p>
              <div>
                <a className="likeStyle">
                  <img
                    src={like}
                    onClick={() => {
                      this.props.likeSuperHeroe({ superHeroe });
                    }}
                  />
                </a>
                <a className="likeStyle">
                  <img
                    src={dislike}
                    className="dislike"
                    onClick={() => {
                      this.props.dislikeSuperHeroe({ superHeroe });
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Loading open={this.props.loading} />
        <div className="grid">{superHeroesItems}</div>
        <div className="paginationButton">
          <Pagination
            page={this.props.page}
            total={this.props.total}
            changePage={page => {
              this.props.getSuperHeroes({ page });
            }}
          />
        </div>
      </div>
    );
  }
}
