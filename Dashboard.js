import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  Link,
  Button,
  IconButton,
  Tooltip,
  Chip,
  LinearProgress,
  Fade,
  Stack,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

// Enhanced mock data
const dashboardStats = {
  totalPatients: {
    value: 247,
    change: 12,
    trend: 'up',
    icon: <PersonOutlineIcon />,
    label: 'Total Patients',
    subtext: 'vs last month',
    progress: 78
  },
  appointments: {
    value: 8,
    completed: 3,
    upcoming: 5,
    icon: <AccessTimeIcon />,
    label: "Today's Appointments",
    subtext: 'completed, upcoming',
    progress: 62
  },
  documents: {
    value: 14,
    icon: <ArticleOutlinedIcon />,
    label: 'New Documents',
    subtext: 'This week',
    progress: 45
  },
  revenue: {
    value: 8429,
    change: 8,
    trend: 'up',
    icon: <MonetizationOnOutlinedIcon />,
    label: 'Revenue',
    subtext: 'vs last month',
    progress: 85
  }
};

// Mock appointments data
const upcomingAppointments = [
  {
    id: 1,
    patientName: 'John Smith',
    type: 'video',
    time: '09:41 am',
    date: '24/3/2025',
    startsIn: '29 minutes',
  },
  {
    id: 2,
    patientName: 'Emily Johnson',
    type: 'phone',
    time: '11:11 am',
    date: '24/3/2025',
    startsIn: 'about 2 hours',
  },
  {
    id: 3,
    patientName: 'Michael Brown',
    type: 'in-person',
    time: '12:11 pm',
    date: '24/3/2025',
    startsIn: 'about 3 hours',
  },
];

// Quick action buttons data
const quickActions = [
  { label: 'New Patient', icon: <PersonAddIcon />, color: '#4CAF50' },
  { label: 'Schedule', icon: <CalendarMonthIcon />, color: '#2196F3' },
  { label: 'Video Call', icon: <VideocamIcon />, color: '#9C27B0' },
  { label: 'Phone Call', icon: <PhoneIcon />, color: '#F44336' },
  { label: 'Generate Invoice', icon: <ReceiptLongIcon />, color: '#FF9800' },
  { label: 'Room Status', icon: <MeetingRoomIcon />, color: '#607D8B' },
];

// Doctor information
const doctorInfo = {
  name: 'Dr. Sarah Chen',
  role: 'Cardiologist',
  avatar: '/doctor-avatar.jpg', // Replace with actual avatar path
};

// Enhanced StatCard Component
const StatCard = ({ data }) => {
  const theme = useTheme();
  
  return (
    <Fade in timeout={500}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          height: '100%',
          background: '#fff',
          transition: 'all 0.3s ease',
          border: '1px solid',
          borderColor: alpha(theme.palette.primary.main, 0.1),
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[4],
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box 
            sx={{ 
              color: theme.palette.primary.main,
              p: 1.5,
              borderRadius: 3,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {data.icon}
          </Box>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
          <Typography 
          sx={{ 
            mb: 1, 
            fontWeight: 700,
            fontSize: '1.75rem', // Reduced from h4 default size
            lineHeight: 1.2
          }}
        >
          {data.label === 'Revenue' ? `$${data.value.toLocaleString()}` : data.value.toLocaleString()}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            fontSize: '0.813rem' // Slightly smaller body text
          }}
        >
          {data.label}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ fontSize: '0.75rem' }} // Smaller caption text
            >
              Progress
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ fontSize: '0.75rem' }}
            >
              {data.progress}%
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={data.progress} 
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
              }
            }}
          />
        </Box>

        {data.completed !== undefined && (
          <Box sx={{ mt: 2 }}>
            <Chip
              size="small"
              label={`${data.completed} completed`}
              sx={{ mr: 1, bgcolor: alpha(theme.palette.success.main, 0.1), color: theme.palette.success.main }}
            />
            <Chip
              size="small"
              label={`${data.upcoming} upcoming`}
              sx={{ bgcolor: alpha(theme.palette.info.main, 0.1), color: theme.palette.info.main }}
            />
          </Box>
        )}

        {data.change !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
            {data.trend === 'up' ? (
              <Chip
                size="small"
                icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
                label={`+${data.change}%`}
                sx={{ bgcolor: alpha(theme.palette.success.main, 0.1), color: theme.palette.success.main }}
              />
            ) : (
              <Chip
                size="small"
                icon={<TrendingDownIcon sx={{ fontSize: 16 }} />}
                label={`${data.change}%`}
                sx={{ bgcolor: alpha(theme.palette.error.main, 0.1), color: theme.palette.error.main }}
              />
            )}
            <Typography variant="caption" color="text.secondary">
              {data.subtext}
            </Typography>
          </Box>
        )}
      </Paper>
    </Fade>
  );
};

