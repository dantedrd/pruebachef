import React from "react";
import { connect } from "react-redux";
import actions from "./actions";

@connect(
  state => ({
    ...state.SuperHeroe
  }),
  actions
)
export default class SuperHeroe extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const id=this.props.match.params.idSuperHeroe;
    this.props.getSuperHeroe({id});
  }
  render() {
    const { superHeroe } = this.props;
    return (
      <div className="superheroe_box">
          <div className="content_mention">
            <img src={superHeroe.picture} alt="" />
            <div className="text">
              <h3>{superHeroe.name}</h3>
              <p>{superHeroe.info}</p>
              <p className="edictor">Edictor: {superHeroe.publisher}</p>
            </div>
          </div>
        </div>
    );
  }
}
