import * as React from 'react';
import { Breadcrumbs } from '@workday/canvas-kit-react/breadcrumbs';
import { Box } from '@workday/canvas-kit-react/layout';
import { Link, useLocation } from 'react-router-dom';
import { colors } from "@workday/canvas-kit-react"


export interface Breadcrumb {
  id: string;
  link?: string;
  text: string;
}

const BaseBreadcrumbs = () => {

  const [items] = React.useState<Breadcrumb[]>([
    { id: '1', text: 'Home', link: '/' },
  ]);

  const location = useLocation()
  let currentLink = '';
  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map((crumb: string, index: number, { length }) => ({ text: crumb, link: index + 1 === length ? null : currentLink += `/${crumb}` }))
  
  return (
      <Box paddingY={5} paddingX={5} backgroundColor={colors.blueberry100}>
        <Breadcrumbs items={crumbs} aria-label="Breadcrumbs">
          <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
            {(item: Breadcrumb) =>
              item.link ? (
                <Breadcrumbs.Item>
                  <Link to={item.link}>
                    {item.text}
                  </Link>
                </Breadcrumbs.Item>
              ) : (
                <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
              )
            }
          </Breadcrumbs.List>
        </Breadcrumbs>
      </Box>
  );
};

export default BaseBreadcrumbs