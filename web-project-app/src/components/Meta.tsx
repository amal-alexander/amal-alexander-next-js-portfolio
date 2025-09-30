import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Meta;