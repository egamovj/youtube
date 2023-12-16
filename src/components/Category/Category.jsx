import { Box, Stack } from "@mui/material";
import { category } from "../../constants/index";
import { colors } from "../../constants/colors";

function Category({ selectedCategoryHander, selectCategory }) {
  return (
    <Stack className="category-btn-w">
      <Box>
        {category?.map((item) => (
          <button
            key={item?.name}
            className="category-btn"
            style={{
              borderRadius: "0",
              backgroundColor: item?.name === selectCategory && "#464444 ",
            }}
            onClick={() => selectedCategoryHander(item?.name)}
          >
            <span
              style={{
                color:
                  item?.name === selectCategory ? "#fff" : colors?.secondary,
                marginRight: "15px",
              }}
              className="cateygory-icon"
            >
              {item?.icon}
            </span>
            <span style={{ opacity: 1 }}> {item?.name} </span>
          </button>
        ))}
      </Box>
    </Stack>
  );
}

export default Category;
