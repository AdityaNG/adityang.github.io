import React from 'react';
import Button from '@mui/material/Button';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import PaperBlock from './components/PaperBlock';

import './styles.css';


function SOccDPT() {
  const title = "SOccDPT: 3D Semantic Occupancy from Dense Prediction Transformers trained under memory constraints"
  const authors = [
    {
      author_name: "Aditya N G",
      author_email: "adityang5@gmail.com",
      author_url: "https://adityang.github.io/"
    }
  ]

  const papers = [
    {
        title: "SOccDPT",
        image: require("./media/demo.gif"),
        conference: "Arxiv 2023",
        bibtext_plain: "Aditya Nalgunda Ganesh. Soccdpt: Semi-supervised 3d semantic occupancy from dense prediction transformers trained under memory constraints. Arxiv, 2023.",
        bibtext: "@article{NG2024SOccDPT,\
  title={SOccDPT: 3D Semantic Occupancy from Dense Prediction Transformers trained under memory constraints},\
  author={NG, Aditya},\
  journal={Advances in Artificial Intelligence and Machine Learning},\
  volume={ISSN: 2582-9793, Source Id: 21101164612},\
  year={2024},\
  url={https://www.oajaiml.com/}\
}",
      tldr: "Real time 3D Semantic Occupancy from Dense Prediction Transformers",
      links: [
        { key: "Paper", value: "https://arxiv.org/abs/2311.11371"},
        { key: "Project", value: "/SOccDPT" }
      ],
      project_page: "/SOccDPT",
      }
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
        {/* <h3>Published at <a href="https://2024.ieee-icra.org/">ICRA 2024</a></h3> */}
      </header>
      <main>
      
        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button href="https://arxiv.org/abs/2311.11371" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px'}}>
            Paper
            </Button>
            <Button href="https://www.youtube.com/watch?v=XNREAdmF34I&ab_channel=AdityaNG" target="_blank" rel="noopener noreferrer">
            Video
            </Button>
            <Button href="https://github.com/AdityaNG/SOccDPT" target="_blank" rel="noopener noreferrer">
            Code
            </Button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/demo.gif")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                <b>Abstract.</b> We present SOccDPT, a memory-efﬁcient approach for 3D semantic occupancy prediction from monocular image input using dense prediction transformers. To address the limitations of existing methods trained on structured trafﬁc datasets, we train our model on unstructured datasets including the Indian Driving Dataset and Bengaluru Driving Dataset. Our semi-supervised training pipeline allows SOccDPT to learn from datasets with limited labels by reducing the requirement for manual labelling by substituting it with pseudo-ground truth labels to produce our Bengaluru Semantic Occupancy Dataset. This broader training enhances our model’s ability to handle unstructured trafﬁc scenarios effectively. To overcome memory limitations during training, we introduce patch-wise training where we select a subset of parameters to train each epoch, reducing memory usage during auto-grad graph construction. In the context of unstructured trafﬁc and memory-constrained training and inference, SOccDPT outperforms existing disparity estimation approaches as shown by the RMSE score of 9.1473, achieves a semantic segmentation IoU score of 46.02% and operates at a competitive frequency of 69.47 Hz. We make our code and semantic occupancy dataset public.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                Video Presentation
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '75vw', margin: '20px', justifyContent: 'center', position: 'relative', paddingBottom: '45%', height: 0}}>
                <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} src="https://www.youtube.com/embed/XNREAdmF34I" title="SOccDPT Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                Our Architecture
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            SOccDPT uses the ViT family for backbone feature extraction which allows us to carefully balance accuracy and compute requirements. SOccDPT takes an RGB image input of shape 3x256x256 produces image features of shape 256x128x128. We then pass the extracted features to a disparity head and a segmentation head. We apply the Scale and Shift Invariant loss and the Binary Cross Entropy loss for the disparity and segmentation outputs respectively. With the known camera intrinsic, we project the semantics into 3D space with the help of the disparity map, thus producing a 3D semantic map from one backbone
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/socc_arch.png")} />
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

export default SOccDPT;