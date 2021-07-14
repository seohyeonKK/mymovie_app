const Detail = ({ location, history }) => {
  if (location.state === undefined) {
    history.push("/");
    return <div />;
  } else {
    console.log(location);
    return <h1>{location.state.title}</h1>;
  }
};

// import React from "react";

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//     console.log(location);
//   }
//   render() {
//     return <span>{location.state.title}</span>;
//   }
// }

export default Detail;
