import React from 'react';
import Card2 from '../../../components/atoms/cards/Card2';
import Card3 from '../../../components/atoms/cards/Card3';
import CardProduct from '../../../components/atoms/cards/CardProduct';
import CardSocial from '../../../components/atoms/cards/CardSocial';
import ProjectCard from '../../../components/atoms/cards/ProjectCard';
import Card4 from '../../../components/atoms/cards/Card4';
import Card5 from '../../../components/atoms/cards/Card5';
import Card7 from '../../../components/atoms/cards/Card7';
import { MemoryRouter } from 'react-router-dom';
import Card6 from '../../../components/atoms/cards/Card6';
import DeleteCard from '../../../components/atoms/cards/DeleteCard';

export default {
  title: 'Atoms/Cards',
  tags: ['autodocs'],
  
};

export const XCard2 = () => <Card2 />;

export const XCard3 = () => (
  <Card3
    description="Experience innovation."
    linkText="Get Started"
  />
);
export const XCardProduct = () => (
  <CardProduct
    image="https://via.placeholder.com/150"
    title="Sample Product"
    id="123"
    price="29.99"
  />
);
export const XCardSocial = () => (
  <MemoryRouter>
    <CardSocial
      id="789"
      coverPhoto="https://via.placeholder.com/600x200"
      profilePic="https://via.placeholder.com/100"
      username="Jane Smith"
      categories="Lifestyle, Travel"
      link="/user/janesmith"
      status="Active"
    />
  </MemoryRouter>
);
export const XProjectCard = () => (
  <ProjectCard
    image="https://via.placeholder.com/300x150"
    name="Project Without Category"
    description="A project with no specific category but plenty of ambition."
    tier="Bronze"
    category=""
  />
);

export const XCard4 = () => <Card4  />;
export const XCard5 = () => <Card5 />;
export const XCard6 = () => <Card6 />;
export const XCard7 = () => <Card7 />;
export const XDeleteCard = () => <DeleteCard onCancel={() => console.log('cancel')} onConfirm={() => console.log('confirm')} />;