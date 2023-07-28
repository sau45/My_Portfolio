import React, { useState } from "react";
import "./style.scss";
import images1 from "../data/image/ResumePhoto.jpg";
import images2 from "../data/image/git.png"
import project1 from '../data/image/MovieRecommend.jfif'
import project2 from '../data/image/TvShow.avif'
import project3 from'../data/image/Ecommerce.jfif'
import project4 from'../data/image/ReduxToolkit.jpg'
import project5 from'../data/image/fetchmovie.jfif'
import project6 from'../data/image/GuessNumber.png'
import gitproject from '../data/image/gitproject.png'
import email from '../data/image/email.png'
import linkedin from '../data/image/linkedin.png'
import ContentWrapper from "../contentWrapper/ContentWrapper";



function Portfolio() {
  const [paraShow, setParaShow] = useState(false);
  const photo = [
    {images:project1,
      text:"Movie Recommendation",
      link:"https://fully-fledged-react-app.vercel.app/"
      
    }


    ,{images:project3,
      text:"Ecommerce",
      link:"https://saurav-first-site.netlify.app"
    
  }


    ,{images:project2,
      text:"Tv Show",
      link:"https://gregarious-narwhal-37fdf5.netlify.app"
  }


    ,{images:project4,
      text:"Redux_Toolkit",
      link:"https://redux-toolkit-project-six.vercel.app/product"
    }

    ,{images:project5,
      text:"Fetch Movie With Api",
      link:"https://api-movie-recommend.vercel.app/"
      
    }

    ,{images:project6,
      text:"Guess Number",
      link:"https://javascript-project-dice-game.vercel.app/"
    }
    ];
  const connectphoto = [
    {
      images:gitproject,
      link:"https://github.com/sau45?tab=overview&from=2023-06-01&to=2023-06-30",
      text:" @Git hub link"
    }
    ,{
      images:email,
      link:"https://mail.google.com/mail/u/0/#inbox",
      text:"@Email Address"
    }
    ,{
      images:linkedin ,
      link:"https://www.linkedin.com/in/saurav-bharti-28252b201/",
      text:"@My linkedin Profile"
    }];
  return (
    <>


      {/* This is for the photo of mine */}
      <ContentWrapper>
        <div className="portfolio">

          <div className="portfolio-image">
            <img src={images1} className="card1-img" alt="" />
          </div>
          <div className="about">
            <div className="sub-about">
              <h1>Hello!</h1>
              <p> My name is Saurav Bharti.</p>

              <p>I am a computer engineering student at PU currently in my 3rd year</p>
              {paraShow && (<>
                <p> I am a budding engineer, working hard to pursue my dreams.</p>

                <p>I have a great zeal to learn and to put all my skills</p>

                <p>and knowledge to get the best of my work done.</p>

                <p>I Live in Bihar, and code almost every day.</p>

                <p>Besides coding,I also love Cricket.</p>

                <p>Also, being a keen learner and a youngster, I can work to the best of my potential in a faster and in a more relevant manner.</p>
              </>

              )}
              {!paraShow ? <button className="more" onClick={() => setParaShow(true)}>Show More</button> : <button className="less" onClick={() => setParaShow(false)}>Show Less</button>}

            </div>
          </div>
          <div className="space"></div>
         

          <div className="git-image">
            <h1 >MY GitHUB CONTRIBUTION </h1>
            
            <img src={images2} alt="" />
          </div>
          
          <div className="space"></div>

            <h1 className="project">PROJECT</h1>
          <div className="highlight">
            {photo.map((item)=>(
              <>
              <div className="subhighlight">
             <a href={item.link} target="_blank"><img  src={item.images}/></a> 
                <h4>{item.text}</h4>

              </div>
               
              </>
              

              
              
             
            ))}

          </div>
          <div className="space"></div>

          <div className="connectwithme">
            <h1>CONNECT WITH ME</h1>
            <div className="connectimage">
            {connectphoto.map((item)=>(
             <>
             <a href={item.link} target="_blank" ><img src={item.images}/><h6>{item.text}</h6></a>
             
             </>
                

           
              
            ))}

            </div>
           

          </div>
        



        </div>

      </ContentWrapper>




    </>
  );
}

export default Portfolio;
