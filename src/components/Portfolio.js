import React, { Component } from 'react';
const styles = {
  aSize: {
    height: "40px"
  }
}
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item" >
                      <a href={`${item.imgurl}`} target="_blank">
                        <div className="item-wrap" >
                          <h4>{item.name}</h4>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <p>{item.description}</p>
                            </div>
                          </div>

                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}