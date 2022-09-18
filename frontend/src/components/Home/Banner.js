/* eslint-disable */
import React, { useState } from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { UPDATE_SEARCH, SEARCH_ITEMS } from "../../constants/actionTypes";

const isFilter = (value) => value.length >= 3;
const isAll = (value, isSearching) => value.length === 2 && isSearching;

const mapDispatchToProps = (dispatch) => ({
  onSearch: (tab, pager, payload) =>
    dispatch({ type: SEARCH_ITEMS, tab, pager, payload }),
  onChange: (value) => dispatch({ type: UPDATE_SEARCH, value }),
});

const mapStateToProps = (state) => ({
  tab: state.itemList?.tab,
  search: state.search,
});

const Banner = ({ tab, search, onSearch, onChange }) => {
  const [isSearching, setSearching] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    onChange(event.target.value);

    if (isAll(value, isSearching)) {
      onSearch(tab, agent.Items.all, agent.Items.all());
      setSearching(false);
    }
    if (isFilter(value)) {
      onSearch(
        tab,
        () => agent.Items.byTitle(value),
        agent.Items.byTitle(value)
      );
      setSearching(true);
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} className="banner-logo" alt="banner" />
        <form className="row g-6 align-items-center justify-content-center">
          <div className="col-auto px-1">
            <span id="get-part">A place to get</span>
          </div>
          <div className="col-4 px-1">
            <i className="bi-search banner-search-form-icon">
              <input
                id="search-box"
                className="form-control form-control"
                type="text"
                placeholder="What is that you truly desire?"
                value={search}
                onChange={handleSearchChange}
              />
            </i>
          </div>
          <div className="col-auto px-1">
            <span> the cool stuff.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
