import React from "react";

function notfound() {
  return (
    <div>
      <div className="container text-center py-5 my-5">
        <div className="display-4 pt-5 mt-5">
          <span className="text-danger">Oops!</span> It's a 404
        </div>
        <div className="lead">
          Sorry, couldn't finf this page as either it doesn't exist or under
          maintainance. Sorry, for the inconvenience caused!
        </div>
      </div>
    </div>
  );
}
export default notfound;
