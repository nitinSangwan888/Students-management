import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

const MessagesCard = () => {
  return (
    
      <Card variant="outlined" sx={{backgroundColor:"#191C24",width:"32%", height:"52vh"}} >
        <CardContent    >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" component="h6" sx={{ mb: 0,color:"white" }}>
              Messages
            </Typography>
            <Link href="#"  sx={{color:"#EB1616",textDecoration:"none"}}>Show All</Link>
          </Box>
          <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:"white" }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:"#6C7293"}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:"#6C7293"}}>Short message goes here...</Typography>
            </div>
          </Box>
          <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:"white" }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:"#6C7293"}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:"#6C7293"}}>Short message goes here...</Typography>
            </div>
          </Box> <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:"white" }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:"#6C7293"}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:"#6C7293"}}>Short message goes here...</Typography>
            </div>
          </Box> <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:"white" }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:"#6C7293"}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:"#6C7293"}}>Short message goes here...</Typography>
            </div>
          </Box>
          
        </CardContent>
      </Card>
   
  );
};

export default MessagesCard;
