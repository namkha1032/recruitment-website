import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import Service from "../Service";
import { useDispatch, useSelector } from "react-redux";
function AppPagination({ setChangeList, data, pageSize }) {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  if (count !== data.length) {
    setCount(data.length);
    setPage(1)
  }
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  useEffect(() => {
      setPagination({
        ...pagination,
        count: count,
        from: 0,
        to: pageSize,
      });
  }, [count]);
  useEffect(() => {
    Service.getData(data, pagination.from, pagination.to).then((response) => {
      setChangeList(response.data);
    });
  }, [pagination.from, pagination.to,count]);
  const handleChangePage = (event, page) => {
    setPage(page);
    setPagination({
      ...pagination,
      from: (page - 1) * pageSize,
      to: (page - 1) * pageSize + pageSize,
    });
  };

  return (
   <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{
        margin: "20px 0px",
      }}
      height='32px'
    >
    {pagination.count  === data.length &&   <Pagination
        count={Math.ceil(count / pageSize)}
        page={page}
        onChange={handleChangePage}
      />}
    </Box>
  );
}
export default AppPagination;
