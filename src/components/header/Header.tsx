import "./Header.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";
import { lightMode } from "../../../redux/features/darkmode/darkmodeSlice";
import { RootState } from "../../../redux/store/store";
import { searchStudents } from "../../../api/api";
import { Student } from "../../../interface/interface";
const Header = (props: any) => {
  const { open, setOpen } = props;
  const mode = useSelector((state: RootState) => state.darkmode.darkMode);

  const dispatch = useDispatch();
  const [searchShow, setsearchShow] = React.useState(false);

  React.useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode !== null) {
      dispatch(lightMode(storedMode === "dark"));
    }
  }, [dispatch]);

  const handleMode = () => {
    const newMode = !mode;
    dispatch(lightMode(newMode));
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

const [students, setStudents] = React.useState<Student[]>([])


const handleChange = async (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const response = await searchStudents(e.target.value)
  // console.log(response?.data);
  setStudents(response?.data)
};


console.log(students);










  const Search = styled("div")(({ theme }) => ({
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: `var(--search)`,
    "&:hover": {
      backgroundColor: `var(--search)`,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>settings</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          sx={{ color: `var(--dark)` }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleMode}>
        <IconButton sx={{ color: `var(--dark)` }}>
          {mode === false ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <p>Mode</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: `var( --light)` }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              // color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, color: `var(--secondary)` }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            ></Typography>
            <div className="studentSearch">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onFocus={() => setsearchShow(true)}
                  onBlur={() => setsearchShow(false)}
                  onChange={handleChange}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <div
                className="searchWrapperContainer"
                style={{ display: searchShow ? "flex" : "none" }}
              >
                {
                  students.map((item,index)=>{
                    return (
                      <div key={index}>
                        <img src={item?.photo} alt="" />
                        <p>{item?.name} </p>
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton onClick={handleMode} sx={{ color: `var(--dark)` }}>
                {mode === false ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                sx={{ color: `var(--dark)` }}
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                // color="inherit"
                sx={{ color: `var(--dark)` }}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                sx={{ color: `var(--dark)` }}
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};

export default Header;
