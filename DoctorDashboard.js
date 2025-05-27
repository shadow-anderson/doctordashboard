import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Avatar, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useTheme, alpha } from '@mui/material/styles';

// Import components
import Dashboard from './Dashboard';
import Appointments from './Appointments';
import Patients from './Patients';
import Documents from './Documents';
import Invoices from './Invoices';
import Availability from './Availability';
import AiAssistant from './AiAssistant';

const menuItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, component: Dashboard },
  { label: 'Appointments', icon: <EventNoteIcon />, component: Appointments },
  { label: 'Patients', icon: <PeopleIcon />, component: Patients },
  { label: 'Documents', icon: <DescriptionIcon />, component: Documents },
  { label: 'Invoices', icon: <ReceiptIcon />, component: Invoices },
  { label: 'Availability', icon: <AccessTimeIcon />, component: Availability },
  { label: 'AI Assistant', icon: <SmartToyIcon />, component: AiAssistant },
];

const drawerWidth = 260;

const DoctorDashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const lightBlue = theme.palette.primary.light;
  const mainBlue = theme.palette.primary.main;
  const darkBlue = theme.palette.primary.dark;
  const hoverBg = alpha(mainBlue, 0.08);

  const CurrentComponent = menuItems[selectedIndex].component;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(160deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          overflowX: 'hidden',
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#fff',
            color: mainBlue,
            border: 'none',
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            borderRadius: 0,
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
          },
        }}
        PaperProps={{ elevation: 3 }}
      >
        <Box sx={{ p: 3, pb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src="/logo192.png" alt="MedYatra Logo" sx={{ width: 44, height: 44, bgcolor: lightBlue }} />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, color: mainBlue, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            MedYatra
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: lightBlue, mx: 2, mb: 1 }} />
        <List sx={{ flexGrow: 1, overflowX: 'hidden' }}>
          {menuItems.map((item, idx) => (
            <ListItem
              button
              key={item.label}
              selected={selectedIndex === idx}
              onClick={() => setSelectedIndex(idx)}
              sx={{
                mb: 1,
                px: 2,
                borderRadius: 2,
                backgroundColor: selectedIndex === idx ? hoverBg : 'transparent',
                color: selectedIndex === idx ? darkBlue : mainBlue,
                boxShadow: selectedIndex === idx ? 2 : 'none',
                transition: 'background 0.2s, color 0.2s',
                overflowX: 'hidden',
                '&:hover': {
                  backgroundColor: hoverBg,
                  color: darkBlue,
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: selectedIndex === idx ? 700 : 500, sx: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'inherit' } }} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto', textAlign: 'center', color: mainBlue, fontSize: 13 }}>
          © {new Date().getFullYear()} MedYatra
        </Box>
      </Drawer>
      
      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' }}>
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 1200, minHeight: 400, p: { xs: 2, md: 4 }, mt: 4, borderRadius: 4, background: 'rgba(255,255,255,0.95)', boxShadow: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: mainBlue }}>
            {menuItems[selectedIndex].label}
          </Typography>
          <CurrentComponent />
        </Paper>
      </Box>
    </Box>
  );
};

export default DoctorDashboard;