// Enhanced AppointmentCard Component
const AppointmentCard = ({ appointment }) => {
  const theme = useTheme();
  
  const getAppointmentIcon = (type) => {
    switch (type) {
      case 'video':
        return <VideocamIcon sx={{ fontSize: 20 }} />;
      case 'phone':
        return <PhoneIcon sx={{ fontSize: 20 }} />;
      default:
        return <MeetingRoomIcon sx={{ fontSize: 20 }} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video':
        return theme.palette.success;
      case 'phone':
        return theme.palette.info;
      default:
        return theme.palette.warning;
    }
  };

  const color = getTypeColor(appointment.type);

  return (    <Fade in timeout={500}>
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          mb: 2,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          transition: 'all 0.3s ease',
          border: '1px solid',
          borderColor: alpha(color.main, 0.1),
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme.shadows[2],
            borderColor: color.main,
          },
        }}
      >
        {/* Patient Info Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
          <Avatar 
            sx={{ 
              bgcolor: alpha(color.main, 0.1),
              color: color.main,
              width: 48,
              height: 48,
              flexShrink: 0,
            }}
          >
            {getAppointmentIcon(appointment.type)}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}> {/* minWidth: 0 prevents flex item from overflowing */}            <Typography 
              sx={{ 
                fontWeight: 600,
                fontSize: '0.938rem', // Reduced from subtitle1
                lineHeight: 1.4,
                mb: 0.5
              }} 
              noWrap
            >
              {appointment.patientName}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
              <Chip
                size="small"
                label={appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                sx={{
                  bgcolor: alpha(color.main, 0.1),
                  color: color.main,
                  borderRadius: 1.5,
                  height: 22, // Slightly smaller chip height
                  fontSize: '0.75rem', // Smaller chip text
                }}
              />
              <Typography variant="body2" color="text.secondary" noWrap>
                {`${appointment.time} • Starts in ${appointment.startsIn}`}
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* Actions Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1,
            borderTop: 1,
            borderColor: alpha(theme.palette.divider, 0.1),
            pt: 2,
            justifyContent: 'flex-end',
          }}
        >
          <Tooltip title="Reschedule appointment">
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 2,
                borderColor: alpha(theme.palette.text.primary, 0.1),
                color: theme.palette.text.primary,
                '&:hover': {
                  borderColor: theme.palette.text.primary,
                  bgcolor: alpha(theme.palette.text.primary, 0.05),
                },
              }}
            >
              Reschedule
            </Button>
          </Tooltip>
          {appointment.type === 'video' && (
            <Tooltip title="Start video call early">
              <Button
                variant="contained"
                size="small"
                startIcon={<VideocamIcon />}
                sx={{
                  borderRadius: 2,
                  bgcolor: color.main,
                  '&:hover': {
                    bgcolor: color.dark,
                  },
                }}
              >
                Start Early
              </Button>
            </Tooltip>
          )}
        </Box>
      </Paper>
    </Fade>
  );
};

// Enhanced QuickActionButton Component
const QuickActionButton = ({ action }) => {
  const theme = useTheme();
  
  return (
    <Fade in timeout={500}>
      <Button
        variant="outlined"
        startIcon={action.icon}
        endIcon={<ArrowForwardIcon />}
        sx={{
          p: 2,
          borderRadius: 3,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 1,
          flex: '1 1 calc(33.333% - 16px)',
          minWidth: { xs: 'calc(50% - 8px)', md: 'calc(33.333% - 16px)' },
          borderColor: alpha(action.color, 0.3),
          color: action.color,
          bgcolor: alpha(action.color, 0.02),
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: action.color,
            bgcolor: alpha(action.color, 0.08),
            boxShadow: `0 4px 12px ${alpha(action.color, 0.15)}`,
          },
        }}
      >
        {action.label}
      </Button>
    </Fade>
  );
};

const Dashboard = () => {
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main;

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Header Actions */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: 2, 
          mb: 4,
          position: 'absolute',
          top: -60,
          right: 0,
        }}
      >
        <Tooltip title="Notifications">
          <IconButton 
            sx={{ 
              bgcolor: 'white',
              boxShadow: theme.shadows[2],
              '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.08) }
            }}
          >
            <NotificationsNoneIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(dashboardStats).map(([key, data]) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <StatCard data={data} />
          </Grid>
        ))}
      </Grid>

      {/* Appointments Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 600, 
          color: mainBlue,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}>
          Upcoming Appointments
          <Chip
            size="small"
            label={upcomingAppointments.length}
            sx={{ 
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          />
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: theme.palette.primary.main,
            '&:hover': {
              bgcolor: alpha(theme.palette.primary.main, 0.08),
            },
          }}
        >
          View all appointments
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {upcomingAppointments.map((appointment) => (
          <Grid item xs={12} md={4} key={appointment.id}>
            <AppointmentCard appointment={appointment} />
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions Section */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ 
        fontWeight: 600, 
        mb: 3, 
        color: mainBlue,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}>
        Quick Actions
        <Chip
          size="small"
          icon={<StarIcon sx={{ fontSize: '16px !important' }} />}
          label="Essential"
          sx={{ 
            bgcolor: alpha(theme.palette.warning.main, 0.1),
            color: theme.palette.warning.main,
            fontWeight: 600,
          }}
        />
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        {quickActions.map((action) => (
          <QuickActionButton action={action} key={action.label} />
        ))}
      </Box>

      {/* Doctor Information */}
      <Divider sx={{ my: 4 }} />
      <Paper 
        elevation={0}
        sx={{ 
          p: 3, 
          borderRadius: 4,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: theme.palette.primary.main,
            transform: 'translateY(-2px)',
            boxShadow: theme.shadows[2],
          }
        }}
      >
        <Avatar 
          src={doctorInfo.avatar} 
          alt={doctorInfo.name} 
          sx={{ 
            width: 64, 
            height: 64,
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={600}>
            {doctorInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {doctorInfo.role}
          </Typography>
          <Stack direction="row" spacing={1} mt={1}>
            <Chip
              size="small"
              label="Available"
              sx={{
                bgcolor: alpha(theme.palette.success.main, 0.1),
                color: theme.palette.success.main,
              }}
            />
            <Chip
              size="small"
              label="Top Rated"
              sx={{
                bgcolor: alpha(theme.palette.warning.main, 0.1),
                color: theme.palette.warning.main,
              }}
            />
          </Stack>
        </Box>
        <Tooltip title="More options">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Paper>
    </Box>
  );
};

export default Dashboard;
