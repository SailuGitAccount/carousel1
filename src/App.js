import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      sources: [
        {
          id: 1,
          title: "Mountains",
          description: "Beautiful Mountains with a lake",
          url: "mountain-hills.jpg",
          ctaText: "Learn More"
        },
        {
          id: 2,
          title: "Sun rays",
          description: "Sunrays falling on grass",
          url: "sunrays-landscape.jpg",
          ctaText: "Learn More"
        },
        {
            id: 3,
            title: "Mountain Valley",
            description: "Mountain Valleys",
            url: "mountain-valley.jpg",
            ctaText: "Learn More"
          },
          {
            id: 4,
            title: "Trees Scenery",
            description: "Legendary green tree",
            url: "trees.jpg",
            ctaText: "Learn More"
          },
          {
            id: 5,
            title: "Rocky structures",
            description: "Rocky structure",
            url: "sky-rocks.jpg",
            ctaText: "Learn More"
          },
          {
            id: 6,
            title: "Grassy Scene",
            description: "House in the fields",
            url: "home-grass.jpg",
            ctaText: "Learn More"
          }
      ]
    };
  }
  
  render() {
    let sources=this.state.sources;
    return (
          <Carousel>
           {sources.map(source => (
           <div  key={source.id+'a'}>
            <img key={source.id} src={process.env.PUBLIC_URL+source.url} alt={source.description} />
            <div className="legend stage">
              <div className="spinner">
                <span className="title">{source.title}</span> <span>{source.description}</span><br />
              </div>
              <div className="stage"><button className="btnStyle">{source.ctaText}</button></div>
              </div>
         </div> 
            ))}
          </Carousel>
    );
  }
}

export default App;
