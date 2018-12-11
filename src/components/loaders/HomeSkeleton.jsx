import React from 'react';

const loader = () => {
  return (
    <div className="skeleton">
      <div className="header" id="header">
        <div className="navbar fixed-top" id="navbar">
          <div className="shelter">
            <a className="navbar__nav nav__logo nav__underline" href="#">
              <div className="link-title skeleton-title loading" />
            </a>
            <div className="navbar__nav navbar__nav-toggle">
              <i className="fa fa-bars" />
            </div>
            <nav className="nav__items">
              <div className="navbar__nav nav__underline p__8">
                <div className="skeleton-search loading" />
              </div>
              <div className="navbar__nav nav__underline p__8">
                <div className="skeleton-search loading" />
              </div>
              <div className="navbar__nav nav__underline p__8">
                <div className="skeleton-search loading" />
              </div>
            </nav>
            <nav className="nav__items nav__items-right">
              <div className="navbar__nav pr-0 p__8 dropdown skeleton-user-loading loading" />
            </nav>
          </div>
        </div>
        <div className="banner mt-3">
          <div className="shelter">
            <div>
              <div className="columns">
                <div className="col-6">
                  <div className="skeleton-flex">
                    <div className="skeleton--welcom__title loading" />
                    <div className="skeleton--welcom-item-one loading" />
                    <div className="skeleton--welcom-item-two loading" />
                    <div className="skeleton--welcom-item-three loading" />
                    <div className="skeleton--welcom-item-four loading" />
                  </div>
                </div>
                <div className="col-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-2">
        <div className="shelter">
          <div className="columns">
            <div className="col-2">
              <div className="left-side">
                <div className="left-side__item">
                  <a href="#">
                    <div className="skeleton-sidebar loading" />
                  </a>
                </div>
                <div className="left-side__item">
                  <a href="#">
                    <div className="skeleton-sidebar loading" />
                  </a>
                </div>
                <div className="left-side__item">
                  <a href="#">
                    <div className="skeleton-sidebar loading" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="carded p-1">
                <div className="skeleton--recent-question loading" />
              </div>
              <div className="skeleton--card p-1">
                <div className="card-question">
                  <div className="skeleton--question loading" />
                </div>
                <div className="justify-content-start">
                  <div className="card-user ">
                    <div className="skeleton--card-user loading" />
                  </div>
                  <div className="card-user__job flex">
                    <div className="skeleton--time loading" />
                    <div className="skeleton--time loading" />
                  </div>
                </div>
                <div className="card-description">
                  <div className="skeleton-description loading" />
                  <div className="skeleton-description loading" />
                  <div className="skeleton-description loading" />
                  <div className="skeleton-description loading" />
                </div>
                <div className="card-reaction justify-content-space-between">
                  <div className="card-views">
                    <div className="skeleton--views loading" />
                  </div>
                  <div className="card-answer ml-2">
                    <div className="skeleton--answers loading" />
                  </div>
                </div>
              </div>
              <div className="skeleton--card p-1">
                <div className="card-question">
                  <div className="skeleton--question loading" />
                </div>
                <div className="justify-content-start">
                  <div className="card-user ">
                    <div className="skeleton--card-user loading" />
                  </div>
                  <div className="card-user__job flex">
                    <div className="skeleton--time loading" />
                    <div className="skeleton--time loading" />
                  </div>
                </div>
                <div className="card-description">
                  <div className="skeleton-description loading" />
                  <div className="skeleton-description loading" />
                  <div className="skeleton-description loading" />
                  <div className="skeleton-description loading" />
                </div>
                <div className="card-reaction justify-content-space-between">
                  <div className="card-views">
                    <div className="skeleton--views loading" />
                  </div>
                  <div className="card-answer ml-2">
                    <div className="skeleton--answers loading" />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="right-card">
                <div className="skeleton--contributor loading" />
                <div className="skeleton--contributor-big loading" />
                <div className="skeleton--contributor-small loading" />
                <div className="skeleton-top-contributor loading" />
                <div className="skeleton-top-contributor loading" />
                <div className="skeleton-top-contributor loading" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default loader;
