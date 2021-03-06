import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const tabs = [
    { title: 'Menu', to: `/restaurants/${id}/menu` },
    { title: 'Reviews', to: `/restaurants/${id}/reviews` },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Switch>
        <Route path="/restaurants/:restId/menu">
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Route path="/restaurants/:restId/reviews">
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
        <Redirect
          // exact
          // from="/restaurants/:restId"
          to={`/restaurants/${id}/menu`}
        />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
