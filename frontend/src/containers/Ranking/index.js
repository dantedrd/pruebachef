import React from "react";
import { connect } from "react-redux";
import actions from "./actions";
import NotData from "../../components/NotData";
import Loading from "../../components/Loading";

import arrowleft from "../../assets/img/arrowleft.png";
import arrowright from "../../assets/img/arrowright.png";
import start from "../../assets/img/start.png";

@connect(
  state => ({
    ...state.Ranking
  }),
  actions
)
export default class Ranking extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getRankinSuperHeroes();
  }
  componentWillUnmount() {
    this.props.destroy();
  }
  render() {
    const { rankinOrder } = this.props;
    if(!rankinOrder||rankinOrder.length===0){
      return(<div><NotData text="no hay superheroes ranquiados ve y dale me gusta alguno para ver el rankin"/></div>);
    }
    const superHeroesItems = rankinOrder.map((superHeroe, index) => {
      return (
        <div className="mention">
          <div className="content_ranking">
            <img className="pictureRankin" src={superHeroe.picture} alt="" />
            <div className="text">
              <h3>{superHeroe.name}</h3>
              <p>{superHeroe.info}</p>
              <img src={start} alt="" /> {superHeroe.like}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Loading open={this.props.loading} />
        <div className="slyderSuperHeroes">
          {this.props.index > 2 && (
            <div className="arrowLeft">
              <a
                href="#"
                onClick={event => {
                  event.preventDefault();
                  this.props.afterRanking();
                }}
              >
              <img src={arrowleft}/>
              </a>
            </div>
          )}
          <div className="grid-sylder">{superHeroesItems}</div>
          {this.props.index < this.props.rankins.length && (
            <div className="arrowRight">
              <a
                href="#"
                onClick={event => {
                  event.preventDefault();
                  this.props.nextRanking();
                }}
              >
                <img src={arrowright}/>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
