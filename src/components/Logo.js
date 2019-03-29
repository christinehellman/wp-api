import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const Logo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpLogo{
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
    <Link to="/home">
      <img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt={"logo"}/>
    </Link>
  )} />
) 

export default Logo;