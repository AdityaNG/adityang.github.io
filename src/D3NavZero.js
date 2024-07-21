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
  const title = "D³NavZero: AV Navigation with AI-Guided Graph Search"
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
      title: "D³NavZero: AV Navigation with AI-Guided Graph Search",
      image: require("./media/D3NavZero_title.gif"),
      bibtext_plain: 'N. Aditya "D³NavZero: AV Navigation with AI-Guided Graph Search", 2024.',
      bibtext: "@misc{NG2024D3NavZero, \
  title={D³NavZero: AV Navigation with AI-Guided Graph Search}, \
  author={Aditya, NG}, \
  year={2024}, \
}",
      links: [
        { key: "Article", value: "" },
        { key: "Project", value: "/D3NavZero" }
      ],
      project_page: "/D3NavZero",
      tldr: "MyuZero for autonomous vehicles",
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
            D³NavZero proposes a navigation system that integrates MyuZero-style intelligent graph search with D³Nav [1] and TrajNet [2]. This fusion of the following technologies has the potential to revolutionize how autonomous vehicles navigate and make decisions in complex environments.
            <l>
             <li>D³Nav [1] is a generative video model that takes the past history of video frames (driving footage) as input and predicts the future frames as output</li>
             <li>TrajNet [2] is a simple image-based end-to-end path planner for AVs</li>
             <li>MyuZero [3] applies a learned world simulator with Monte Carlo Tree Search to decide on an optimal action</li>
            </l>
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={require('./media/d3nav_demo_1_video_generation.gif')}></img>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', textAlign: 'justify'}}>
            D³Nav can generate future video frames from a video prompt
            </p>
        </div>

        <br></br>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>The Inspiration Behind D³NavZero</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            The concept of D³NavZero draws inspiration from three significant developments in the field of artificial intelligence and autonomous driving:
            <ol>
              <li>Tesla's application of AI-guided tree search for path planning in their Full Self-Driving (FSD) v12 software [4] .</li>
              <li>The success of MyuZero [3] , an AI system that uses guided Monte Carlo tree search to achieve superhuman performance in games like Atari, Go, Chess, and Shogi.</li>
              <li>Comma AI's Learning a Driving Simulator: Many approaches have shown it is possible to build a neural simulator for the AV task</li>
            </ol>

            While Tesla's approach likely relies on a classical hard-coded simulator (at the time of writing) and vast amounts of user data for training, D³NavZero aims to take this concept further by incorporating a learned world engine, D³Nav, as a simulator.
            
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={require('./media/TrajNet_traj_demo.gif')}></img>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', textAlign: 'justify'}}>
            TrajNet produces the desired vehicle trajectory
            </p>
        </div>

        <br></br>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>The Building Blocks of D³NavZero</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            At its core, D³NavZero comprises three main components, each represented by a neural network:
            <ol>
              <li>Environment Encoder (h): This network takes an image as input and produces a latent space representation of the environment.</li>
              <li>Policy-Value Function (f): This network takes the environment state as input and outputs a distribution of policies to take, along with their corresponding future reward values.</li>
              <li>Dynamics Model (g): This network takes a state-action pair for a given frame as input and predicts the next state and the reward for the action.</li>
            </ol>

            These networks work in tandem with a Monte Carlo Tree Search framework to make informed decisions by exploring potential future scenarios and selecting the path with the highest reward.
            
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>Translating MyuZero to Autonomous Driving</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            In the context of autonomous vehicles, D³NavZero adapts the MyuZero framework as follows:
            <ul>
              <li>The Environment Encoder is implemented using a VQ-VAE image encoder.</li>
              <li>The Policy-Value Function is based on TrajNet [2], an end-to-end image-to-trajectory planner for AVs</li>
              <li>The Dynamics Model is D³Nav [1], which takes an image and desired trajectory as input and produces the next video frame as output. This model will be adapted to also output a reward.</li>
            </ul>

            The Monte Carlo Tree Search, guided by these three networks, explores potential trajectories the vehicle can take in the near future (1 to 5 seconds), ultimately selecting the trajectory with the highest reward.
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>Training: Dynamics Model and Environment Encoder</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            These components can be trained on large-scale unlabeled video datasets, including:
            <ul>
              <li>Berkeley Deep Dive Video (10,000 hours)</li>
              <li>CommaVQ (1,666 hours)</li>
              <li>OpenDV (1,700 hours)</li>
            </ul>

            This massive dataset, totaling approximately 13,366 hours or 200 billion tokens at 30 FPS, provides a diverse range of driving scenarios for training.
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={require('./media/d3nav_demo_0_future_video_prediction.gif')}></img>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', textAlign: 'justify'}}>
            D³Nav is trained to predict the future video tokens given the past context
            </p>
        </div>

        <br></br>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>Training: Policy-Value Function</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            The Policy-Value Function (TrajNet [2]) is pre-trained on high-quality ego-motion datasets like NuScenes and Berkeley Deep Dive. After pre-training, it's fine-tuned using the Dynamics Model as a simulator on frames from the larger video datasets.
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>Training: Cost</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Estimating the training cost can be done with some simple back-of-the-napkin math. Andrej Karpathy [6] showed us that it is possible to replicate GPT-2 results today by training on 10B tokens for 90 minutes for ~$20. Extrapolating a bit, we will be training on 200B tokens for about 30 hours for ~$400 per experiment. Assuming we run around 250 experiments (which is a LOT), it would sum up to $100,000!
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>Inference</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            To run the model in inference mode, we implement the Monte-Carlo Tree search to use the Policy-Value Function (TrajNet) to sample a set of future trajectories and then use the Dynamics Model (D³Nav) to predict the next frame for each of these frontiers. We apply this dynamic to explore this for the next N steps in each frontier and broaden our search at each level to expand the search tree. Finally, we pick the trajectory which shows the most promise.
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>The Promise of D³NavZero</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            While the computational demands of D³NavZero are currently high for online inference, with an estimated inference time of about 10 seconds depending on the search depth and width, its potential is immense. The system can be used offline to supervise smaller, more efficient models that run on vehicles. We may even alter the search depth and width to optimize for inference speed. As hardware performance improves and optimization techniques advance, we can expect D³NavZero to become increasingly viable for real-time applications.
            The future of autonomous vehicles is bright, with D³NavZero representing just one of the many exciting technologies waiting to be explored and refined. As we continue to push the boundaries of what's possible in AI and self-driving cars, innovations like D³NavZero will play a crucial role in creating safer, more efficient, and more capable autonomous vehicles.
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h4>References</h4>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
<ol>
<li><a href="https://adityang.github.io/D3Nav" target="_blank">D³Nav: Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic</a></li>
  <li><a href="https://adityang.github.io/TrajNet" target="_blank">Thermal Voyager: A Comparative Study of RGB and Thermal Cameras for Night-Time Autonomous Navigation</a></li>
  <li><a href="https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/" target="_blank">MuZero: Mastering Go, chess, shogi and Atari without rules</a></li>
  <li><a href="https://www.youtube.com/watch?v=JhraWiBuBbs&ab_channel=Dr.Know-it-allKnowsitall" target="_blank">Tesla's application of AI-guided tree search for path planning in their Full Self-Driving (FSD) v12 software</a></li>
  <li><a href="https://www.youtube.com/watch?v=-KMdo9AWJaQ&ab_channel=georgehotzarchive" target="_blank">comma ai | Learning a Driving Simulator</a></li>
  <li><a href="https://github.com/karpathy/llm.c/discussions/481" target="_blank">Reproducing GPT-2 (124M) in llm.c in 90 minutes for $20 #481</a></li>
</ol>
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
