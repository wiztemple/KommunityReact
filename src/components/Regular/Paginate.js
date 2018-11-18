import React, { Component } from 'react'

class Paginate extends Component {
  render() {
    return (
        <div className="shelter">
            <div className="columns">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#" className="activve">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">8</a>
                        <a href="#">9</a>
                        <a href="#">10</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
  }
}

export default Paginate;
