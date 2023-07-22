import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function TabInProfile(){
  const location = useLocation();

  return (
    <Tabs value={location.pathname}>
      <Tab label="My Event List" value="/profile/:profileid/event" component={Link} to="/profile/:profileid/event" />
      <Tab label="My Application List" value="/profile/:profileid/application" component={Link} to="/profile/:profileid/application" />
      <Tab label="My CVs List" value="/profile/:profileid/cv" component={Link} to="/profile/:profileid/cv" />
      <Tab label="My Interview List" value="/profile/:profileid/interview" component={Link} to="/profile/:profileid/interview" />
    </Tabs>
  );
};

