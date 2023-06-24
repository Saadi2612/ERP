import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import img1 from "../assets/project-1-960x540.jpg";
import img2 from "../assets/project-2-480x540.jpg";
import img3 from "../assets/project-3-480x540.jpg";
import img4 from "../assets/project-4-480x540.jpg";
import img5 from "../assets/project-5-480x540.jpg";
import img6 from "../assets/project-6-960x540.jpg";

const itemData = [
  {
    img: img1,
    title: 'A Mega Project',
    rows: 3,
    cols: 4,
  },
  {
    img: img2,
    title: 'High Tower Building',
    rows: 3,
  },
  {
    img: img3,
    title: 'Skyscraper Project',
    rows: 3,
  },
  {
    img: img4,
    title: 'National Museum',
    rows: 3,
  },
  {
    img: img5,
    title: 'Skyscraper Tower',
    rows: 3,
  },
  {
    img: img6,
    title: 'Big Company Headquarters',
    rows: 3,
    cols: 4,
  },
];

const imageTitleStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  padding: '10px',
  background: 'transparent',
  color: '#fff',
  fontSize: '20px',
  textAlign: 'center',
};

const imageOverlayStyle = {
  position: 'relative',
  margin: '-4px', // Negative margins to remove gaps between images
}

const imageOverlayContentStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
}

export default function ProjectImages() {
  return (
    <ImageList sx={{ width: "82%", height: "100%", margin: 'auto', gap: 0 }} cols={6} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} sx={imageOverlayStyle}>
          <img
            src={item.img}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <div style={imageOverlayContentStyle} />
          <Typography variant="body2" style={imageTitleStyle} sx={{fontFamily:"Impact"}}>
            {item.title}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
