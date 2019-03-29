import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Favicon = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpFavicon{
        edges{
          node{
            url{
              source_url
            }
          }
        }
      }
    }
  `} render={props => (
      <img src={props.allWordpressWpFavicon.edges[0].node.url.source_url} />

  )} />
) 

export default Favicon;