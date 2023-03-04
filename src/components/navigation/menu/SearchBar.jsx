import { useState, useContext } from "react";
import { TextField, Box, useMediaQuery, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LoginContext from "../../../context/LoginContext";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { openSearchMobile, setOpenSearchMobile, searchBar, setSearchBar } =
    useContext(LoginContext);
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  return (
    <>
      {/* Desktop version  */}
      <Grid2
        container
        sx={
          match
            ? { display: "none" }
            : {
                display: "flex",
                alignItems: "center",
              }
        }
        position="relative"
      >
        <Box
          position="absolute"
          sx={{
            display: "flex",
            right: "0",
            width: "calc(8vw + 4rem)",
            bottom: "2.5rem",
            zIndex: "1000",
          }}
        >
          <SearchIcon
            sx={{
              height: "100%",
              display: "flex",
              alignSelf: "flex-end",
              borderBottom: "1px solid #222",
              width: "calc(100% + 0.25rem",
              paddingRight: "0.25rem",
            }}
          />
          <TextField
            label={"Search products"}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            id="name_field"
            variant="standard"
            className="search"
            sx={{ width: "100%" }}
            required
          />
        </Box>
      </Grid2>

      {/* Mobile version  */}
      <Grid2
        container
        sx={
          openSearchMobile && match
            ? { display: "flex", alignItems: "center", width: "90vw" }
            : {
                display: "none",
              }
        }
        position="absolute"
      >
        <Box
          sx={{
            display: "flex",
            right: "0",
            width: "100%",
            bottom: "2.5rem",
            zIndex: "1000",
          }}
        >
          <SearchIcon
            sx={{
              height: "100%",
              display: "flex",
              alignSelf: "flex-end",
            }}
          />
          <TextField
            label={"Search products"}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            id="name_field"
            variant="standard"
            className="search_mobile"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    cursor: "pointer",
                    color: "#222",
                  }}
                  onClick={() => {
                    setOpenSearchMobile(!openSearchMobile);
                  }}
                >
                  <CloseIcon />
                </InputAdornment>
              ),
            }}
            required
          />
        </Box>
      </Grid2>
    </>
  );
};

export default SearchBar;
