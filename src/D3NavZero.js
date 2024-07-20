import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import PaperBlock from './components/PaperBlock';

import GridGifs from './GridGifs';
import { CircularProgress, Grid } from '@mui/material';

import './styles.css';


function D3NavZero() {
  useEffect(() => {
    document.title = 'D³Nav';
  }, []);
  const title = "D³NavZero: AV Navigation with AI-Guided Graph Search"
  const authors = [
    {
      author_name: "Aditya N G",
      author_email: "adityang5@gmail.com",
      author_url: "https://adityang.github.io/"
    },
    {
      author_name: "Gowri Srinivasa",
      author_email: "gsrinivasa@pes.edu",
      author_url: "https://staff.pes.edu/nm1084/"
    },
  ]

  const papers = [
    {
      title: "D³NavZero: AV Navigation with AI-Guided Graph Search",
      image: require("./media/D3NavZero_title.gif"),
      conference: "BMVC 2024",
      bibtext_plain: 'N. Aditya, S. Gowri. "D³Nav: Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic," in The 35th British Machine Vision Conference (BMVC), 2024.',
      bibtext: "@article{NG2024D3Nav, \
  title={D³Nav: Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic}, \
  author={Aditya NG and Gowri Srinivas}, \
  journal={The 35th British Machine Vision Conference (BMVC)}, \
  year={2024}, \
  url={https://bmvc2024.org/} \
}",
      links: [
        { key: "Paper (Coming Soon)", value: "/D3Nav" },
        { key: "Code", value: "https://github.com/AdityaNG/D3Nav" },
        { key: "Project", value: "/D3Nav" }
      ],
      project_page: "/D3Nav",
      tldr: "Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic. A video generation model as a world simulator for AVs",
    },
  ];


  const image = require("./media/D3NavZero_title.gif")

  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="container">
      <header>
        <h1>{title}</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {authors.map(author => (
                <div style={{margin: '10px'}}>
                <AuthorsList {...author} />
                </div>
            ))}
        </div>
        <h4>Department of Computer Science, PES University, Bengaluru</h4>
        <h4>Published at <a href="https://bmvc2024.org/">BMVC 2024</a></h4>

      </header>
      <main>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={image}></img>
      </div>

      <hr />

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button href="https://github.com/AdityaNG/D3Nav" target="_blank" rel="noopener noreferrer" disabled>
          Paper (Coming Soon)
        </Button>
        <Button href="https://github.com/AdityaNG/D3Nav" target="_blank" rel="noopener noreferrer">
          Code
        </Button>
        <Button href="/D3NavRandom">
          More Videos
        </Button>
      </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            <b>Abstract.</b> Navigating unstructured traffic autonomously requires handling a plethora of edge cases, traditionally challenging for perception and path-planning modules due to scarce real-world data and simulator limitations. By employing the next-token prediction task, LLMs have demonstrated to have learned a world model. D³Nav bridges this gap by employing a quantized encoding to transform high-dimensional video data (Fx3x128x256) into compact integer embeddings (Fx128) which are fed into our world model. D³Nav's world model is trained on the next-video-frame prediction task and simultaneously predicts the desired driving signal. The architecture's compact nature enables real-time operation while adhering to stringent power constraints. D³Nav's training on diverse datasets featuring unstructured data results in the model's proficient prediction of both future video frames and the driving signal. We make use of automated labeling to generate importance masks accentuating pedestrians and vehicles to aid our encoding system in focusing on objects of interest. These capabilities are an improvement in end-to-end autonomous navigation systems, particularly in the context of unstructured traffic environments. Our contribution includes our driving agent D³Nav and our embeddings dataset of unstructured traffic. We make our code and dataset public.
            </p>
        </div>

        <hr />
        
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>Video Generation</h2>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={image}></img>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
              D³Nav takes 6 frames as input context and produces the next 6 frames. In the prompt columns, we show the last frame of the input and on the Prediction column, we have an animation of D³Nav's prediction of what it thinks will happen next.
            </p>
        </div>

        <hr />

        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>Control Signal</h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={require("./media/d3nav_demo_2_control_signal_trajectory.gif")}></img>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Above is a demo of D³Nav generating the control signal (desired trajectory) on a subset of our dataset. Note that the point cloud and semantic segmentation are not generated by D³Nav and are only used to visualize the trajectory in 3D with respect to other objects.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="paper-grid">
            {papers.map((paper) => (
                <div>
                <PaperBlock {...paper} />
                <hr />
                <br />
                </div>
            ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default D3NavZero;
