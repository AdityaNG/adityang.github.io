import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import PaperBlock from './components/PaperBlock';

import './styles.css';


function BengaluruDrivingDataset() {
  useEffect(() => {
    document.title = 'BDD';
  }, []);
  const title = "BengaluruDrivingDataset: 3D Occupancy Convolutional Transformer Network in Unstructured Traffic Scenarios"
  const authors = [
    {
      author_name: "Aditya N G",
      author_email: "adityang5@gmail.com",
      author_url: "https://adityang.github.io/"
    },
    {
      author_name: "Dhruval P B",
      author_email: "dhruvalpb@gmail.com",
      author_url: "https://in.linkedin.com/in/dhruvalpb"
    },
    {
      author_name: "Harshith M K",
      author_email: "hiharshith18@purdue.edu",
      author_url: "https://scholar.google.com/citations?user=7hBzcg0AAAAJ&hl=en"
    },
    {
      author_name: "Priya S S",
      author_email: "sspriya147@gmail.com",
      author_url: "https://www.linkedin.com/in/priyaasuresh/?originalSubdomain=in"
    },
    {
      author_name: "Dr. Surabhi Narayan",
      author_email: "surabhinarayan@pes.edu",
      author_url: "https://staff.pes.edu/nm1306/"
    },
  ]

  const papers = [
    {
      title: "BengaluruDrivingDataset",
      image: require("./media/paper_OCTraN.png"),
      conference: "CVPR 2023",
      bibtext_plain: "Aditya N Ganesh, Dhruval Pobbathi Badrinath, Harshith Mohan Kumar, Priya S, and Surabhi Narayan. BengaluruDrivingDataset: 3d occupancy convolutional transformer network in unstructured traffic scenarios. Spotlight Presentation at the Transformers for Vision Workshop, CVPR, 2023. Transformers for Vision Workshop, CVPR 2023",
      bibtext: "@misc{analgund2023BengaluruDrivingDataset,\
  title={BengaluruDrivingDataset: 3D Occupancy Convolutional Transformer Network in Unstructured Traffic Scenarios},\
  author={Ganesh, Aditya N and Pobbathi Badrinath, Dhruval and\
    Kumar, Harshith Mohan and S, Priya and Narayan, Surabhi\
  },\
  year={2023},\
  howpublished={Spotlight Presentation at the Transformers for Vision Workshop, CVPR},\
  url={https://sites.google.com/view/t4v-cvpr23/papers#h.enx3bt45p649},\
  note={Transformers for Vision Workshop, CVPR 2023}\
}",
      links: [
        { key: "Paper", value: "https://arxiv.org/abs/2307.10934" },
        { key: "Project", value: "/#/BengaluruDrivingDataset" }
      ],
      project_page: "/BengaluruDrivingDataset",
      tldr: "3D Occupancy Prediction from Monocular Video",
    },
  ];

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
        <h3>Department of Computer Science, PES University, Bengaluru</h3>
        <h3>Published at <a href="https://sites.google.com/view/t4v-cvpr23/papers?authuser=0#:~:text=%5D%20%5Bvideo%5D%20%5Bsupplementary%5D-,Bengaluru%20Driving%20Dataset,-%3A%203D%20Occupancy%20Convolutional">CVPR's T4V 2023</a></h3>
      </header>
      <main>
      
        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button href="https://arxiv.org/abs/2307.10934" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px'}}>
            Paper
            </Button>
            <Button href="https://www.youtube.com/watch?v=Llro9RwpVpE&ab_channel=AdityaNG" target="_blank" rel="noopener noreferrer">
            Video
            </Button>
            <Button href="https://github.com/AdityaNG/bdd_dataset_iterator" target="_blank" rel="noopener noreferrer">
            Dataset
            </Button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '60vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/BDD_Iterator_Demo-2023-08-30_08.25.17.gif")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            We gathered a dataset spanning 114 minutes and 165K frames in Bengaluru, India. Our dataset consists of video data from a calibrated camera sensor with a resolution of 1920×1080 recorded at a framerate of 30 Hz. We utilize a Depth Dataset Generation pipeline that only uses videos as input to produce high-resolution disparity maps
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

export default BengaluruDrivingDataset;
