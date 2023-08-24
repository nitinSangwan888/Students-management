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
    
      <Card variant="outlined" sx={{backgroundColor:`var(--light)`,color:`var(--dark)`,width:"32%", height:"52vh"}} >
        <CardContent    >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" component="h6" sx={{ mb: 0,color:`var(--dark)` }}>
              Messages
            </Typography>
            <Link href="#"  sx={{color:`var(--text)`,textDecoration:"none"}}>Show All</Link>
          </Box>
          <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:`var(--dark)` }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:`var(--textWhite)`}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:`var(--textWhite)`}}>Short message goes here...</Typography>
            </div>
          </Box>
          <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:`var(--dark)` }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:`var(--textWhite)`}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:`var(--textWhite)`}}>Short message goes here...</Typography>
            </div>
          </Box>
          <Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:`var(--dark)` }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:`var(--textWhite)`}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:`var(--textWhite)`}}>Short message goes here...</Typography>
            </div>
          </Box><Box sx={{ borderBottom: '1px solid #ccc',display:"flex",marginBottom:"14px" }}>
            <Avatar src="image-50.png" alt="User" sx={{ width: 40, height: 40, flexShrink: 0 }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignContent:"center"}}>
              <div style={{display:"flex",width:"100%",paddingLeft:"1rem"}} >
                <Typography variant="h6" component="h6" sx={{ margin: '0',fontSize:"1rem" ,color:`var(--dark)` }}>
                  Jhon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{paddingLeft:"3rem",color:`var(--textWhite)`}}>
                  15 minutes ago
                </Typography>
              </div>
              <Typography variant="body1" sx={{paddingLeft:"1rem",color:`var(--textWhite)`}}>Short message goes here...</Typography>
            </div>
          </Box>
          
        </CardContent>
      </Card>
   
  );
};

export default MessagesCard;
