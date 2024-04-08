import React from 'react';
import Button from '@mui/material/Button';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import PaperBlock from './components/PaperBlock';

import './styles.css';


function DriveLLaVA() {
  const title = "DriveLLaVA: Using Large Vision Models as Driving Agents for AVs"
  const authors = [
    {
      author_name: "Aditya N G",
      author_email: "adityang5@gmail.com",
      author_url: "https://adityang.github.io/"
    },
  ]

  const papers = [
    {
      title: "DriveLLaVA",
      image: require("./media/paper_DriveLLaVA.gif"),
      // conference: "CVPR 2023",
      bibtext_plain: "Aditya N Ganesh. DriveLLaVA: Using Large Vision Models as Driving Agents for AVs. 2024",
      bibtext: "@misc{analgund2024DriveLLaVA,\
  title={DriveLLaVA: Using Large Vision Models as Driving Agents for AVs},\
  author={Ganesh, Aditya N},\
  year={2024},\
}",
      links: [
        { key: "Paper", value: "https://adityang.github.io/DriveLLaVA" },
        { key: "Project", value: "/DriveLLaVA" }
      ],
      project_page: "/DriveLLaVA",
      tldr: "Using Large Vision Models as Driving Agents for AVs",
    },
  ];


  const image = require("./media/paper_DriveLLaVA.gif")

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
        {/* <h3>Department of Computer Science, PES University, Bengaluru</h3> */}
        {/* <h3>Published at <a href="https://sites.google.com/view/t4v-cvpr23/papers?authuser=0#:~:text=%5D%20%5Bvideo%5D%20%5Bsupplementary%5D-,Bengaluru%20Driving%20Dataset,-%3A%203D%20Occupancy%20Convolutional">CVPR's T4V 2023</a></h3> */}

      </header>
      <main>

      <hr />

      <div style={{display: 'flex', justifyContent: 'center'}}>
        {/* <Button href="https://arxiv.org/abs/2307.10934" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px'}}>
          Paper
        </Button> */}
        <Button href="https://adityang5.medium.com/using-large-vision-models-as-driving-agents-for-avs-f5ada6807a6c" target="_blank" rel="noopener noreferrer">
          Article
        </Button>
        <Button href="https://github.com/AdityaNG/DriveLLaVA" target="_blank" rel="noopener noreferrer">
          Code
        </Button>
      </div>
      

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/paper_DriveLLaVA.gif")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Autonomous vehicles (AVs) have the potential to revolutionize transportation, but developing safe and reliable AVs remains a challenge. One key hurdle is designing an effective driving agent, the software component that controls the vehicle’s behavior. This article explores DriveLLaVA, an approach that leverages Large Vision Models (LLMs) for autonomous driving.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
              The DriveLLaVA Concept
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
              DriveLLaVA capitalizes on the world model that an LLM possesses to navigate the driving environment. Here’s a breakdown of the concept:
            </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <ul style={{marginLeft: 10}}>
                <li><b>The Core: A Large Vision Model (LLaVA)</b> DriveLLaVA utilizes an LLM as its foundation. This LLM is pre-trained on a vast amount of visual data, allowing it to understand the visual world.</li>
                <li><b>Trajectory Tokenization:</b> The concept hinges on converting the desired driving path (trajectory) into a sequence of tokens. These tokens represent ego-motion which translates to specific driving maneuvers, such as lane changes or turns.</li>
                <li><b>Training Dataset Generation:</b> To train DriveLLaVA, a dataset of paired elements is created: Each element consists of a driving frame (image captured by the vehicle’s camera). The corresponding tokenized trajectory represents the desired driving path for that frame.</li>
                <li><b>Fine-tuning DriveLLaVA:</b> DriveLLaVA is then fine-tuned using the generated dataset. During this process, DriveLLaVA learns to predict the correct trajectory tokens based on the input driving frames.</li>
            </ul>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            The power of this approach lies in leveraging the LLM’s inherent understanding of the world. This pre-existing knowledge allows DriveLLaVA to interpret visual information and make informed driving decisions without the need for extensive hand-crafted rules.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Prompting the Model
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            The trajectory is quantized by fitting a K-Means clustering model on the dataset, which was inspired by TrajNet. The quantized index is then mapped to a Unicode character by using a lookup into the Model’s Dictionary. To ensure some diversity in the prompts, we use an LLM to generate various versions of the same prompt with different words. Following is an example of a training sample in the dataset.
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/drivellava_json.png")} />
            </div>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Quantized Trajectory
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '30vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/drivellava_trajectory_templates_64.png")} />
            </div>
            <div style={{maxWidth: '30vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/drivellava_trajectory_templates_128.png")} />
            </div>
            <div style={{maxWidth: '30vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/drivellava_trajectory_templates_256.png")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            The trajectory is quantized by fitting a K-Means clustering model on the dataset, which was inspired by TrajNet. The quantized index is then mapped to a Unicode character by using a lookup into the Model’s Dictionary. To ensure some diversity in the prompts, we use an LLM to generate various versions of the same prompt with different words. Following is an example of a training sample in the dataset.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Results
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '50vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/drivellava_results_graph.png")} />
            </div>
            <div style={{maxWidth: '50vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/drivellava_results_table.png")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            The DriveLLaVA project reports promising results. The model achieved a training loss of 0.722 and was able to predict reasonable driving trajectories as shown in the visual in the beginning of this article.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                Source Code
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
              We have released our implementation of DriveLLaVA on GitHub. We are open to contributions!
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <Button href="https://github.com/AdityaNG/DriveLLaVA" target='_blank'>[CODE]</Button>
            </div>
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

export default DriveLLaVA;
