import React from 'react';
import axios from 'axios';



class DataUnsur extends React.Component {
  state = {
    data: [],
    isLoading: true,
    errors: null
  };

  Dataunsur() {
    axios
      .get(
        'http://127.0.0.1:8000/api/getJenisById/2/5/'
      )
      .then(response =>
        console.log(response.data),
        response.data.articles.map(
            newsdata => ({
              name: `${newsdata.source.name}`,
              title: `${newsdata.title}`,
              description: `${newsdata.description}`,
              content: `${newsdata.content}`,
              image: `${newsdata.urlToImage}`,
              create: `${newsdata.publishedAt}`
            })
        )
      )

      .then(data => {
        this.setState(
          {
            data,
            isLoading: false
          },
          console.log(data)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }



  componentDidMount() {
    this.Dataunsur();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <React.Fragment>
        
          <div className="container judulber">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary" role="alert">
                       <h2 className="text-center">Dunia Dalam Berita</h2> 
                    </div>
                </div>
                
            </div>
          </div>

          
            {!isLoading ? (
              data.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create
                } = data;

                return (
                  <div key={data.title} className='container testi'>
                  
                        <div className="col-md-4 kiri">
                            <img className='img-fluid' src={image} alt='images' />
                            <div className='content-detail'>
                            <span>{create}</span>
                            <h4 className='title'>{title}</h4>
                            <p className='desc'>{description}</p>
                            <h4 className='content-name'>{name}</h4>
                            
                            <p className='content'>{content}</p>
                           
                               
                              <button className='btn btn-info'>Read More</button>
                            
                            </div>
                        </div>
                   
                  </div>
                );
              })
            ) : (
            
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
    );
  }
}

export default DataUnsur;